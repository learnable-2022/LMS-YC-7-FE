import React, { useState } from "react";
import Inputs from "../../Components/Inputs/Inputs";
import { Link } from "react-router-dom";
import Button2 from "../../Components/ButtonL/Button2";

function Forget() {
  return (
    <section>
      <div className="flex flex-row box-border">
        <img
          src="boy-sprout2.png"
          alt="Girl-Pix"
          className="h-screen w-1/2"
        ></img>
        <div className="mx-0 px-2">
          <div className="flex justify-center align-center">
            <img
              src="Logo-sprout.png"
              alt="Logo"
              className=" h-2/6 mt-28 mb-8 w-2/5"
            ></img>
          </div>
          <h1 className="text-2xl font-semibold font-sans text-center">
            New Password
          </h1>
          <p className="mb-10 text-lg font-normal leading-7 text-gray-600 tracking-wide font-sans text-center">
            Create a password different from the previously used password.
          </p>
          <div className="mx-20">
            <div className="my-1">
              <Inputs name="New Password" />
            </div>
            <input type="text" className="px-28 rounded-lg" />
            <br />
            <br />
            <Inputs name="Confirm Password" />
            <input type="text" className="px-28 rounded-lg mb-8" />

            <Link to="/PasswordChangedgit">
              <Button2 name="New Password" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forget;
