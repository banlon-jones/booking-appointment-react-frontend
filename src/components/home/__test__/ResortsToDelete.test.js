import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../../../store/store';
import ResortsToDelete from '../ResortsToDelete';

describe('ResortsToDelete snapshots', () => {
  const initialState = { resorts: [] };
  const mockStore = configureStore();
  let store;

  it('matches ResortsToDelete snapshot', () => {
    store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <ResortsToDelete />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Page rendering', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <ResortsToDelete />
        </Router>
      </Provider>,
    );
  });

  test('renders the ResortsToDelete page heading', () => {
    expect(screen.getByRole('heading')).toHaveTextContent(/All Resorts/);
  });

  test('renders  Loading spinner in the ResortsToDelete page', () => {
    expect(screen.getAllByText('Loading...'));
  });
});
