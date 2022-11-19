import { FunctionComponent, useState } from "react";

type TableHeadsProps = {
  columns: Array<{
    label: string;
    accessor: string;
  }>;
  handleSorting: (accessor: string, sortOrder: string) => void;
};

export const TableHeads: FunctionComponent<TableHeadsProps> = ({
  columns,
  handleSorting,
}) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead className='border-b border-solid border-slate-200' role='row'>
      <tr>
        {columns.map(({ label, accessor }) => {
          const cl =
            sortField === accessor && order === "asc"
              ? "bg-up"
              : sortField === accessor && order === "desc"
              ? "bg-down"
              : "bg-default";
          return (
            <th
              key={accessor}
              onClick={() => handleSortingChange(accessor)}
              className={`capitalize border-r border-solid border-slate-200 py-2 px-5 bg-center bg-right bg-no-repeat bg-slate-100 min-w-[10rem] ${cl}`}
              role='columnheader'
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
