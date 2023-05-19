import { useState } from "react";
import { Contacts } from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: uuid(),
      name: "Kabutey",
      phone: 234485944,
      location: "Tudu",
    },
    {
      id: uuid(),
      name: "Akwesi",
      phone: 234485945,
      location: "Mim",
    },
    {
      id: uuid(),
      name: "Aku Shika",
      phone: 234485946,
      location: "Agege",
    }
  ]);

  const handleAddContacts = (contactDetails) => {
    setContacts([...contacts, contactDetails])

  };

  const handleDeleteContacts = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const handleEditContact = (id, updatedUser) => {
    setContacts(contacts.map((user) => user.id === id ? updatedUser : user))
  }

  return (
    <>
      <Container>
        <Row className="gap-2 mt-4">
          <Col md={3}>
            <ContactsForm contactDetail={handleAddContacts} />
          </Col>
          <Col>
            <Contacts contactsjsx={contacts} deleteContact={handleDeleteContacts} editContacts={handleEditContact}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
