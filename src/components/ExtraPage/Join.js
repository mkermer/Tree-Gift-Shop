import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../ProductContext";
import { Accordion, Card, Button, Container } from "react-bootstrap";
import "./Join.css";

function Join(props) {
  const { jobs, getJobs } = useContext(ProductContext);

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(jobs);

  const ListJobs = (props) => {
    if (jobs) {
      return jobs.map((obj) => {
        return (
          <div className="Join">
            <h1>Do you want to join us on our mission?</h1>
            <h2>We are currently looking for:</h2>
            <Container>
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <div className="flexb">
                        <p>{obj.category}</p>
                        <p>{obj.jobtitle}</p>
                        <p>{obj.location}</p>
                      </div>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className="flexb">
                        <p className="border">
                          <strong>{obj.location}</strong>
                        </p>
                        <p className="border">
                          <strong>{obj.jobtype}</strong>
                        </p>
                        <p className="border">
                          <strong>{obj.salary}$</strong>
                        </p>
                      </div>

                      <div className="JobDesc">
                        {obj.intro}
                        <h3>What you'll do in your role</h3>
                        {obj.task}
                        <h3>The experience you'll bring</h3>
                        {obj.qualification}
                      </div>
                      <Button className="Email">
                        {" "}
                        <a href="mailto:office@co2-treeduce.com?subject=Application">
                          {" "}
                          Apply Now{" "}
                        </a>{" "}
                      </Button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Container>
          </div>
        );
      });
    } else {
      return <></>;
    }
  };

  return (
    <div>
      <ListJobs />
    </div>
  );
}
export default Join;
