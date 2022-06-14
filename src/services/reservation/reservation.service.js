import axios from 'axios';

export const create = async (reservationPayload) => {
  const url = 'https://resorts-booking-api.herokuapp.com/reservations';
  try {
    const { data } = await axios.post(
      url,
      reservationPayload,
      {
        headers: {
          Authorization: sessionStorage.getItem('JwtAccessToken'),
        },
      },
    );
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const fetchReservation = async () => {
  const url = 'https://resorts-booking-api.herokuapp.com/reservations';
  try {
    const { data } = await axios.get(
      url,
      {
        headers: {
          authorization: sessionStorage.getItem('JwtAccessToken'),
        },
      },
    );
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
