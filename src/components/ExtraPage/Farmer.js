import {React, useContext, useEffect, useState} from 'react';
import {ProductContext} from '../../ProductContext'
import FarmerContact from './FarmerContact';
import FarmerFilter from './FarmerFilter'
import FarmerHowTo from './FarmerHowTo';
import { Container, Card, Col, Row } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Farmer.css';

function Farmer(){
    const {tree, getTree, farmerFilter, setFarmerFilter, addToSelectedTree} = useContext(ProductContext)

    useEffect(() => {
          getTree()
    }, [])


  let cards = document.getElementsByClassName('FarmerTreeCard');

  console.log(cards)

  // if(cards) {
  //   cards.addEventListener('click', function (){
  //   cards.forEach(card => card.classList.remove('active'));
  //   this.classList.add('active');
  // })
  // }


    const ListTrees = (props) => {
        if(farmerFilter) {
         return farmerFilter.map((obj) => {
        return (
          <>
            <Col md={4} xs={12} key={obj.id} className="FarmerTreeCard" onClick={(e) => {
                console.log(e.target.className)
                addToSelectedTree(obj)
                }}>
              <Card className="TreeCard">

                <Card.Img
                  variant="top"
                  src={obj.tree_img}
                  id="pic"
                  alt="tree" 
                />
                <div className="shadow"></div>
                <Card.Body>
                  <Card.Title> {obj.tree_name}</Card.Title>
                  <Card.Text>
                    <h3>
                      CO<sub>2</sub>: -{obj.co2}kg
                    </h3>
                    <h2>{obj.country}</h2>
                  </Card.Text>
                </Card.Body>
              </Card>
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
            <Row>
              <ListTrees />
            </Row>
          </Container>
          <h3 className="center"> Fill out this form </h3>
          <FarmerContact /> 
           


        </div>

    );
}

export default Farmer;