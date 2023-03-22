import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const userInfoSlice = createSlice({
  name: 'user-9-gr',
  initialState: initState.user,
  reducers: {
    setUserData(_, action) {
      return action.payload
    },
    resetUserInfo() {
      localStorage.clear()
      return initState.user
    },
  },
})

export const  { setUserData, resetUserInfo } = userInfoSlice.actions;
export const getUserInfoSelector = (state) => state.user;
export const userInfoReducer = userInfoSlice.reducer;


