import { React, useContext, useEffect } from 'react';
import { ProductContext } from '../../ProductContext';
import FarmerContact from './FarmerContact';
import FarmerFilter from './FarmerFilter';
import FarmerHowTo from './FarmerHowTo';
import { Container, Card, Col } from 'react-bootstrap';

function Farmer() {
  const {
    tree, getTree, farmerFilter, setFarmerFilter,
  } = useContext(ProductContext);

  useEffect(() => {
    getTree();
  }, []);


  const ListTrees = (props) => {
    if (farmerFilter) {
      return farmerFilter.map((obj) => (
        <>
          <Col md={4} xs={12} key={obj.id}>
            <Card className="TreeCard">
              <Card.Img
                variant="top"
                src={obj.tree_img}
                id="pic"
                alt="tree"
              />
              <div className="shadow" />
              <Card.Body>
                <Card.Title>
                  {' '}
                  {obj.tree_name}
                </Card.Title>
                <Card.Text>
                  <h3>
                    CO
                    <sub>2</sub>
                    : -
                    {obj.co2}
                    kg
                  </h3>
                  <h2>{obj.country}</h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </>
      ));
    }
    return <></>;
  };


  return (
    <div className="Farmer">

      <Container>
        <h1> Do you want to become a Farmer? </h1>
        <FarmerHowTo />
        <p> Please select a country to see what kind of trees you could plant in your area to help us:</p>
        <FarmerFilter />
        <p> Select a Tree:</p>
        <ListTrees />
        <FarmerContact />
      </Container>


    </div>

  );
}

export default Farmer;
