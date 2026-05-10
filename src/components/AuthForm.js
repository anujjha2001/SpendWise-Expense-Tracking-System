import React, { useState } from "react";
import "./AuthForm.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">

      <div className="card">

        <h1 className="title">
          {isLogin ? "Welcome Back " : "Create Account "}
        </h1>

        <p className="subtitle">
          {isLogin ? "Login to continue" : "Register to get started"}
        </p>

        {!isLogin && (
          <div className="inputBox">
            <FaUser />
            <input placeholder="Full Name" />
          </div>
        )}

        <div className="inputBox">
          <FaEnvelope />
          <input placeholder="Email" />
        </div>

        <div className="inputBox">
          <FaLock />
          <input type="password" placeholder="Password" />
        </div>

        {!isLogin && (
          <div className="inputBox">
            <FaLock />
            <input type="password" placeholder="Confirm Password" />
          </div>
        )}

        <button className="btn">
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="switch" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "New here? Create account"
            : "Already have account? Login"}
        </p>

      </div>

    </div>
  );
}

export default AuthForm;