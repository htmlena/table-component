import { FunctionComponent, useState } from "react";
import data from "../data.json";
import { TableBody } from "./TableBody";
import { TableHeads } from "./TableHeads";

type TableProps = {
  caption: string;
};

export const Table: FunctionComponent<TableProps> = ({ caption }) => {
  const [tableData, setTableData] = useState(data);
  const [searchedValue, setSearchedValue] = useState("");

  const columns = [
    { label: "Project Name", accessor: "name" },
    { label: "Status", accessor: "status" },
    { label: "Date created", accessor: "createdAt" },
    { label: "Price", accessor: "price" },
    { label: "Continuous project", accessor: "isContinuous" },
  ];

  const handleSorting = (sortField: string | number, sortOrder: string) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        return (
          // @ts-ignore
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <>
      <div className='flex flex-col mt-4 my-0 mx-auto max-w-[800px]'>
        <div className='flex flex-col justify-start'>
          <h1 className='text-4xl text-slate-500 text-start md:text-center'>
            {caption}
          </h1>
          <div className='mt-4 md:mt-8 text-start'>
            <label htmlFor='search' className='pr-2'>
              Keyword Search:
            </label>
            <input
              id='search'
              type='text'
              onChange={(e) => setSearchedValue(e.target.value)}
              className='border border-solid border-slate-200 rounded p-1'
            />
          </div>
        </div>
        <div role='grid' aria-colcount={5} className='my-0 mx-auto'>
          <table className='border border-solid border-slate-200 text-sm md:text-base mt-4'>
            <TableHeads columns={columns} handleSorting={handleSorting} />
            <TableBody tableData={tableData} searchedValue={searchedValue} />
          </table>
        </div>
      </div>
    </>
  );
};
