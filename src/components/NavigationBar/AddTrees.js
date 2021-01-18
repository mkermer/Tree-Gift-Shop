import React from "react";
import FormLogin from "../NavigationBar/FormLogin";
import {useContext} from 'react'
import { LoginProvider, LoginContext } from "../../LoginContext";

export default function LoginSection() {
    const { getToken, logout } = useContext(LoginContext);
    const token = getToken()
  if (!token) {
    return (
      <div style={{ marginTop: "5%" }}>
        <p>You need admin priviliges to access this page.</p>
        <LoginProvider>
        <FormLogin />
        </LoginProvider>
        
      </div>
    );
  }


  return (
    <div style={{ marginTop: "5%" }}>
      <span>Add trees functionality coming soon</span>
      <br></br>
      <br></br>
      <button onClick={logout} className="btn btn-primary">Logout</button>
    </div>
  );
}
