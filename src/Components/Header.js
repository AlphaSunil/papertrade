import React, { Fragment } from "react";
import { CgDarkMode } from "react-icons/cg";
import { CryptoState } from "../Config/CryptoContext";
import StockTiker from "./StockTiker";

const Header = () => {
  const { currency, setCurrency } = CryptoState();
  return (
    <Fragment>
      <div className="flex justify-between items-center bg-white p-2  ">
        <div>
          <h1 className="text-4xl ">
            <span className="opacity-50">Paper</span>
            <span className="font-bold">trade</span>
          </h1>
        </div>
        <div>
          <select
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
          >
            <option>USD</option>
            <option>INR</option>
          </select>
        </div>
        <div>
          <button className="hover:font-bold">Login</button>
          <span>/</span>
          <button className="hover:font-bold">Sign up</button>
        </div>
        <div>
          <CgDarkMode size={30} />
        </div>
      </div>
      <StockTiker />
    </Fragment>
  );
};

export default Header;
