import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from '../SignUp';

describe('snapshots', () => {
  const initialState = { user: { loggedIn: false, role: '' } };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('matches SignUp snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SignUp />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('form fields rendering', () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <SignUp />
          </Router>
        </Provider>,
      );
    });
    it("renders with 'Name' field", () => {
      const nameField = screen.getAllByLabelText('Name');
      expect(nameField[0]).toBeInTheDocument();
    });

    it("renders with 'Email' text", () => {
      const emailField = screen.getAllByLabelText('Email Address');
      expect(emailField[0]).toBeInTheDocument();
    });

    it("renders with 'Password' field", () => {
      const passwordField = screen.getAllByLabelText('Password');
      expect(passwordField[0]).toBeInTheDocument();
    });

    it("renders with 'Password Confirmation' field", () => {
      const passwordConfirmationField = screen.getAllByLabelText(
        'Password Confirmation',
      );
      expect(passwordConfirmationField[0]).toBeInTheDocument();
    });
  });
});
