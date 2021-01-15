import React, { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:9000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "admin@admin.com" && password === "admin") {
      const token = await loginUser({
        username,
        password,
      });
      setToken(token);
    } else {
      alert("Access denied. You don't have permissions to access this page.");
    }
  };

  return (
    <div className="login-container">
      <h1>Log in as admin to add more trees.</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};