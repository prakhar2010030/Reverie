import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
import "./login.css";
import loginImage from "../../assets/Images/Login.svg";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorClass, setErrorClass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const submit = () => {
    const emailRegex = /^[a-zA-Z0-9_]{2,}[@][a-z]{2,5}[.][a-z]{2,}$/;
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"/;
    if (!email || !password) {
      setErrorClass(true);
      setError("Please fill all the credentials");
      return;
    }
    if (emailRegex.test(email.trim()) || passwordRegex.test(password.trim())) {
      setErrorClass(false);
      toast.success("Logged in Successfully");
      setEmail("");
      setPassword("");
     
    } else {
      setErrorClass(true);
      setError("Incorrect Email id or password is entered. Please try again.");
    }
  };
  const seen = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
    <div className="login">
      <div className="leftContainer">
        <h3>Reverie Vriddhi</h3>
        <div className="imageContainer">
          <img src={loginImage} alt="LoginImage" />
        </div>
      </div>
      <div className="rightContainer">
        <div className="formContainer">
          <h2>Login</h2>
          <div className={`input ${errorClass && "ERROR"}`}>
            <input
              type="email"
              placeholder="work email id"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={`input passwordField ${errorClass && "ERROR"}`}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {showPassword ? (
              <AiFillEye className="invisibleIcon" onClick={seen} />
            ) : (
              <AiFillEyeInvisible className="invisibleIcon" onClick={seen} />
            )}
          </div>
          <div style={errorClass ? { display: "block" } : { display: "none" }}>
            <small className="error">{error}</small>
          </div>
          <div className="linkContainer">
            <p className="link">forgot password?</p>
          </div>

          <button className="loginBtn" onClick={submit}>
            Login
          </button>
          <div className="splitter">
            <span className="line"></span>
            <span>or</span>
            <span className="line"></span>
          </div>
          <button className="googleBtn">
            <FcGoogle />
            <span>Login with Google</span>
          </button>
        </div>
        <div className="signupDescription">
          <p>
            New to Reverie Vriddhi?<span className="signUp">Signup here </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et{" "}
          </p>
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
    
  );
};

export default Login;
