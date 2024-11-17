import React from "react";
import Image from "../assets/Designer.svg";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  return (
    <div className="nav fixed">
      <div className="links">
        <img className="logo rounded-full h-20 w-20 " src={Image} alt="logo" />
        <Link to="/">Explore</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/health">Health</Link>
        <Link to="/policies">Policies</Link>
        <Link to="/community">Community</Link>
      </div>
      <div className="go">
        <div className="join">
          <Link to="/register">Join</Link>
        </div>
        <div className="signup">
          <Link to="/login">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
