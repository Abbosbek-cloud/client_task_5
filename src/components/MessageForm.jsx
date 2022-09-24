import React from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import "../styles/MessagesForm.css";

const MessageForm = () => {
  return (
    <div>
      <div className="messages-output"></div>
      <Row>
        <Col md={11}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Type your messages here..."
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={1}>
          <Button type="submit" variant="primary">
            <i className="fa fa-paper-plane"></i>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default MessageForm;
