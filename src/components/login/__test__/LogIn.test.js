import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import LogIn from '../LogIn';

describe('snapshots', () => {
  const initialState = { user: { loggedIn: false, role: '' } };
  const mockStore = configureStore();
  let store;

  it('matches LogIn snapshot', () => {
    store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <LogIn />
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
            <LogIn />
          </Router>
        </Provider>,
      );
    });

    it("renders with 'Email' text", () => {
      const emailField = screen.getAllByLabelText('Email Address');
      expect(emailField[0]).toBeInTheDocument();
    });

    it("renders with 'Password' field", () => {
      const passwordField = screen.getAllByLabelText('Password');
      expect(passwordField[0]).toBeInTheDocument();
    });
  });
});
