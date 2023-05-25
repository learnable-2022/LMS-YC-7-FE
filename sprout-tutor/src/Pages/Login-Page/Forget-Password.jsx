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
          <div className="mx-20">
            <div className="my-1">
              <Inputs name="New Password" />
            </div>
            <input type="text" className="px-28 rounded-lg" />
            <br />
            <br />
            <Inputs name="Confirm Password" />
            <input type="text" className="px-28 rounded-lg mb-8" />
            <Link to="/New-Password">
              <Button2 name="Change Password" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewP;
