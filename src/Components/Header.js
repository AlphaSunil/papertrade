import React, { Fragment, useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { CryptoState } from "../Config/CryptoContext";
import StockTiker from "./StockTiker";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

const Header = () => {
  const {
    currency,
    setCurrency,
    SignUpModal,
    loginModal,
    setSignUpModal,
    setLoginInModal,
  } = CryptoState();

  return (
    <Fragment>
      <Signup open={SignUpModal} onClose={() => setSignUpModal(false)} />
      <Login open={loginModal} onClose={() => setLoginInModal(false)} />
      <div className="flex justify-between items-center  bg-white p-2 md:mx-10 md:mb-2  ">
        <Link to="/">
          <div>
            <h1 className="text-4xl  drop-shadow-md ">
              <span className="opacity-50">Paper</span>
              <span className="font-bold">trade</span>
            </h1>
          </div>
        </Link>
        <div className="flex items-center  space-x-2 sm:space-x-4 md:space-x-20 lg:space-x-24 justify-items-end ">
          <select
            className="px-2 py-1 md:px-5 p lg:px-5 rounded font-bold bg-gray-100 text-black outline-none drop-shadow-md cursor-pointer appearance-none"
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
          >
            <option className="   font-bold   hover:-gray-700 text-black ">
              USD
            </option>
            <option className="  font-bold  hover:-gray-700 text-black ">
              INR
            </option>
          </select>

          <div className="md:text-lg">
            <button
              onClick={() => setLoginInModal(true)}
              className="hover:font-bold"
            >
              Login
            </button>
            <span>/</span>
            <button
              onClick={() => setSignUpModal(true)}
              className="hover:font-bold"
            >
              Sign up
            </button>
          </div>
          <div>
            <CgDarkMode size={30} />
          </div>
        </div>
      </div>
      <StockTiker />
    </Fragment>
  );
};

export default Header;
