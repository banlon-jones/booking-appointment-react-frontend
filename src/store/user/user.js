import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
  },
  reduces: {
    logInUser(state) {
      return { ...state, loggedIn: true };
    },
    logOutUser(state) {
      return { ...state, loggedIn: false };
    },
  },
});

export const { logInUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
