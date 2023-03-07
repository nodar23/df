import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";


const userInfoSlice = createSlice({
  name: 'user-9-gr',
  initialState: initState.user,
  reducers: {
    setUserToken(state, action) {
      state.token = action.payload
    },
    setUserName(state, action) {
      state.name = action.payload
    },
    setUserEmail(state, action) {
      state.email = action.payload
    },
    setUserGroup(state, action) {
      state.group = action.payload
    },
    setUserAvatar(state, action) {
      state.avatar = action.payload
    },
    setUserAbout(state, action) {
      state.about = action.payload
    },
    resetUserInfo() {
      return initState.user
    },
  },
})


export const  { setUserToken, setUserName, setUserEmail, setUserGroup, setUserAvatar, resetUserInfo, setUserAbout,
} = userInfoSlice.actions;
export const getUserInfoSelector = (state) => state.user;
export const userInfoReducer = userInfoSlice.reducer;


