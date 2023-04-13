import {createSlice} from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state = {...state, ...action.payload};
    },
  },
});

export const {registerUser} = userSlice.actions;
export default userSlice.reducer;
