// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import teach from '../../assets/teach-logo.png'
import studt from '../../assets/studt-logo.png'
import parent from '../../assets/parent-logo.png'
import Button from "../../Components/ButtonL/Button";
import Button2 from "../../Components/ButtonL/Button2";
import Inputs from "../../Components/Inputs/Inputs";
import Modal from "../../Components/Modal/Modal";
import NavigateButton from "../../Components/NavigateButton/NavigateButton";

function  Login() {
  const [openModal, setOpenModal] = useState(false)

  function handleOpen(){
    setOpenModal(!openModal)
  }

  return (
    <section className="block">
      <div className="flex flex-row box-border  overflow-y-hidden">
        <img src="girl2.png" alt="Girl-Pix" className="h-screen w-1/2"></img>
        <div className="mx-16 px-10 border-1 -my-16">
          <div className="flex justify-center align-center">
            <img
              src="Logo-sprout.png"
              alt="Logo"
              className="h-10 my-5 w-2/4 "
            ></img>
          </div>
          <h1 className="text-2xl font-semibold font-sans text-center">
            Log Into Your Account
          </h1>
          <p className="text-sm font-normal font-sans text-center">
            Don&apos;t have an account?
            <span className="text-blue-600" onClick={handleOpen}>Sign Up</span>
          </p>
          <div className="my-6">
            <Button name="connect with wallet" />
            <br />
            <Button name="connect with Google" />
          </div>
          <div className="flex justify-evenly mb-6">
            <hr className="border-1 border-slate-600  px-20 mt-3" />
            <p className="mx-3">OR</p>
            <hr className="border-1 border-slate-600  px-20 mt-3" />
          </div>
          <div className="my-1">
            <Inputs name="Email address" />
          </div>
          <input type="text" className="px-16" />
          <br />
          <br />
          <div className="flex justify-between mb-1">
            <Inputs name="Your Password" />
            <p>Hide</p>
          </div>
          <input type="text" className="px-16" />
          <div>
            {" "}
            <p className="float-right mr-18 mt-1 text-blue-600">
              Forget Password?
            </p>
          </div>
          <br />
          <div className="flex my-6">
            <input type="checkbox" className="rounded text-pink-500" />
            <p className="ml-2 font-normal text-base leading-6 font-sans">
              Keep me signed in until i sign out
            </p>
          </div>
          <Link to="/Forget-Password">
            <Button2 name="Login" />
          </Link>
        </div>
      </div>

      {openModal && (
        <Modal className={"modal-content"} closeModal={handleOpen}>
          <h1>REGISTER AS...</h1>

          <div id='content-container'>
            <div id="content">
              <img src={teach} alt="" />
              <NavigateButton link={'/register/teacher'} title={"TEACHER"}/>
            </div>
            <div id="content">
            <img src={studt} alt="" />
              <NavigateButton link={'/register/student'} title={"STUDENT"}/>
            </div>
            <div id="content">
            <img src={parent} alt="" />
              <NavigateButton link={'/register/parent'} title={"PARENT"}/>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default Login;
