import { FunctionComponent } from "react";
import { Fragment } from "react";
import { TableBodyRow } from "./TableBodyRow";

type TableBodyProps = {
  tableData: Array<{
    name: string;
    status: string;
    createdAt: string;
    price: number;
    isContinuous: boolean;
  }>;
  searchedValue: string;
};

export const TableBody: FunctionComponent<TableBodyProps> = ({
  tableData,
  searchedValue,
}) => {
  return (
    <tbody role='row'>
      {tableData
        .filter((row) => {
          return (
            !searchedValue.length ||
            row.name
              .toString()
              .toLowerCase()
              .includes(searchedValue.toString().toLowerCase()) ||
            row.status
              .toString()
              .toLowerCase()
              .includes(searchedValue.toString().toLowerCase()) ||
            row.createdAt
              .toString()
              .toLowerCase()
              .includes(searchedValue.toString().toLowerCase()) ||
            row.price
              .toString()
              .toLowerCase()
              .includes(searchedValue.toString().toLowerCase()) ||
            row.isContinuous
              .toString()
              .toLowerCase()
              .includes(searchedValue.toString().toLowerCase())
          );
        })
        .map((cellData, index) => {
          return (
            <Fragment key={index}>
              <TableBodyRow index={index} cellData={cellData} />
            </Fragment>
          );
        })}
    </tbody>
  );
};
