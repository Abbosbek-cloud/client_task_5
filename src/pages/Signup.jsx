import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import profile from "../assets/profile.png";
import { useSignupUserMutation } from "../services/appApi";
const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signUpUser, { isLoading, error }] = useSignupUserMutation();

  const navigate = useNavigate();

  const [image, setImage] = useState({
    uploading: false,
    preview: null,
    img: null,
  });

  const validateImage = (e) => {
    let file = e.target.files[0];
    if (file.size >= 5048576) {
      return alert("Max image size is  5mb");
    } else {
      setImage({
        ...image,
        img: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image.img);
    data.append("upload_preset", "d18sqvph");
    try {
      setImage({ ...image, uploading: true });
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/djbc4zikh/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setImage({ ...image, uploading: false });
      return urlData.url;
    } catch (error) {
      setImage({ ...image, uploading: false });
      alert("Something went wrong!");
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSendDaata = async (e) => {
    e.preventDefault();
    if (!image.img) return;
    const url = await uploadImage();
    const newData = { ...data, picture: url };
    signUpUser(newData).then(({ data }) => {
      if (data) {
        navigate("/chat");
      }
    });
  };

  return (
    <Row>
      <Col
        md={7}
        className="d-flex justify-content-center align-items-center flex-direction-column"
      >
        <Form
          style={{ width: "80%", maxWidth: 500 }}
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSendDaata}
        >
          <h1 className="text-center">Create account</h1>
          <div className="signup-profile-pic__container">
            <img
              src={image.preview || profile}
              alt="profile_image"
              className="signup-profile-pic"
            />
            <label htmlFor="image-upload" className="image-upload-label">
              <i className="fas fa-plus-circle add-picture-icon"></i>
            </label>
            <input
              type="file"
              id="image-upload"
              hidden
              accept="image/png, image/jpeg"
              name="img"
              onChange={validateImage}
            />
          </div>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={data.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={data.email}
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={data.password}
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button disabled={image.uploading} variant="primary" type="submit">
            {image.uploading ? "Signing up..." : "Create Account"}
          </Button>
          <div className="py-4">
            <p className="text-center">
              Already have an account <Link to="/login">Sign In</Link>
            </p>
          </div>
        </Form>
      </Col>
      <Col md={5} className="signup__bg"></Col>
    </Row>
  );
};

export default Signup;
