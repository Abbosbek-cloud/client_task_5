import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>
            Welcome to our Chat App! Find friends and share your thoughts!
          </h1>
          <p>This app lets you connect with your friends!</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              Get Started <i className="fa fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
