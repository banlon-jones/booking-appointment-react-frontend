import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setRole = createAsyncThunk('setRole', async () => {
  if (sessionStorage.getItem('JwtAccessToken')) {
    const url = 'https://resorts-booking-api.herokuapp.com/user-role';
    try {
      const { data } = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem('JwtAccessToken'),
          },
        },
      );
      return data.role;
    } catch (e) {
      return '';
    }
  }
  return '';
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: sessionStorage.getItem('JwtAccessToken') !== null,
    role: '',
  },
  reducers: {
    logInUser(state) {
      return { ...state, loggedIn: true };
    },
    logOutUser(state) {
      sessionStorage.removeItem('JwtAccessToken');
      return { ...state, loggedIn: false };
    },
  },
  extraReducers: {
    [setRole.fulfilled]: (state, { payload }) => ({ ...state, role: payload }),
  },
});

export const { logInUser, logOutUser } = userSlice.actions;
export { setRole };
export default userSlice.reducer;
