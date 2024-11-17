import React, { useEffect, useState } from "react";
import Image from "../assets/illustration10.png";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes.js";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/");
    }
  }, [navigate]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, username, email } = values;
    const { data } = await axios.post(registerRoute, {
      username,
      email,
      password,
    });

    if (data.status === false) {
      // toast.error(data.msg, toastOptions);
      console.log(data.msg);
    }
    if (data.status === true) {
      localStorage.setItem("chat-app-user", JSON.stringify(data.user));
      navigate("/");
    }
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="top">
        <img src={Image} alt="" className="im" />
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="signin">Sign Up</div>
          <p className="text1">Enter Your Email and Password</p>
          <div className="gog">
            <img
              className="h-5 w-5 mr-2"
              src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
              alt=""
            />
            <p>Sign Up with Google</p>
          </div>
          <div className="or">
            <div className="halfline"></div>
            <p>or</p>
            <div className="halfline"></div>
          </div>
          <div className="leftt">
            <h1 className="username">
              Username<span>*</span>
            </h1>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}
              min="3"
            />
            <h1 className="username">
              Email<span>*</span>
            </h1>
            <input
              type="email"
              placeholder="example@go.com"
              name="email"
              onChange={(e) => handleChange(e)}
              min="3"
            />
            <h1 className="password">
              Password<span>*</span>
            </h1>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <button type="submit" className="signbtn bg-blue-500">
              Sign Up
            </button>
            <div className="cont3">
              <p>Already registered?</p>
              <a href="">
                <Link to="/login">Login</Link>
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
