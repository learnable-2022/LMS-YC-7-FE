import React from "react";
import Inputs from "../../Components/Inputs/Inputs";
import { Link } from "react-router-dom";
import Button2 from "../../Components/ButtonL/Button2";
import Logo from "../../assets/Logo-sprout.png";
import "../../App.css";

function NewP() {
  return (
    <section className="block container mx-auto blockeD-CSS ">
      <div className="md:flex md:flex-row md:box-border">
        <img
          src="boy-sprout2.png"
          alt="Girl-Pix"
          className="h-screen w-1/2 hidden sm:block "
        ></img>
        <div className="sm:px-0  blockED-css">
          <div className="flex justify-center sm:align-center ">
            <img
              src={Logo}
              alt="Logo"
              className="h-14 mt-28 mb-6 w-2/5  sm:mb-8 sm:w-2/5 sm:h-3/5 "
            ></img>
          </div>
          <h1 className="text-3xl sm:mb-2  mb-20 font-semibold   font-sans text-center">
            Forget Password
          </h1>
          <p className="my-10 mb-20  text-lg font-normal leading-7 text-gray-600  font-sans text-center">
            Enter your email and we will send you a link to reset your password.
          </p>
          <div className="mx-3.5 px-10 sm:mx-20 sm:px-10">
            <Inputs name="Email Address" />
            <input type="text" className=" sm:px-28 rounded-lg mb-6 mt-2" />
            <Link to="/New-Password">
              <Button2 name="New Password" type="submit" />
            </Link>
            <p className="mt-10 text-sm ">Back to Login page</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewP;
