import React from "react";
import { Fragment } from "react";
import { CryptoState } from "../Config/CryptoContext";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
const Signup = ({ open, onClose }) => {
  if (!open) return null;
  const { setLoginInModal } = CryptoState();
  return (
    <Fragment>
      <div
        className="bg-black/50 fixed w-full h-full z-10 "
        onClick={onClose}
      ></div>
      <div
        className="w-[90%] sm:w-[50%]  bg-white  rounded shadow-lg fixed top-10 left-[50%] translate-x-[-50%] flex flex-col sm:flex-row p-8 z-20 flex-wrap justify-end
       "
      >
        <div className=" leading-none text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:6xl w-1/2 flex flex-col ">
          <div className="border-b-2 pb-1 sm:mb-auto mb-1 sm:mr-10">
            <div className="absolute top-1 right-1 cursor-pointer">
              <AiOutlineClose size={25} onClick={onClose} />
            </div>
            <h1>Experience </h1>
            <h1>
              NXT-<span className="opacity-50">GEN</span>
            </h1>
            <h1>
              <span className="opacity-50">Paper</span>
              <span className="font-bold">trade</span>
            </h1>
          </div>
          <div className="sm:flex items-center border-2 text-xs sm:text-sm mr-5  rounded shadow-inner justify-center  hidden hover:bg-slate-50 space-x-1 cursor-pointer">
            {<FcGoogle size={24} />}
            <h1>Sign up with Google</h1>
          </div>
        </div>
        <div className="sm:w-1/2">
          <form>
            <div className="grid grid-cols-2 gap-2">
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  placeholder="First name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput124"
                  aria-describedby="emailHelp124"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput125"
                placeholder="Email address"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="password"
                className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput126"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-black
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-gray-700 hover:shadow-lg
  
      transition
      duration-150
      ease-in-out"
            >
              Sign up
            </button>
          </form>
          <div className="flex mt-1 items-center border-2 text-sm    rounded cursor-pointer shadow-inner justify-center  sm:hidden hover:bg-slate-50 space-x-1">
            <FcGoogle size={25} />
            <h1>Sign up with Google</h1>
          </div>
        </div>
        <div className="mt-1">
          <h1>
            Already have an account?&nbsp;
            <div
              onClick={() => {
                onClose();
                setLoginInModal(true);
              }}
              className="text-blue-700 inline-block cursor-pointer"
            >
              Log in
            </div>
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
