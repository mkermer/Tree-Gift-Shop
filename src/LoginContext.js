import React, { useState, createContext } from "react";
import Axios from "axios";
import ls from 'local-storage'

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
    // sessionStorage.setItem("token", JSON.stringify(userToken));
    ls.set("token", JSON.stringify(userToken));
  }
  function setFirstname(userFirstname) {
    // sessionStorage.setItem("name", userFirstname);
        ls.set("name", JSON.stringify(userFirstname));

  }
  function setLastname(userLastname) {
    // sessionStorage.setItem("lastname", userLastname);
        ls.set("lastname", JSON.stringify(userLastname));

  }
  function setEmail(userEmail) {
    // sessionStorage.setItem("email", userEmail);
        ls.set("email", JSON.stringify(userEmail));

  }

  //============Getters==============//

  const getToken = () => {
    // const tokenString = sessionStorage.getItem("token");
    const tokenString = ls.get("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getName = () => {
    // const nameString = sessionStorage.getItem("name");
    const nameString = ls.get("name");
    const name = JSON.parse(nameString)
    return name;
  };
  const getLastName = () => {
    // const lastname = sessionStorage.getItem("lastname");
    const lastname = ls.get("lastname");
    const lastnameString = JSON.parse(lastname)
    return lastnameString;
  };
  const getEmail = () => {
    // const email = sessionStorage.getItem("email");
    const email = ls.get("email");
    const emailString = JSON.parse(email)
    if (emailString === "undefined") {
      return;
    } else {
      return emailString;
    }
  };

  //============Logout==============//

  const logout = () => {
    setFirstname('');
    setLastname('');
    setToken('');
    setEmail('');
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
};
