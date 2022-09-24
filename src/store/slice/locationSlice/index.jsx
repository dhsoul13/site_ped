/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  current: '',
};

const locationSlice = createSlice({
  name: 'ShowPop',
  initialState,
  reducers: {
    addLocationFromBd: (state, actions) => {
      state.data = actions.payload.data;
      state.current = actions.payload.current;
    },
    changeLocation: (state, actions) => {
      state.current = actions.payload.current;
    },
  },
});

export default locationSlice.reducer;

export const { addLocationFromBd, changeLocation } = locationSlice.actions;
