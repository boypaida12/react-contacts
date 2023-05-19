/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";

export class ContactsForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            location: ""
        }
        this.handleChange = (e) => {
            e.preventDefault()
            this.setState({
              id: uuid(),
              [e.target.name]: e.target.value
            })
        }
        this.handleSubmit = (e) => {
            e.preventDefault()
            this.props.contactDetail(this.state)
            e.target.reset()
        }
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phone" placeholder="Enter your phone number" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="location" placeholder="Where you Live" onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactsForm;
