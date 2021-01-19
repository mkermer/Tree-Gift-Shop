import React from "react";
import FormLogin from "../NavigationBar/FormLogin";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useContext, useState, useEffect} from 'react'
import { LoginProvider, LoginContext } from "../../LoginContext";
import { ProductContext } from "../../ProductContext";
import Axios from 'axios'
import './AddTrees.css'

export default function AddTrees() {
    const { getEmail, logout } = useContext(LoginContext);
    const {getTree, addTree, setTreeName, setTreeDesc, setTreeImg, setPrice, setCountry, setCo2} = useContext(ProductContext)


    const email = getEmail()
  if (email !== 'admin@admin.com') {
    return (
      <div className="stop-container">
      <h2>Hey you! Stay where you are!</h2>
        <p>You need admin priviliges to access this page.</p>
      </div>
    );
  }

  
  return (
    <div style={{ marginTop: "10%" }}>
    <Form onSubmit={addTree}>
      <Form.Group>
    <Form.Control type="text" placeholder="Tree name" onChange={(e) =>{
      setTreeName(e.target.value)
    }}/>
  <br />
    <Form.Control type="text" placeholder="Tree description" onChange={(e) =>{
      setTreeDesc(e.target.value)
    }}/>
  <br />
    <Form.Control type="text" placeholder="Tree image" onChange={(e) =>{
      setTreeImg(e.target.value)
    }}/>
  <br />
    <Form.Control type="text" placeholder="Price" onChange={(e) =>{
      setPrice(e.target.value)
    }}/>
  <br />
    <Form.Control type="text" placeholder="Country" onChange={(e) =>{
      setCountry(e.target.value)
    }}/>
    <br />
    <Form.Control type="text" placeholder="Co2" onChange={(e) =>{
      setCo2(e.target.value)
    }}/>
</Form.Group>
<Button variant='primary' type='submit'> Submit </Button>
    </Form>
    </div>
  );
}
