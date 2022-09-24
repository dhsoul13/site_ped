/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isShow: false,
	text: ''
};

const ShowAlert = createSlice({
	name: 'ShowAlert',
	initialState,
	reducers: {
		addShowAlert: (state, actions) => {
			state.isShow = true;
			state.text = actions.payload.text;
		},
		removeShowAlert: (state) => {
			state.isShow = false;
			state.text = '';
		}
	}
});

export default ShowAlert.reducer;

export const { addShowAlert, removeShowAlert } = ShowAlert.actions;
