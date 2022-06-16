/* eslint-disable comma-dangle */
import React from 'react';
import { cleanup, screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../../store/store';
import Form from '../Form';

afterEach(cleanup);

describe('React Test for Form', () => {
  test('Form Test', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>
    );
    const ResortElement = screen.getByTestId('form');
    expect(ResortElement).toBeInTheDocument('Add Resort');
  });
});

describe('AddResort Snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Form />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
