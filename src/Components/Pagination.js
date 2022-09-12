import React from "react";
import { Link } from "react-scroll";
const Pagination = ({
  totalPost,
  postPerPage,
  firstPostIndex,
  lastPostIndex,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <Link
      to="table-head"
      spy={true}
      smooth={true}
      offset={-150}
      duration={500}
      className="flex justify-between items-center md:mx-10 lg:mx-10 mx-5  "
    >
      <div className="mb-10 text text-gray-500">
        <h1>{`Showing ${
          firstPostIndex + 1
        } to ${lastPostIndex} of ${totalPost}`}</h1>
      </div>
      <div className="flex mb-10">
        <div className="flex ">
          <button
            className=" block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none font-bold"
            href="#!"
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {pages.map((page, index) => (
            <button
              key={index}
              href="#!"
              onClick={() => {
                setCurrentPage(page);
              }}
              className={`page-link   py-1.5 px-3 border-0  outline-none transition-all duration-300 rounded-full ${
                page === currentPage
                  ? "text-white bg-black  "
                  : "text-gray-800 bg-transparent hover:text-gray-800 hover:bg-gray-200"
              }   focus:shadow-none hidden lg:block xl:block md:block`}
            >
              {page}
            </button>
          ))}

          <button
            className=" block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none font-bold"
            href="#!"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            disabled={currentPage === pages.length}
          >
            Next
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Pagination;
