// import React from "react";
import Button from "../../Components/ButtonL/Button";
import Inputs from "../../Components/Inputs/Inputs";
// import { FaWallet } from "react-icons";

function Login() {
  return (
    <section className="block">
      <div className="flex flex-row box-border  ">
        <img src="girl2.png" alt="Girl-Pix" className="h-screen w-1/2"></img>
        <div className="mx-10 px-20 border-4 border-blue-400">
          <div className="flex justify-center align-center">
            <img src="Logo-sprout.png" alt="Logo" className="h-8 my-7 "></img>
          </div>
          <h1 className="text-4xl font-semibold font-sans text-center">
            Log Into Your Account
          </h1>
          <p className="text-lg font-normal font-sans text-center">
            Don&apos;t have an account?
            <span className="text-blue-600">signUp</span>
          </p>
          <Button name="connect with wallet" />
          <br />
          <Button name="connect with Google" />
          <span>
            <hr className="border-m-2 border-gray-500 my-1" />
          </span>
          <p>OR</p>{" "}
          <span>
            <hr className="border-m-2 border-gray-500 my-1" />
          </span>
          <Inputs name="Email address" />
          <input type="text" />
          <br />
          <div>
            {" "}
            <Inputs name="Your Password" />
            <p>Hide</p>
          </div>
          <input type="text" />
          <div>
            {" "}
            <p>Forget Password?</p>
          </div>
          <br />
          <span>
            <input type="checkbox" className="rounded text-pink-500" />
            <p>Keep me signed in until i sign out</p>
          </span>
          <Button name="Login" />
        </div>
      </div>
    </section>
  );
}

export default Login;
