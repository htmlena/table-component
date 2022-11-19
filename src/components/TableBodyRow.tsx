import { FunctionComponent, ReactElement } from "react";

type TableBodyRowProps = {
  index: number;
  cellData: {
    name: string;
    status: string;
    createdAt: string;
    price: number;
    isContinuous: boolean;
  };
};

export const TableBodyRow: FunctionComponent<TableBodyRowProps> = ({
  cellData,
  index,
}) => {
  // removes 'Project ' from 'name'
  const nameSliced = cellData.name.slice(7);

  // formats date and time
  const date = new Date(Date.parse(cellData.createdAt));
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", dateOptions);
  const dateStringFormatted = dateTimeFormat
    .formatToParts(date)
    .map(({ type, value }) => {
      switch (type) {
        case "dayPeriod":
          return `${value}`;
        default:
          return value;
      }
    })
    .join("");

  // new: blue, in progress: yellow, rejected: red, completed: green
  const statusColor =
    (cellData.status === "Rejected"
      ? "bg-rose-200 text-rose-800 font-semibold"
      : "") ||
    (cellData.status === "New"
      ? "bg-blue-100 text-blue-800 font-semibold"
      : "") ||
    (cellData.status === "Completed"
      ? "bg-emerald-200 text-emerald-800 font-semibold"
      : "") ||
    (cellData.status === "In progress"
      ? "bg-amber-200 text-amber-700 font-semibold"
      : "");

  return (
    <tr
      key={`key-body-${index}`}
      className='border-b border-solid border-indigo-50'
    >
      <TableDataCell cellData={nameSliced} />
      <TableDataCell
        cellData={cellData.status}
        customClass={statusColor}
      />
      <TableDataCell cellData={dateStringFormatted} />
      <TableDataCell cellData={cellData.price.toLocaleString()} />
      <TableDataCell
        cellData={
          cellData.isContinuous ? (
            <Tag className={"bg-emerald-200 text-emerald-800"} text={"Yes"} />
          ) : (
            <Tag className={"bg-rose-200 text-rose-800"} text={"No"} />
          )
        }
      />
    </tr>
  );
};

type TableDataCellProps = {
  cellData: string | ReactElement;
  customClass?: string;
};

export const TableDataCell: FunctionComponent<TableDataCellProps> = ({
  cellData,
  customClass,
}) => {
  return (
    <td
      className={`border-r border-solid border-slate-200 p-2 text-center min-w-[10rem] ${
        customClass ? customClass : ""
      }`}
      role='gridcell'
    >
      {cellData}
    </td>
  );
};

type TagProps = {
  text: string;
  className: string;
};

export const Tag: FunctionComponent<TagProps> = ({ text, className }) => {
  return (
    <span className={`text-sm ${className} py-0.5 px-2 rounded font-semibold`}>
      {text}
    </span>
  );
};
