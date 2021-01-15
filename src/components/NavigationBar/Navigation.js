import React, { useState, useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Collapse from "react-bootstrap/Collapse";
import { Search, Basket3} from "react-bootstrap-icons";
import {NavLink,Link} from "react-router-dom";
import { CartContext } from "../../CartContext";
import { ProductContext } from "../../ProductContext";
import OverlayNav from './OverlayNav'
import "./Navigation.css";

function Navigation(props) {
  const {handleChange} = useContext(ProductContext)
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);
  return (

    <div>
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand as={NavLink} to="/">
            Treeduce
          </Navbar.Brand>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              variant="tabs"
              className="mr-auto"
            >
              <Nav.Link 
              as={NavLink} to="/" exact={true}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
              <NavDropdown title="Buy a tree giftcard!" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Less than 20€
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  20€ - 30€
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  More than 30€
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">
                Show all
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/add">
                Add trees
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Collapse in={open}>
              <div id="search">
                <Form inline>
                  <FormControl
                    onChange={handleChange}
                    type="text"
                    placeholder="Find a tree!"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </div>
            </Collapse>
            <Button
              variant="light"
              className="icons"
              onClick={() => setOpen(!open)}
              aria-controls="search"
              aria-expanded={open}
            >
              <Search size={25} />
            </Button>
            <OverlayNav />
            <Link to="/checkout">
              <Button variant="light" className="icons">
                <Basket3 size={25} />
                <span id="cart-length">{cart.length}</span>
              </Button>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    </div>
  );
}

export default Navigation;
