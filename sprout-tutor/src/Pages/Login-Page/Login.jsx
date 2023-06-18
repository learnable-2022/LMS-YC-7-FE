import { React, useEffect, useState } from "react";


import { Link } from "react-router-dom";
import teach from '../../assets/teach-logo.png'
import studt from '../../assets/studt-logo.png'
import parent from '../../assets/parent-logo.png'
import Button from "../../Components/ButtonL/Button";
import Button2 from "../../Components/ButtonL/Button2";
import Inputs from "../../Components/Inputs/Inputs";
import Logo from "../../assets/Logo-sprout.png";

function Login() {
  
import Modal from "../../Components/Modal/Modal";
import NavigateButton from "../../Components/NavigateButton/NavigateButton";

  // async function LoginSubmit() {
  //   let result = await fetch("https://sprout-tutor.onrender.com/", {
  //     method: "post",
  //     body: JSON.stringify({ name, Password }),
  //     headers: {
  //       "content-type": "aplication/json",
  //     },
  //   });
  //   result = await result.json();
  //   console.warn(result);
  // }
  const [openModal, setOpenModal] = useState(false)

  function handleOpen(){
    setOpenModal(!openModal)
  }

  return (
    <section className="block ">
      <div className="flex overflow-y-hidden">
        <img
          src="girl2.png"
          alt="Girl-Pix"
          className="h-screen lg:w-1/2 sm:w-2/5 sm:object-fill"
        ></img>

        <div className="lg:mx-16 sm:-mx-0 sm:pr-10  px-10 border-1 lg:-mt-32 sm:pt-24 ">
          <div className="flex justify-center align-center  ">
            <img src={Logo} alt="Logo" className="h-10 mt-12 w-2/4 "></img>
          </div>
          <h1 className="text-2xl font-semibold font-sans text-center lg:mt-0 sm:mt-12">
            Log Into Your Account
          </h1>
          <p className="text-sm font-normal font-sans text-center">
            Don&apos;t have an account?
            <span className="text-blue-600 cursor-pointer" onClick={handleOpen}>Sign Up</span>
          </p>
          <div className="my-6">
            <Button name="connect with wallet" />
            <br />
            <Button name="connect with Google" />
          </div>
          <div className="flex justify-evenly lg:mb-6 lg:-mt-2 sm:mt-10">
            <hr className="border-1 border-slate-600  px-20 mt-3" />
            <p className="mx-3">OR</p>
            <hr className="border-1 border-slate-600  px-20 mt-3" />
          </div>
          <div className="lg:my-1 sm:mt-10">
            <Inputs name="Email address" />
          </div>

          <input
            type="text"
            className="px-16"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <div className="flex justify-between mb-1">
            <Inputs name="Your Password" />
            <p>Hide</p>
          </div>
          <input
            type="Password"
            className="px-16"
            onChange={(e) => setPassword(e.target.value)}
          />
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
          <div>
            <Link to="/Forget-Password">
              <Button2 name="Login" type="submit" />
            </Link>
          </div>
          {/* <div onClick={LoginSubmit}>
            <Button2 name="Login" type="submit" />
          </div> */}
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
