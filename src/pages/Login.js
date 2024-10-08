import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  // onSubmit은 서버에 값을 전송 -> refresh됨 , Form에서는 onClick으로 하면 X

  const loginUser = (event) => {
    event.preventDefault(); // 페이지 새로고침 막는 함수 **Form 을 사용하면 꼭 쓰자!

    console.log("login user function issue"); // 잠깐 떴다가 사라짐 -> 페이지를 다시 새로고침하기 때문
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <Container>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
