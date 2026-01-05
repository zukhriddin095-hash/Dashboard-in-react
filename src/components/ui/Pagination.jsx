import React, { Fragment } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <Fragment>
      <div className="mt-6">
        <ul className="flex justify-center gap-1 text-gray-900">
          <li
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <a
              href="#"
              className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
              aria-label="Previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>

          {Array.from({ length: totalPages }, (__, i) => (
            <li
              onClick={() => onPageChange(i + 1)}
              className={`block   cursor-pointer size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50 ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white hover:text-gray-900"
                  : ""
              }`}
              key={i}
            >
              {i + 1}
            </li>
          ))}

          <li
            onClick={() => onPageChange(currentPage + 1)}
            disabled={onPageChange === totalPages}
          >
            <a
              href="#"
              className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
              aria-label="Next page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Pagination;
