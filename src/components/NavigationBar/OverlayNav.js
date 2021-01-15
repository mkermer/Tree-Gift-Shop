import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import { PersonCircle } from "react-bootstrap-icons";
import AccordionLog from './AccordionLog';

function OverlayNav() {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Login or Sign up</Popover.Title>
          <Popover.Content>
            <AccordionLog/>
          </Popover.Content>
        </Popover>
      );
      
      const Show = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Button variant="light" className="icons">
              <PersonCircle size={25} />
            </Button>
        </OverlayTrigger>
      );
    return(
        <div>
            <Show />
        </div>
    );
};

export default OverlayNav;

