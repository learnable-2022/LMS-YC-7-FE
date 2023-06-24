import React from "react";
import Button2 from "../../Components/ButtonL/Button2";
import { Link } from "react-router-dom";

function PasswordChanged({ isChanged }) {
  if (!isChanged) return null;
  return (
    <section className=" fixed inset-0 bg-blue-900 bg-opacity-25 backdrop-blur-sm flex justify-center text-center">
      <div className="flex justify-evenly my-2 p-3 bg-gray-300">
        <div className=" mt-48 ">
          <img
            src="icon-sprout2.png"
            className="bg-blue-800 rounded-full w-48 h-48  "
          ></img>
        </div>

        <div className="mt-24">
          <h1 className="text-6xl mb-6 leading-10 font-sans font-semibold">
            Password Changed
          </h1>
          <p className="leading-5 mb-28 mt-10">
            Your Password has been Changed Successfully
          </p>

          <Link to="/Login">
            <Button2 name="Proceed to Login" type="submit" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PasswordChanged;
