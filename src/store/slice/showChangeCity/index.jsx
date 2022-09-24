/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShow: false,
};

const ShowChangeCity = createSlice({
  name: 'ShowChangeCity',
  initialState,
  reducers: {
    addShowChangeCity: (state) => {
      state.isShow = true;
    },
    removeShowChangeCity: (state) => {
      state.isShow = false;
    },
  },
});

export default ShowChangeCity.reducer;

export const { addShowChangeCity, removeShowChangeCity } =
  ShowChangeCity.actions;
