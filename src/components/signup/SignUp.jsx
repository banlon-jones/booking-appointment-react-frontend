import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import classes from './SignUp.module.css';
import CircleSpinner from '../spinners/CircleSpinner';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successfullSignUp, setSuccessfullSignUp] = useState(false);

  const signUpButtonContent = () => {
    if (!loading && !successfullSignUp) {
      return 'Sign Up';
    }
    if (successfullSignUp) {
      return 'Account Created!';
    }
    return <CircleSpinner />;
  };

  useEffect(() => {
    setErrorMessage('');
  }, [password, passwordConfirmation]);

  const registerUser = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setErrorMessage('Passwords do not match!');
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/auth/register',
        method: 'POST',
        data: {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      });
      setLoading(false);
      if (data.error) {
        setErrorMessage(data.error);
        return;
      }
      setSuccessfullSignUp(true);
      setInterval(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.message);
    }
  };

  return (
    <div className={classes.register_container}>
      <Container className={classes.form_container}>
        <h3 className={classes.form_title}>Sign Up</h3>
        <span className={classes.error_message}>{errorMessage}</span>
        <Form onSubmit={(e) => registerUser(e)}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <span>*</span>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <span>*</span>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicPasswordConfirmation"
          >
            <Form.Label>Password Confirmation</Form.Label>
            <span>*</span>
            <Form.Control
              type="password"
              placeholder="Password Confirmation"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className={classes.submit_btn}
            id="sign-up-btn"
          >
            {signUpButtonContent()}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignUp;
