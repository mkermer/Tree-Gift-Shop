import FormLogin from './FormLogin';
import FormSignUp from './FormSignUp';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import useToken from '../../useToken'

function AccordionLog(){
      const { token, setToken } = useToken();

  const logout = () => {
    setToken([])
  }

    return(
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Login
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body> <FormLogin setToken={setToken}/> </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Sign up
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body> <FormSignUp/> </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
};

export default AccordionLog;