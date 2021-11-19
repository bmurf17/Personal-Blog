import React, { useState } from "react";

function SignedUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Email: " + email);
          console.log("Password: " + password);
          console.log("FirstName: " + firstName);
          console.log("Last Name: " + lastName);
        }}
        className="white"
      >
        <h5 className="grey-text text-darken-3">Sign Up</h5>
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
              console.log(password);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
              console.log(firstName);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
              console.log(lastName);
            }}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignedUp;
