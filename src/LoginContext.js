import React, { useState, createContext } from "react";
import Axios from "axios";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [loginStatus, setLoginStatus] = useState("");

  //============Login==============//
  const login = (e) => {
    e.preventDefault();
    Axios.post("https://treeduce-server.herokuapp.com/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(`Hello ${response.data[0].firstname}`);
        setFirstname(response.data[0].firstname);
        setEmail(response.data[0].username);
        setLastname(response.data[0].lastname);
        setToken(
          Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
        );
        window.location.reload();
      }
    });
  };
  //============Setters==============//
  function setToken(userToken) {
    sessionStorage.setItem("token", JSON.stringify(userToken));
  }
  function setFirstname(userFirstname) {
    sessionStorage.setItem("name", userFirstname);
  }
  function setLastname(userLastname) {
    sessionStorage.setItem("lastname", userLastname);
  }
  function setEmail(userEmail) {
    sessionStorage.setItem("email", userEmail);
  }
  //============Getters==============//
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getName = () => {
    const nameString = sessionStorage.getItem("name");
    return nameString;
  };
  const getLastName = () => {
    const lastname = sessionStorage.getItem("lastname");
    return lastname;
  };
  const getEmail = () => {
    const email = sessionStorage.getItem("email");
    if (email === "undefined") {
      return;
    } else {
      return email;
    }
  };
  //============Logout==============//
  const logout = () => {
    setFirstname();
    setLastname();
    setToken("");
    setEmail();
    window.location.reload();
  };

  return (
    <LoginContext.Provider
      value={{
        setToken,
        getEmail,
        getToken,
        login,
        username,
        setUserName,
        password,
        setPassword,
        loginStatus,
        setLoginStatus,
        getName,
        getLastName,
        logout,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
export default LoginContext;
