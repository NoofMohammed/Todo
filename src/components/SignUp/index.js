import React, { useState } from "react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const register = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("passwordConfirmation", passwordConfirmation);
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
        <button variant="primary" type="submit" onClick={register}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignUp;
