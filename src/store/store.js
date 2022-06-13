import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/user';
import resortsSlice from './resorts/resortsSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    resorts: resortsSlice,
  },
});

export default store;
