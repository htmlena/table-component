import { FunctionComponent } from "react";

type PaginationProps = {
  rowsPerPage: number;
  totalRows: number;
  paginateFront: () => void;
  paginateBack: () => void;
  currentPage: number;
};

export const Pagination: FunctionComponent<PaginationProps> = ({
  rowsPerPage,
  totalRows,
  paginateFront,
  paginateBack,
  currentPage,
}) => {
  return (
    <div className='py-2 text-start md:text-end'>
      <div>
        <p className='text-sm text-slate-700'>
          Showing
          <span className='font-medium'>
            {" "}
            {currentPage * rowsPerPage - 20}{" "}
          </span>
          to
          <span className='font-medium'> {currentPage * rowsPerPage} </span>
          of
          <span className='font-medium'> {totalRows} </span>
          results
        </p>
      </div>
      <div>
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          {currentPage * rowsPerPage - 20 === 0 ? (
            ""
          ) : (
            <button
              onClick={() => {
                paginateBack();
              }}
              className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50'
            >
              <span>Previous</span>
            </button>
          )}
          {currentPage * rowsPerPage - 20 === totalRows - 20 ? (
            ""
          ) : (
            <button
              onClick={() => {
                paginateFront();
              }}
              className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50'
            >
              <span>Next</span>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};
