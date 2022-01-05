import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./sign.css";
const SignUp = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [inValid, setInValid] = useState("");

  const validateEmail = (email) => {
    console.log("llllllllllllll");
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
      return email;
    } else {
      setInValid("is-invalid");
    }
  };

  const register = () => {
    console.log("llllllllllllllllllllllllllllllllllllllllllllll");
    if (name && age && email && password && passwordConfirmation) {
      localStorage.setItem("name", name);
      localStorage.setItem("age", age);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("passwordConfirmation", passwordConfirmation);
    } else {
      setInValid("Fill add fields");
    }
  };
  return (
    <div>
      <form>
        <div className="mb-3" controlid="formBasicName">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3" controlid="formBasicAge">
          <label>Age</label>
          <input
            type="number"
            placeholder="Enter age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="mb-3" controlid="formBasicEmail">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            onChange={validateEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3" controlid="formBasicPassword">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-3" controlid="formBasicPassword">
          <label>Password confirmation</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => {
              setPasswordConfirmation(e.target.value);
            }}
          />
        </div>
        <Button variant="primary" onClick={register}>
          Sign Up
        </Button>
      </form>
      {!name || !age || !email || !password || !passwordConfirmation ? (
        <div className="fill">{inValid}</div>
      ) : null}
    </div>
  );
};
export default SignUp;
