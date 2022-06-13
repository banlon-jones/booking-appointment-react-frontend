/* eslint-disable no-param-reassign */

const setNewResort = (data) => async () => {
  try {
    const response = await fetch('http://localhost:3001/resorts', {
      method: 'POST',
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

export default setNewResort;
