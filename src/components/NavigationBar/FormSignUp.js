import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Forms.css";
import Axios from "axios";

function FormSignUp() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = (e) => {
    e.preventDefault();
    Axios.post("https://treeduce-server.herokuapp.com/register", {
      username: usernameReg,
      password: passwordReg,
      firstname: firstName,
      lastname: lastName,
    }).then((response) => {
      console.log(response);
    });
    window.confirm(`You can now log in to your account.`);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <Form onSubmit={register}>
      <Form.Group className="FName">
        <Form.Control
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required
        />
      </Form.Group>

      <Form.Group className="LName">
        <Form.Control
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={
            <label>
              I've read and accept the <Link to="/tos">Terms of Service</Link>
            </label>
          }
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormSignUp;
