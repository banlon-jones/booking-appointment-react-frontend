import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

import Resorts from '../Resorts';

describe('Resorts snapshots', () => {
  const initialState = { resorts: [] };
  const mockStore = configureStore();
  let store;

  it('matches Resorts snapshot', () => {
    store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Resorts />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('Page rendering', () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <Resorts />
          </Router>
        </Provider>,
      );
    });

    test('renders the Resorts page heading', () => {
      expect(screen.getByRole('heading')).toHaveTextContent(/Most Visited Resorts/);
    });

    test('renders button in the ResortsToDelete page', () => {
      expect(screen.getAllByRole('button')).toHaveLength(2);
    });
    test('renders unordered list item in the ResortsToDelete page', () => {
      expect(screen.getByRole('list'));
    });
  });
});
