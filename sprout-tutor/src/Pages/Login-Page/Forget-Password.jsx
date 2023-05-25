import React from "react";
import Inputs from "../../Components/Inputs/Inputs";
import { Link } from "react-router-dom";
import Button2 from "../../Components/ButtonL/Button2";

function NewP() {
  return (
    <section>
      <div className="flex flex-row box-border">
        <img
          src="boy-sprout2.png"
          alt="Girl-Pix"
          className="h-screen w-1/2"
        ></img>
        <div>
          <div className="flex justify-center align-center">
            <img
              src="Logo-sprout.png"
              alt="Logo"
              className="h-2/6 mt-28 mb-8 w-2/5"
            ></img>
          </div>
          <h1 className="text-2xl mb-2 font-semibold font-sans text-center">
            Forget Password
          </h1>
          <p className="mb-10 text-lg font-normal leading-7 text-gray-600 tracking-wide font-sans text-center">
            Enter your email and we will send you a link to reset your password.
          </p>
          <div className="mx-20 px-10">
            <Inputs name="Email Address" />
            <input type="text" className="px-28 rounded-lg mb-6 mt-2" />
            <Link to="/New-Password">
              <Button2 name="Change Password" />
            </Link>
            <p className="mt-10 text-sm ">Back to Login page</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewP;
