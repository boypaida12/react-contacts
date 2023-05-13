/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export const Contacts = (props) => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center">Contact Information</h1>
          {props.contactsjsx.map((contact, index) => (
            <Col key={index}>
              <Card style={{ width: "18rem" }} className="mt-4">
                <Card.Body>
                  <Card.Text>
                    <div>
                      <p>Name : {contact.name}</p>
                      <p>Phone Number : {contact.phone}</p>
                      <p>Location : {contact.location}</p>
                    </div>
                    <hr />
                  </Card.Text>
                  <Button variant="primary" className="me-4">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
