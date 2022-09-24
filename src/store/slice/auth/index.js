/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAdmin: false,
  id: '',
  email: '',
  name: '',
  isEmail: false,
  isAuth: false,
  isDoctor: false,
  confirmedAdmin: false,
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    AddAuth: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isAuth = action.payload.isAuth;
      state.isEmail = action.payload.isEmail;
      state.isAdmin = action.payload.isAdmin;
      state.isDoctor = action.payload.isDoctor;
      state.confirmedAdmin = action.payload.confirmedAdmin;

    },
    RemoveAuth: (state, action) => {
      state.email = '';
      state.id = '';
      state.name = '';
      state.isAuth = false;
      state.isAdmin = false;
      state.isEmail = false;
      state.isDoctor = false;
      state.confirmedAdmin = false;
    },
  },
});

export default AuthSlice.reducer;

export const { AddAuth, RemoveAuth } = AuthSlice.actions;
