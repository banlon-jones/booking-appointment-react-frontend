/* eslint-disable no-param-reassign */

const setUpdateResort = (data, id) => async () => {
  const url = `http://localhost:3001/resorts/${id}`;
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        Authorization: sessionStorage.getItem('JwtAccessToken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.log('Error in add', error);
  }
};

export default setUpdateResort;
