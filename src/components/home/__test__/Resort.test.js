import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

import Resort from '../Resort';

describe('Resorts snapshots', () => {
  const resort = {
    id: 1,
    name: 'Resort Name',
    image: 'image_url',
  };
  const initialState = { resorts: [] };
  const mockStore = configureStore();
  let store;

  it('matches Resort snapshot', () => {
    store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Resort resort={resort} />
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
            <Resort resort={resort} />
          </Router>
        </Provider>,
      );
    });

    test('renders the Resorts page heading', () => {
      expect(screen.getByRole('heading')).toHaveTextContent(/Resort Name/);
    });

    test('renders image in the ResortsToDelete page', () => {
      expect(screen.getAllByRole('img')[0].src).toContain('image_url');
    });
  });
});
