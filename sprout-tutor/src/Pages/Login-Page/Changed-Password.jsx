import React from "react";
import Button2 from "../../Components/ButtonL/Button2";
import { Link } from "react-router-dom";

function PasswordChanged() {
  return (
    <section className=" text-center ">
      <div className="flex justify-center my-10 ">
        <img
          src="icon-sprout2.png"
          className="bg-blue-800 rounded-full px-6 py-8 "
        ></img>
      </div>

      <div>
        <h1 className="text-6xl mb-6 leading-10 font-sans font-semibold">
          Password Changed
        </h1>
        <p className="leading-5 mb-28 mt-10">
          Your Password has been Changed Successfully
        </p>

        <Link to="/">
          <Button2 name="Proceed to Login" />
        </Link>
      </div>
    </section>
  );
}

export default PasswordChanged;
