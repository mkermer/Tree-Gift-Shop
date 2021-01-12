import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Collapse from 'react-bootstrap/Collapse';
import { Search } from 'react-bootstrap-icons';
import { Basket3 } from 'react-bootstrap-icons';
import { PersonCircle } from 'react-bootstrap-icons';

import './Navigation.css'


class Navigation extends Component{
    render(){
        return(
            <Navbar fixed="top" bg="light" expand="lg">
                <Navbar.Brand href="localhost:8080/Home">Treeduce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        variant="tabs" 
                        defaultActiveKey="/home"
                        className="mr-auto">
                    <Nav.Link href="localhost:8080/Home">Home</Nav.Link>
                    <Nav.Link href="localhost:8080/About">About</Nav.Link>
                    <Nav.Link href="localhost:8080/Contact">Contact</Nav.Link>
                    <NavDropdown title="Buy a tree giftcard!" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Less than 20€</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">20€ - 30€</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">More than 30€</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="localhost:8080">Show all</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Button 
                        variant="light"
                        className="icons">
                        {/*  onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}> */}
                        <Search size={25}/>
                    </Button>
                    {/* <Collapse in={open}> */}
                        {/* <div>
                            <Form inline>
                            <FormControl type="text" placeholder="Find a tree!" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            </Form>
                        </div> */}
                    {/* </Collapse> */}
                    <Button variant="light" className="icons">
                        <PersonCircle size={25}/>
                    </Button>
                    <Button variant="light" className="icons">
                        <Basket3 size={25}/>
                    </Button>
                </Navbar.Collapse>
            </Navbar>
        )
    }
};

export default Navigation;