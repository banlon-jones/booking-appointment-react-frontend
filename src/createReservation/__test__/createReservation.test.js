import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import CreateReservation from '../CreateReversation';
import store from '../../store/store';

describe('create reservation component should render as expected', () => {
  it('should display BOOK A RESORT', () => {
    render(
      <Provider store={store}>
        <CreateReservation />
      </Provider>,
    );
    screen.getByText('BOOK A RESORT');
  });
  it('should display reservation form', () => {
    render(
      <Provider store={store}>
        <CreateReservation />
      </Provider>,
    );
    screen.getByText('Make a reservation');
    screen.getByText('Select a resort');
    screen.getByText('From');
    screen.getByText('To');
    screen.getByText('submit');
  });
});
