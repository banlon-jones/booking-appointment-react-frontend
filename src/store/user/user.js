import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: sessionStorage.getItem('JwtAccessToken') !== null,
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
});

export const { logInUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
