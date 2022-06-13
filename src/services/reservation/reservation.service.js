import { Axios as axios } from 'axios';

// eslint-disable-next-line no-unused-vars
const create = (reservationPayload) => {
  const url = 'http://127.0.0.1:3000/reservation';
  try {
    const { data } = axios.post(
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

const getReservation = () => {
  const url = ''
}
