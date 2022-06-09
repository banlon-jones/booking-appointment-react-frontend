import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, [email, password]);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        url: 'http://localhost:3000/auth/login',
        method: 'POST',
        data: {
          email,
          password,
        },
      });
      console.log(data);
      if (data.error) {
        setErrorMessage(data.error);
        return;
      }
    } catch (err) {
      const apiErrorMessages = {
        emailErr: 'User with email provided email not found!',
        passwordErr: 'Incorrect password provided!',
      };
      const { error } = err.response.data;
      if (error.match("Couldn't find User with...")) {
        setErrorMessage(apiErrorMessages.emailErr);
      } else {
        setErrorMessage(apiErrorMessages.passwordErr);
      }
    }
  };

  return (
    <div className={classes.login_container}>
      <Container className={classes.form_container}>
        <h3 className={classes.form_title}>Log In</h3>
        <span className={classes.error_message}>{errorMessage}</span>
        <Form onSubmit={(e) => loginUser(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <span>*</span>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span>{email}</span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <span>*</span>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span>{password}</span>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className={classes.submit_btn}
          >
            Log In
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LogIn;
