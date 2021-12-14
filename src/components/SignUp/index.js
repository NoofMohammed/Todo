import React from "react";
const signUp = () => {
  return (
    <div>
      <form>
        <div className="mb-3" controlId="formBasicName">
          <label>Name</label>
          <input type="text" placeholder="Enter name" />
        </div>
        <div className="mb-3" controlId="formBasicAge">
          <label>Age</label>
          <input type="number" placeholder="Enter age" />
        </div>
        <div className="mb-3" controlId="formBasicEmail">
          <label>Email address</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="mb-3" controlId="formBasicPassword">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <div className="mb-3" controlId="formBasicPassword">
          <label>Password confirmation</label>
          <input type="password" placeholder="Enter password" />
        </div>
      </form>
    </div>
  );
};
export default signUp;
