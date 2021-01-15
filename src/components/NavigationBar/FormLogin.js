import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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

function FormLogin({ setToken }){
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
      alert("Logged in succesfully")
    } else {
      alert("Invalid credentials.");
    }
  };
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => {
              setUserName(e.target.value);
            }}
            required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => {
              setPassword(e.target.value);
            }}
            required/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Aaand go!
            </Button>
        </Form>
    )
};

export default FormLogin;