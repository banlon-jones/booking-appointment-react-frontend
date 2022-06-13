/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/user';
import resortDetailSlice from './resort-details/resortDetail';

const store = configureStore({
  reducer: {
    user: userSlice,
    resortDetail: resortDetailSlice,
  },
});

export default store;
