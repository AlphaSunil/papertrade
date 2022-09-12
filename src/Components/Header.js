import React, { Fragment } from "react";
import { CgDarkMode } from "react-icons/cg";
import { CryptoState } from "../Config/CryptoContext";
import StockTiker from "./StockTiker";
import { Link } from "react-router-dom";

const Header = () => {
  const { currency, setCurrency } = CryptoState();
  return (
    <Fragment>
      <div className="flex justify-between items-center bg-white p-2 md:mx-10 md:mb-2  ">
        <Link to="/">
          <h1 className="text-4xl drop-shadow-md ">
            <span className="opacity-50">Paper</span>
            <span className="font-bold">trade</span>
          </h1>
        </Link>
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
