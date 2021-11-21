import React, { useState } from "react";

function SignedIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Email: " + email);
          console.log("Password: " + password);
        }}
        className="white"
      >
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignedIn;
