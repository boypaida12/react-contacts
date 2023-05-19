/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import EditContactsForm from "./EditContactForm";

export const Contacts = (props) => {
  const [lgShow, setLgShow] = useState(false);
  const [editPrefilledContact, setEditPrefilledContact] = useState(null);

  const handleClose = ()=>{
    setLgShow(false);
    setEditPrefilledContact(null)
  }

  const handleShow = (contact) => {
    setEditPrefilledContact(contact);
    setLgShow(true);
  }

  const handleDelete = (contactId) => {
    props.deleteContact(contactId);
  };

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
            <Modal.Title>
              Edit Contact Details
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactsForm prefilledContact={editPrefilledContact} editContact={props.editContacts} closeModal={handleClose}/>
        </Modal.Body>
      </Modal>
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
                  <Button
                    variant="primary"
                    className="me-4"
                    onClick={() => handleShow(contact)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
