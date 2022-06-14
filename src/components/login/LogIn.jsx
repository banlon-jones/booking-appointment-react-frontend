import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from './LogIn.module.css';
import { logInUser, setRole } from '../../store/user/user';
import CircleSpinner from '../spinners/CircleSpinner';

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setErrorMessage('');
  }, [email, password]);

  const logInButtonContent = () => {
    if (!loading) {
      return 'Log In';
    }
    return <CircleSpinner />;
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios({
        url: 'https://resorts-booking-api.herokuapp.com/auth/login',
        method: 'POST',
        data: {
          email,
          password,
        },
      });
      if (data.error) {
        setErrorMessage(data.error);
        return;
      }
      sessionStorage.setItem('JwtAccessToken', data);
      dispatch(logInUser());
      dispatch(setRole());
      navigate('/');
    } catch (err) {
      setLoading(false);
      const apiErrorMessages = {
        emailErr: 'User with provided email not found!',
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
          <Button
            variant="primary"
            type="submit"
            className={classes.submit_btn}
          >
            {logInButtonContent()}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LogIn;
