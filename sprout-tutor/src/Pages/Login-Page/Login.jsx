
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import teach from "../../assets/teach-logo.png";
import studt from "../../assets/studt-logo.png";
// import Button from "../../Components/ButtonL/Button";
import Button2 from "../../Components/ButtonL/Button2";
import Inputs from "../../Components/Inputs/Inputs";
import girl2 from '../../assets/girl2.png';
import google from '../../assets/google.png';
import wallet from '../../assets/wallet.png';
import Modal from "../../Components/Modal/Modal";
import NavigateButton from "../../Components/NavigateButton/NavigateButton";
import ToggleButton from "../../Components/ToggleButton/ToggleButton";
import './Login.scss';

function Login() {
  const [openModal, setOpenModal] = useState(false);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/teacherdashboard");
    }
  }, [navigate]);

  const LoginSubmit = (e) => {
    e.preventDefault();
    fetch("https://sprout-tutor.onrender.com/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: Email,
        password: Password,
      }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result, "result");
        if (result) {
          navigate("/teacherdashboard");
          // alert("logged in.");
        } else {
          alert("Please check your login information.");
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  function handleOpen() {
    setOpenModal(!openModal);
  }

  function handleVisibility() {
    setIsVisible(!isVisible);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEmail('');
    setPassword('');
    setKeepSignedIn(false);
  }

  return (
    <div id="login">
      <img src={girl2} alt="" id="girl-img" />

      <aside>
        <NavigateButton link={'/'} image={logo} className={'login-btn logo-navigate'} />

        <h1>Log into your account</h1>
        <p>If you do not have an account? <ToggleButton text={'Sign Up'} onClick={handleOpen} className={'log-sign'} /></p>

        <ToggleButton image={google} text={'Continue with Google'} className={'login-btn google'} />
        <ToggleButton image={wallet} text={'Connect Wallet'} className={'login-btn wallet'} />

        <span id="or">OR</span>

        <form onSubmit={handleSubmit} id="log-form">
          <span>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. sprout.tutor@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>

          <span>
            <label htmlFor="password">Your Password</label>
            <ToggleButton onClick={handleVisibility}><i className={`fa-solid fa-${isVisible ? 'eye' : 'eye-slash'} eyes`}></i></ToggleButton>
            <input
              type={isVisible ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <NavigateButton link={'/Forget-Password'} title={'Forgot Password ?'} className={'forgot'} />
          </span>

          <span id="span-checkbox">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={keepSignedIn}
              onChange={(e) => setKeepSignedIn(e.target.checked)}
            />
            <label htmlFor="checkbox">Keep me signed in until I sign out</label>
          </span>

          <button type="submit" id="login-submit">
            Login
          </button>
        </form>
      </aside>

      {openModal && (
        <Modal className={"modal-content"} closeModal={handleOpen}>
          <h1>REGISTER AS...</h1>

          <div id='content-container'>
            <div id="content">
              <img src={teach} alt="" />
              <NavigateButton link={'/register/teacher'} title={"TEACHER"} />
            </div>
            <div id="content">
              <img src={studt} alt="" />
              <NavigateButton link={'/register/student'} title={"STUDENT"} />
            </div>
            {/* <div id="content">
              <img src={parent} alt="" />
              <NavigateButton link={'/register/parent'} title={"PARENT"} />
            </div> */}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Login;
