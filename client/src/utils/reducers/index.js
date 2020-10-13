// import and export reducers from reducers folder
import { threadSlice } from './threadSlice';

export const { UPDATE_GENRE, UPDATE_THREADTEXT } = threadSlice.actions;

export const threadReducer = threadSlice.reducer;
