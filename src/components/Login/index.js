import React, { useState } from "react";
import "./login.css";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  let email = localStorage.getItem("email");

  let password = localStorage.getItem("password");
  const checkUser = () => {
    localStorage.setItem("loginEmail", loginEmail);
    localStorage.setItem("loginPassword", loginPassword);
    let loginedEmail = localStorage.getItem("loginEmail");
    let loginedPassword = localStorage.getItem("loginPassword");

    if (email !== loginedEmail && password !== loginedPassword) {
      setLoginError("form-control is-invalid");
    } else if (email == loginedEmail && password !== loginedPassword) {
      setLoginError("Password is-invalid");
    } else if (email !== loginedEmail && password == loginedPassword) {
      setLoginError("Email is-invalid");
    } else {
      setLoginError("You are logged in successfully");
    }
  };
  return (
    <>
      <div>
        <form>
          <div className="mb-3" controlid="formBasicName">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3" controlid="formBasicName">
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
          </div>
          <button variant="primary" type="submit" onClick={checkUser}>
            Submit
          </button>
          <div>{loginError}</div>
        </form>
      </div>
    </>
  );
};

export default Login;
