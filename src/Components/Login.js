import React, { Fragment } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { CryptoState } from "../Config/CryptoContext";
const Login = ({ open, onClose }) => {
  if (!open) return null;
  const { setSignUpModal } = CryptoState();
  return (
    <Fragment>
      <div
        className="bg-black/50 fixed w-full h-full z-10 "
        onClick={onClose}
      ></div>
      <div
        className="w-[90%] sm:w-[50%]  bg-white  rounded shadow-lg fixed top-10 left-[50%] translate-x-[-50%] flex flex-col  p-8 z-20   
       "
      >
        <div className=" leading-none text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:6xl  flex flex-col">
          <div className="border-b-2 pb-1  mb-1 ">
            <div className="absolute top-1 right-1 cursor-pointer">
              <AiOutlineClose size={25} onClick={onClose} />
            </div>
            <h1>
              <span className="text-[#7d7d7d]">Welcome</span> Back
            </h1>
            <h1>
              <span className="opacity-50">Paper</span>
              <span className="font-bold">trade</span>
            </h1>
          </div>
        </div>

        <div className="">
          <form>
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
              Login
            </button>
          </form>
          <div className="flex mt-1 items-center border-2 text-sm    rounded shadow-inner justify-center   hover:bg-slate-50 space-x-1 cursor-pointer">
            <FcGoogle size={25} />
            <h1>Login with Google</h1>
          </div>
          <div className="mt-1 ">
            <h1>
              Don't have an account?&nbsp;
              <div
                onClick={() => {
                  onClose();
                  setSignUpModal(true);
                }}
                className="text-blue-700 inline-block cursor-pointer"
              >
                Sign Up
              </div>
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
