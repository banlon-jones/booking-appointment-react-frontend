/* eslint-disable comma-dangle */
import React from 'react';
import { cleanup, screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../../store/store';
import ReserveResort from '../ReserveResort';

afterEach(cleanup);

describe('React Test for AddResort', () => {
  test('Reserve Resort Test', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ReserveResort />
        </Provider>
      </BrowserRouter>
    );
    const ResortElement = screen.getByTestId('reserve-button');
    expect(ResortElement).toBeInTheDocument('resort');
  });
});

describe('Reserve Resort Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <ReserveResort />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
