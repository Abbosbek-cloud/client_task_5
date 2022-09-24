import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSendDaata = async (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <Row>
      <Col md={5} className="login__bg"></Col>
      <Col
        md={7}
        className="d-flex justify-content-center align-items-center flex-direction-column"
      >
        <Form
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSendDaata}
          style={{ width: "80%", maxWidth: 500 }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              value={data.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              value={data.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div className="py-4">
            <p className="text-center">
              Do not have an account <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
