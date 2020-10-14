import { threadSlice } from './threadSlice';

export const { UPDATE_GENRE, UPDATE_THREADTEXT } = threadSlice.actions;

export default { thread: threadSlice.reducer };
