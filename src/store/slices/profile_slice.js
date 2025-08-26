import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchProfileStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProfileSuccess(state, action) {
      state.loading = false;
      state.userInfo = action.payload;
    },
    fetchProfileFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateProfileStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateProfileSuccess(state, action) {
      state.loading = false;
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    updateProfileFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileFailure,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailure,
} = profileSlice.actions;

export default profileSlice.reducer;