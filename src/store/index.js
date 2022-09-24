/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slice/auth';
import ShowPopAppSlice from './slice/showPopUp';
import showSpiner from './slice/showSpiner';
import locationSlice from './slice/locationSlice';
import ShowChangeCity from './slice/showChangeCity';
import ShowAddBlog from './slice/showAddBlogSlice';

const store = configureStore({
  reducer: {
    Auth: AuthSlice,
    ShowAuthPopUp: ShowPopAppSlice,
    ShowCity: ShowChangeCity,
    ShowSpiner: showSpiner,
    Location: locationSlice,
    ShowAddBlog,
  },
});

export default store;
