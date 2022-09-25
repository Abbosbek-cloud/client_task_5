import React from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/MessagesForm.css";

const MessageForm = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div className="messages-output">
        {!user && <div className="alert alert-danger">Please Login</div>}
      </div>
      <Row>
        <Col md={11}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Type your messages here..."
              disabled={!user}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={1}>
          <Button type="submit" disabled={!user} variant="primary">
            <i className="fa fa-paper-plane"></i>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default MessageForm;
