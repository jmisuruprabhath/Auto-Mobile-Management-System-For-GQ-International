import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import MainScreen from "./MainScreen";
import "./LoginScreen.css";
import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const checkCredentials = () => {
    if (email == "contactgqintl@gmail.com" && password == "qwe123") {
      history.push("/overview");
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <MainScreen title="ADMIN LOGIN">
      <div className="loginContainer">
        <Form onSubmit={checkCredentials}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: "white", fontSize: "24px" }}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{
                backgroundColor: "rgba(171, 183, 183, 0.5)",
                color: "white",
              }}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ color: "white", fontSize: "24px" }}>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{
                backgroundColor: "rgba(171, 183, 183, 0.5)",
                color: "white",
              }}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <br />
          <Button
            variant="danger"
            type="submit"
            style={{ padding: "10px" }}
            onCLick={() => checkCredentials()}
          >
            LOGIN
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
