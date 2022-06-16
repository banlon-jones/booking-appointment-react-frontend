/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import React from 'react';
import { cleanup, screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import store from '../../../store/store';
import ResortDetails from '../ResortDetails';

jest.mock('axios');

afterEach(cleanup);

describe('React Test for AddResort', () => {
  test('Add RssortTest', async () => {
    axios.get.mockImplementation(() => ({
      data: {
        name: 'Resort Name',
        description: 'Resort Description',
        image: 'https://resort.com/image.jpg',
        price: '$100',
        location: 'Resort Location',
        id: '1',
        isDeleted: false,
      },
    }));

    render(
      <BrowserRouter>
        <Provider store={store}>
          <ResortDetails />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.findByText('Resort Name')).toBeTruthy();
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
