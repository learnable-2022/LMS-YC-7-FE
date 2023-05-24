// import React from "react";
import Button from "../../Components/ButtonL/Button";
import Inputs from "../../Components/Inputs/Inputs";
// import { FaWallet } from "react-icons";

function Login() {
  return (
    <section className="block">
      <div className="flex flex-row box-border border-4 border-blue-400 ">
        <img src="girl2.png" alt="Girl-Pix" className="h-screen w-2/5"></img>
        <div>
          <img src="Logo-sprout.png" alt="Logo"></img>
          <h1>Log Into Your Account</h1>
          <p>
            Don&apos;t have an account?<span>signUp</span>
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
