import {React, useContext, useEffect} from 'react';
import {ProductContext} from '../../ProductContext'
import FarmerContact from './FarmerContact';
import FarmerFilter from './FarmerFilter'
import FarmerHowTo from './FarmerHowTo';
import { Container, Card, Col, Row, Nav } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Farmer.css';

function Farmer(){
    const {getTree, farmerFilter, addToSelectedTree} = useContext(ProductContext);

    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    useEffect(() => {
          getTree()
    }, [])

    const ListTrees = (props) => {
        if(farmerFilter) {
         return farmerFilter.map((obj) => {
        return (
          <>
            <Col md={4} xs={12} key={obj.tree_id} className="FarmerTreeCard" onClick={(e) => {
                addToSelectedTree(obj)
                }}>
              <Nav variant="pills" defaultActiveKey="/home" onSelect={handleSelect} className="TreeCard">

                <Nav.Item>
                  <Nav.Link eventKey="link-1"> 
                  
                      <img variant="top"
                        src={obj.tree_img}
                        id="pic"
                        alt="tree" />
                      <div className="Treeshadow"></div>

                      <h2>{obj.tree_name}</h2>

                      <p>CO<sub>2</sub>: -{obj.co2}kg </p> 


                 
                    

                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </>
        );
      });
        } else {
          return <></>
        }
      };

    

      const ShowSelect = () =>{
        if (farmerFilter && farmerFilter.length > 0){
          return(
              <h3 className="centered"> Select a Tree:</h3>
          );
        } else {
          return <></>
        };
      };

  
    return(
        <div className="Farmer">
        <Jumbotron fluid className="center">
          <h1> Do you want to become a Farmer? </h1>
        </Jumbotron>
        
        <Container>
            <FarmerHowTo />
        </Container>
        <Jumbotron fluid className="center">
          <h3> Please select a country to see what kind of trees you could plant in your area to help us:</h3>
          <FarmerFilter />
        </Jumbotron>
            
          <Container>
            <Row>
              <ShowSelect/>
            </Row>
            <Row className="centeredContent">
              <ListTrees />
            </Row>
          </Container>
          <h3 className="center"> Fill out this form </h3>
          <FarmerContact /> 


        </div>

    );
}

export default Farmer;