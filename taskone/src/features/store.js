import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user";
import loginUser from "./loginUser";

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginUser,
  },
});
