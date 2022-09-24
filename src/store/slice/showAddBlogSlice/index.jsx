/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShow: false,
};

const ShowAddBlog = createSlice({
  name: 'ShowAddBlog',
  initialState,
  reducers: {
    addShowAddBlog: (state) => {
      state.isShow = true;
    },
    removeShowAddBlog: (state) => {
      state.isShow = false;
    },
  },
});

export default ShowAddBlog.reducer;

export const { addShowAddBlog, removeShowAddBlog } = ShowAddBlog.actions;
