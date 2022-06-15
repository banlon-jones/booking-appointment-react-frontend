import store from '../../store';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const getReservationsList = [
  {
    id: 2,
    date_from: '2023-06-06T00:00:00.000Z',
    date_to: '2022-06-06T00:00:00.000Z',
    resort: {
      id: 1,
      name: 'Eiffel Tower',
      city: 'Paris',
      country: 'France',
      image: 'https://cdn.pixabay.com/photo/2016/10/31/16/37/paris-1786048_960_720.jpg',
      cost: '1.0',
    },
  },
];

const mock = new MockAdapter(axios);
mock.onGet('https://resorts-booking-api.herokuapp.com/reservations')
  .reply(200, getReservationsList);

mock.onPost('https://resorts-booking-api.herokuapp.com/reservations')
  .reply(200, { message: 'resort successfully created' });

describe('reservation redux state tests', () => {
  it('should initialize state', () => {
    const state = store.getState().reservations;
    expect(state.reservations).toEqual([]);
    expect(state.isLoading).toEqual(false);
  });
  it('should fetch reservations', async () => {
    axios.get('https://resorts-booking-api.herokuapp.com/reservations').then((response) => {
      expect(response.data.length).toEqual(1);
    });
  });
  it('should create reservation', () => {
    axios.post('https://resorts-booking-api.herokuapp.com/reservations').then((response) => {
      expect(response.data).toEqual({ message: 'resort successfully created' });
    });
  });
});
