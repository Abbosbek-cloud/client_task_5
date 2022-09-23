import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../styles/Home.css";

const Home = () => {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex h-100 flex-direction-column align-items-center justify-content-center left-side"
      >
        <div
          style={{
            height: "90vh",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="d-flex flex-direction-column align-items-center justify-content-center"
        >
          <h2>
            Welcome to our Chat App! Find friends and share your thoughts!
          </h2>
          <p>This app lets you connect with your friends!</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              Get Started <i className="fa fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg"></Col>
    </Row>
  );
};

export default Home;
