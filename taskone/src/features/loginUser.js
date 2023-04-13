import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  currentUser: "",
  error: "",
};

export const loginSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.currentUser = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export const {loginSuccess, loginFail, logout} = loginSlice.actions;
export default loginSlice.reducer;
