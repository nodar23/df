import { configureStore } from "@reduxjs/toolkit";
import { getInitState } from "./initState";
import { filterReducer } from "./slices/filterSlice";
import { userInfoReducer } from "./slices/userInfoSlice";
import { LS_KEY } from "./constants";
import { cartReducer } from './slices/cartSlice'
import { favoriteReducer } from './slices/favoriteSlice'


export const store = configureStore({
  reducer: {
    user: userInfoReducer,
    filter: filterReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
  },
  preloadedState: getInitState(),
})

store.subscribe(() => {
  window.localStorage.setItem(LS_KEY, JSON.stringify(store.getState()))
})