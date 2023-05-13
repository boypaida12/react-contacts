import { useState } from "react";
import { Contacts } from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [contacts, setContacts] = useState([
    {
      name: "Kabutey",
      phone: 234485944,
      location: "Tudu",
    },
    {
      name: "Akwesi",
      phone: 234485945,
      location: "Mim",
    },
    {
      name: "Aku Shika",
      phone: 234485946,
      location: "Agege",
    }
  ]);

  const handleAddContacts = (contactDetails) => {
    setContacts([...contacts, contactDetails])

  };

  return (
    <>
      <Container>
        <Row className="gap-2 mt-4">
          <Col md={3}>
            <ContactsForm contactDetail={handleAddContacts} />
          </Col>
          <Col>
            <Contacts contactsjsx={contacts} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
