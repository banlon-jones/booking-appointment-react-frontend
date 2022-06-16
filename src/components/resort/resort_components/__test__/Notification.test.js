/* eslint-disable comma-dangle */
import React from 'react';
import { cleanup, screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../../store/store';
import Notification from '../Notification';

afterEach(cleanup);

describe('React Test for AddResort', () => {
  test('Notification Test', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Notification />
        </Provider>
      </BrowserRouter>
    );
    const ResortElement = screen.getByTestId('notice');
    expect(ResortElement).toBeInTheDocument('resort');
  });
});

describe('Notification Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Notification />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
