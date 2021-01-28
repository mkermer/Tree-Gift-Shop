import React,{ useContext, useEffect } from 'react';
import { ProductContext } from "../../ProductContext";
import {Accordion, Card, Button, Container, Jumbotron} from 'react-bootstrap';
import './Join.css';

function Join(props){
    const {jobs, getJobs} = useContext(ProductContext)

useEffect(() => {
    getJobs()
}, [])



    const ListJobs = (props) => {
        if(jobs) {
            return jobs.map((obj) => {

        return (
            <Accordion>
            <Card>
            {/* https://svgshare.com/i/TZb.svg */}
                <Card.Header style={{backgroundImage: 'url(' + obj.image + ')'}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <div className="block">
                    
                        <h3 className="title">
                        {obj.jobtitle}
                        </h3>
                        <h3 className="categ">
                        {obj.category}
                        </h3>
                        <h3 className="loc">
                        {obj.location}
                        </h3>
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
                    <Button className="Email"> <a href="mailto:office@co2-treeduce.com?subject=Application" > Apply Now </a> </Button>
                    
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
        <h2>We are currently looking for:</h2>
            <Container>
                
                    <ListJobs />
                
            </Container>
        </div>
      )

}
export default Join;