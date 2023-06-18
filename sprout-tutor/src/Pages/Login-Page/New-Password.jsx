import React, { Fragment, useState } from "react";
import Inputs from "../../Components/Inputs/Inputs";
import Logo from "../../assets/Logo-sprout.png";
import "../../App.css";
import Button2 from "../../Components/ButtonL/Button2";
import PasswordChanged from "./Changed-Password";

function Forget() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="flex flex-row box-border blockED-css">
        <img
          src="girl2.png"
          alt="Girl-Pix"
          className="h-screen w-1/2 hidden sm:block"
        ></img>
        <div className="mx-0 px-2">
          <div className="flex justify-center align-center">
            <img
              src={Logo}
              alt="Logo"
              className=" h-2/6 mt-28 mb-8 w-2/5 "
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
            <input type="Password" className="px-28 rounded-lg" />
            <br />
            <br />
            <Inputs name="Confirm Password" />
            <input type="Password" className="px-28 rounded-lg mb-8" />
            <div onClick={() => setShowModal(true)}>
              <Button2 name="New Password" type="submit" />
            </div>

            <PasswordChanged isChanged={showModal} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Forget;
