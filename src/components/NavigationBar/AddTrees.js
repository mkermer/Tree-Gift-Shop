import React from "react";
import Form from "react-bootstrap/Form";
import {
  Jumbotron, Container, Row, Col,
} from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { LoginContext } from "../../LoginContext";
import { ProductContext } from "../../ProductContext";
import "./AddTrees.css";
import { HashLink } from 'react-router-hash-link';
// import { ReactComponent as BgImg } from '../../trees-illustrtion/tree-illu-19.svg';
export default function AddTrees() {
  const { getEmail } = useContext(LoginContext);
  const {
    addTree,
    setTreeName,
    setTreeDesc,
    setTreeImg,
    setPrice,
    setCountry,
    setCo2,
  } = useContext(ProductContext);

  
  const email = getEmail();

  //============No priviliges==============//

  if (email !== "admin@admin.com") {
    return (
      <div className="stop-container">
        <h2>Hey you! Stay where you are!</h2>
        <p>You need admin priviliges to access this page.</p>
      </div>
    );
  }

  //============Add a tree==============//

  return (
       
      <div justify-content-md-center>
      <h2 id="AddTreeHeader">Add a Tree </h2>
        <div className ="form-group" >
        < Container lg={6} md={4}>
              
      <Form onSubmit={addTree} id="addTreeForm">
        <Form.Group>
          <Form.Control 
            type="text"
            placeholder="Tree name"
            onChange={(e) => {
              setTreeName(e.target.value);
            }}
            required
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Tree Description"
            onChange={(e) => {
              setTreeDesc(e.target.value);
            }}
            required
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Image"
            onChange={(e) => {
              setTreeImg(e.target.value);
            }}
            required
          />
          <br />
          <Form.Control
            required
            type="number"
            placeholder="Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            required
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            required
          />
          <br />
          <Form.Control
            type="number"
            placeholder="CO2*"
            onChange={(e) => {
              setCo2(e.target.value);
            }}
            required
          />
          
        </Form.Group>
        <Button type="submit" class="tree-button"  >
          {" "}
          Add{" "}

        </Button>
        
        </Form>
         
         </Container>
      {}
      
    </div>
    
    </div>
    
    
  );
}