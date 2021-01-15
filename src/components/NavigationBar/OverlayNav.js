import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import { PersonCircle } from "react-bootstrap-icons";
import AccordionLog from './AccordionLog';
import useToken from '../../useToken'
import {useEffect} from 'react'
import FormLogin from '../NavigationBar/FormLogin'
import {Link} from 'react-router-dom'

function OverlayNav() {
  const { token, setToken } = useToken();

  const logout = () => {
    setToken([])
  }
  
    const notLoggedPopover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Login or Sign up</Popover.Title>
          <Popover.Content>
            <AccordionLog/>
          </Popover.Content>
        </Popover>
      );

      const loggedInPopover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Already logged in</Popover.Title>
          <Popover.Content>
            <button onClick={logout}>Logout</button>
          </Popover.Content>
        </Popover>
      );
      
      const NotLogged = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={notLoggedPopover}>
          <Button variant="light" className="icons">
              <PersonCircle size={25} />
            </Button>
        </OverlayTrigger>
      );

      const Logged = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={loggedInPopover}>
          <Button variant="light" className="icons">
              <PersonCircle size={25} />
            </Button>
        </OverlayTrigger>
      );


      const Check = () => {
        if(!token) {
          return <NotLogged />
        } else {
          return <Logged />
        }
      }


    return(
        <div>
            <Check />
        </div>
    );
};

export default OverlayNav;

