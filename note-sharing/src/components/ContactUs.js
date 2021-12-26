import React from 'react'
import {Form, Col, Row, Button} from "react-bootstrap";

function ContactUs() {
  return (
    <Form className="container1 my-3">
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <div>
            <textarea
              name="text"
              placeholder="Enquiry Message"
              cols="100"
              rows="6"
            ></textarea>
          </div>
          <Button variant="success">Success</Button>{' '}
          <Button variant="danger">Danger</Button> 
  
</Form>
  )
}

export default ContactUs
