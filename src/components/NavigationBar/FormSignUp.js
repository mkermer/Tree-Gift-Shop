import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Forms.css'


function FormSignUp(){
    return(
        <Form>
            <Form.Group className="FName">
                <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group className="LName">
                  <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label={<label>I've read and accept the <a href="#tos">Terms of Service</a></label>}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Form>
    )
};

export default FormSignUp;