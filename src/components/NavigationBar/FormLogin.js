import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react';
import { LoginContext } from '../../LoginContext';

function FormLogin() {
  const {
    login, setUserName, setPassword, loginStatus,
  } = useContext(LoginContext);

  return (
    <Form onSubmit={login}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Aaand go!
      </Button>
      <h2>{loginStatus}</h2>
    </Form>
  );
}

export default FormLogin;
