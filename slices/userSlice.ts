import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../types/types';

type State = {
  user: User;
};

const initialState: State = {
  user: { uid: '', email: '' },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
