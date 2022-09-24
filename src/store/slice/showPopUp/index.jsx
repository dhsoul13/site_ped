/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShow: false,
};

const ShowPopAppSlice = createSlice({
  name: 'ShowPop',
  initialState,
  reducers: {
    addShow: (state) => {
      state.isShow = true;
    },
    removeShow: (state) => {
      state.isShow = false;
    },
  },
});

export default ShowPopAppSlice.reducer;

export const { addShow, removeShow } = ShowPopAppSlice.actions;
