import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormSignUp from '../NavigationBar/FormSignUp'

function SignUp(){
    return(
        <>
            
                <h5>Sign up</h5><br/>
            
            <Row>
                <Col>
                <FormSignUp/>
                <br/>
                </Col>
            </Row>
            

        </>
        
    );
};

export default SignUp;