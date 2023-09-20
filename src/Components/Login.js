import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = existingUsers.find((user) => user.email === data.email);

    if (user && user.password === data.password) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      navigate("/dashboard");
    } else {
      alert("please enter vaild e-mail id");
    }
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <Container>
      <Row>
        <Col lg={4}></Col>
        <Col lg={4} className="bg-success p-5 mt-5 rounded">
          <div className="d-flex justify-content-center">
            <h1 style={{ color: "white", fontFamily: "monospace" }}>Login</h1>
          </div>
          <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" >
              <Form.Label
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "monospace",
                  color: "white"
                }}
              >
                Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <div className="text-danger">{errors.email.message}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "monospace",
                  color: "white"
                }}
              >
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <div className="text-danger">{errors.password.message}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
              style={{color: "white"}}
                type="checkbox"
                label="Check me out"
                {...register("checkbox", {
                  required: "You must agree to the terms",
                })}
              />
              {errors.checkbox && (
                <div className="text-danger">{errors.checkbox.message}</div>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <div className="mt-5 d-flex flex-column">
            <Form.Label
              style={{
                fontSize: "30px",
                fontWeight: "700",
                fontFamily: "monospace",
                color: "white"
              }}
            >
              Don't have an account
            </Form.Label>
            <Button variant="primary" type="button" width="fit-content" onClick={goToSignUp}>
              Signup
            </Button>
          </div>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </Container>
  );
};
