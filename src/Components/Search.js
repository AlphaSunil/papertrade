import React from "react";
import { useState, useEffect } from "react";
const Search = ({ searchData }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchData(search);
  });

  return (
    <div className="flex mx-5 md:mx-10 mt-20  justify-center  text-center">
      <div className="font-bold text-4xl w-full">
        <label className="form-label inline-block mb-2 text-blacl drop-shadow-md">
          Search Crypto's
        </label>
        <input
          type="text"
          className="
       form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
     "
          id="exampleFormControlInput1"
          placeholder="Enter Coin Name"
          onChange={(event) => {
            setSearch(event.target.value.toLowerCase());
          }}
        />
      </div>
    </div>
  );
};

export default Search;
