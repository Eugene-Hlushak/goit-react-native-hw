// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   id: null,
//   name: null,
//   email: null,
//   photo: null,
//   token: null,
//   isLoggedIn: false,
// };

// const userSlice = createSlice({
//   name: user,
//   initialState: initialState,
//   reducers: {
//     setUser: {
//       reducer: (state, { payload }) => {
//         (state.id = payload.uid),
//           (state.name = payload.displayName),
//           (state.photo = payload.photoURL),
//           (state.email = payload.email),
//           (state.token = payload.accessToken),
//           (state.isLoggedIn = true);
//       },
//     },
//     removeUser: {
//       reducer: (state) => {
//         (state.name = null),
//           (state.photo = null),
//           (state.email = null),
//           (state.token = null),
//           (state.isLoggedIn = false);
//       },
//     },
//   },
// });

// export const { setUser, removeUser } = userSlice.actions;
// export const rootReducer = userSlice.reducer;
