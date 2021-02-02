import {React, useContext, useEffect} from 'react';
import {ProductContext} from '../../ProductContext'
import FarmerContact from './FarmerContact';
import FarmerFilter from './FarmerFilter'
import FarmerHowTo from './FarmerHowTo';
import { Container, Card, Col, Row } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Farmer.css';

function Farmer(){
    const {getTree, farmerFilter, addToSelectedTree, selectedTree} = useContext(ProductContext)

    useEffect(() => {
          getTree()
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const ListTrees = (props) => {
        if(farmerFilter) {
         return farmerFilter.map((obj, index) => {
        return (
          <>
            <Col md={4} xs={12} key={obj.tree_id} className="FarmerTreeCard" onClick={(e) => {
                addToSelectedTree(obj);
                alert(`You successfully selected a ${obj.tree_name} tree!`)
                }}>
              <Card className='TreeCard' id={index} style={selectedTree.tree_id == obj.tree_id ? {
                borderWidth: 2,
                borderColor: "green"
              } : {}}>
                <Card.Img
                  variant="top"
                  src={obj.tree_img}
                  id="pic"
                  alt="tree" 
                />

                <div className="Treeshadow"></div>
                <Card.Body>
                
                <Card.Title> <h2>{obj.tree_name}</h2></Card.Title>
                <Card.Text>
                  CO<sub>2</sub>: -{obj.co2}kg
                </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </>
        );
      });
        } else {
          return null
        }
      };

    

      const ShowSelect = () =>{
        if (farmerFilter && farmerFilter.length > 0){
          return(
              <h3 className="centered"> Select a Tree:</h3>
          );
        } else {
          return null
        }
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