import React from 'react';
import {Accordion, Card, Button, Container} from 'react-bootstrap';
import './Join.css';

function Join(){
    return(
        <div className="Join">
            <h1>Do you want to join us on our mission?</h1>
            <Container>
            <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Store Manager
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <div className="JobDesc">  
                        If you're passionate about leading a team that serves your community, a Store Manager position with CO<sub>2</sub> Treeduce may be right for you! As a Store Manager, 
                        you will play a vital role in creating an atmosphere that ensures CO<sub>2</sub> Treeduce is Here for Good! This position oversees all aspects of a CO<sub>2</sub> Treeduce store, including team management, guest service, merchandising and food preparation.
                        <br/><br/>
                        What's in it for you?
                        <br/><br/>
                        401(k) offered after 90-days of employment with company match at one year
                        Health, Dental and Vision insurance along with Vacation and Sick time
                        Competitive wage and flexible work schedule
                        Discount on prepared food made from our kitchen while working
                        Charted career path to continue to grow in your management career
                        What you'll do as a Store Manager:
                        <br/><br/>
                        Execute CO<sub>2</sub> Treeduce strategic initiatives, drive sales, and maintain standards within your store.
                        Ensure your store is stocked and clean so we can continue to build strong relationships with our guests and communities.
                        Hire and train new team members in the CO<sub>2</sub> Treeduce Way! You'll get the privilege of becoming a mentor to your team and helping them grow.
                        What we're looking for:
                        <br/><br/>
                        Previous management experience in a retail, restaurant, or convenience store environment.
                        Passion to train, coach and engage team members.
                        Capability of prioritizing tasks and driving performance to accomplish goals.
                        <br/><br/>
                        
                        </div>
                        <Button> <a href="mailto:office@co2-treeduce.com?subject=Application" > Apply Now </a> </Button>
                        
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Senior Application Developer
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <div className="JobDesc">
                        We are currently seeking a web developer to help us maintain our current and upcoming portfolio of websites as well as new website development projects.
                        <br/><br/>
                        Job tasks
                        <br/><br/>
                        collaborate with project manager to produce high-quality websites and web applications
                        offer insights and experience to our clients when appropriate
                        write PHP functionality to extend the WordPress framework
                        build custom, responsive WordPress themes from approved designs
                        debug WordPress issues, along with mobile responsive issues in multiple operating systems, devices and browsers
                        recognize and recommend operational process improvements
                        identify issues that impact site users and recommends solutions
                        skills/requirements:
                        <br/><br/>
                        B.A. or B.S. degree in related field
                        5-7 years experience and a strong working knowledge of CSS and HTML
                        experience with CMS systems such as Word Press, Joomla and Drupal
                        able to convert graphic design into CSS based HTML.
                        VBScript, PHP, JavaScript, and HTML programming, mobile websites, and responsive design
                        advanced adobe photoshop skills
                        creative problem solving skills
                        must have a strong worth ethic and be able to work independently
                        you must live in or close to the columbus metro area
                        <br/><br/>
                        compensation: based on experience
                        <br/><br/>
                        
                        </div>
                        <Button> <a href="mailto:office@co2-treeduce.com?subject=Application" > Apply Now </a> </Button>
                        
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Container>

        </div>
        

    );
};

export default Join;