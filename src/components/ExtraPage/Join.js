import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../ProductContext";
import {Accordion, Card, Button, Container, Jumbotron, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Join.css';

function Join(props) {
  const { jobs, getJobs } = useContext(ProductContext);

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ListJobs = (props) => {
    if (jobs) {
      return jobs.map((obj) => {
        return (
            <Accordion>
            <Card>
                <Card.Header style={{backgroundImage: 'url(' + obj.image + ')'}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <div className="block">
                        <Row>
                            <Col xs={12} md={12} lg={7}>
                                <h3 className="title">
                                    {obj.jobtitle}
                                </h3>   
                            </Col>
                            <Col xs={12} md={6} lg={2}>
                                <h3 className="categ">
                                    {obj.category}
                                </h3>
                            </Col>
                            <Col xs={12} md={6} lg={3}>
                                <h3 className="loc">
                                    {obj.location}
                                </h3>
                            </Col>
                        </Row>
                </div>
                
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    
                    <div className="JobDesc"> 
                    {obj.intro}
                    <h3>What you'll do in your role</h3>
                    {obj.task}
                    <h3>The experience you'll bring</h3>
                    {obj.qualification}
                    </div>
                    
                    <div className="flexb">
                        <p className="border">
                        <strong>{obj.location}</strong>
                        </p>
                        <p className="border">
                        <strong>{obj.jobtype}</strong>
                        </p>
                        <p className="border">
                        <strong>{obj.salary} $ per month</strong>
                        </p>
                    </div>
                    <Button className="Email" href="mailto:office@co2-treeduce.com?subject=Application" > Apply Now </Button>
                    
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>            
        );
      });
        } else {
          return <></>
        }
      }

      return(
        <div className="Join">
        <Jumbotron fluid>
        <h1>Do you want to join us on our mission?</h1>
        </Jumbotron>
        <h2 className="space">We are currently looking for:</h2>
            <Container>
                
                    <ListJobs />
                    <div className="linktext centered">
                    <h2>Haven't seen anything that appeals to you?</h2>
                    <h2>You can still work with us!</h2> 
                    <h3> Send us your <a href="mailto:office@co2-treeduce.com?subject=Unsolicited Application">unsolicited application</a> </h3> 
                    <h3>or help us make our earth greener by <Link to="/farmer">planting a tree!</Link></h3>
                    
                    </div>
            </Container>
        </div>
      )


  return (
    <div>
      <ListJobs />
    </div>
  );
}
export default Join;
