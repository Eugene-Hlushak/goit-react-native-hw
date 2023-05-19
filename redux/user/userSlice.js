import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  email: null,
  photo: null,
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
});

export const { setUser, removeUser } = userSlice.actions;
export const rootReducer = userSlice.reducer;
