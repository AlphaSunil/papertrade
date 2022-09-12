import React from "react";

const SelectButton = ({ children, onClick, selected }) => {
  return (
    <span
      className={`cursor-pointer   hover:bg-black hover:text-white rounded px-2 ${
        selected ? "bg-black text-white" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default SelectButton;
