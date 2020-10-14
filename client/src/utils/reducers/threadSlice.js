import { createSlice } from '@reduxjs/toolkit';

export const threadSlice = createSlice({
	name: 'thread',
	initialState: {
		genre: '',
		threadText: '',
	},
	reducers: {
		UPDATE_GENRE: (state, action) => {
			state.genre = action.payload;
		},
		UPDATE_THREADTEXT: (state, action) => {
			state.threadText = action.payload;
		},
	},
});
