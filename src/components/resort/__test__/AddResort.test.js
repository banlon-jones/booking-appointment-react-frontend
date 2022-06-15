/* eslint-disable comma-dangle */
import React from 'react';
import { cleanup, screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store/store';
import AddResort from '../AddResort';

afterEach(cleanup);

describe('React Test for AddResort', () => {
  test('Add RssortTest', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AddResort />
        </Provider>
      </BrowserRouter>
    );
    const ResortElement = screen.getByTestId('Add-resort');
    expect(ResortElement).toBeInTheDocument('Add Resort');
  });
});

describe('Add Resort Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <AddResort />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
