import React, { Component, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Collapse from "react-bootstrap/Collapse";
import { Search } from "react-bootstrap-icons";
import { Basket3 } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import Searchbar from "./Searchbar";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import "./Navigation.css";

function Navigation(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Router>
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">
            Treeduce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              variant="tabs"
              defaultActiveKey="/"
              className="mr-auto"
              activeClassName="active"
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
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
                <NavDropdown.Item href="localhost:8080">
                  Show all
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Collapse in={open}>
              <div id="search">
                <Form inline>
                  <FormControl
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
            <Button variant="light" className="icons">
              <PersonCircle size={25} />
            </Button>
            <Link to="/checkout">
              <Button variant="light" className="icons">
                <Basket3 size={25} />
              </Button>
            </Link>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Navigation;
