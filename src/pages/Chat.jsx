import React from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const Chat = () => {
  return (
    <Row>
      <Col md={4}>
        <Sidebar />
      </Col>
      <Col md={8}></Col>
    </Row>
  );
};

export default Chat;
