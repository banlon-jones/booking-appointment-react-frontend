/* eslint-disable comma-dangle */
import React from 'react';
import { cleanup, screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store/store';
import ResortDetails from '../ResortDetails';

afterEach(cleanup);

describe('React Test for AddResort', () => {
  test('Add RssortTest', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ResortDetails />
        </Provider>
      </BrowserRouter>
    );
    const ResortElement = screen.getByTestId('Resort-details');
    expect(ResortElement).toBeInTheDocument('City');
  });
});

describe('Add Resort Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <ResortDetails />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
