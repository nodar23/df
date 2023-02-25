import { createSlice } from "@reduxjs/toolkit";
import { getInitialState } from "../initialState";

const filterSlice = createSlice({
    name: 'filter',
    initialState: getInitialState.filter,
    reducers: {
      changeSearchFilter(state, action) {
        state.search = action.payload;
      },
    },
  });
  
  export const {
    changeSearchFilter,
  } = filterSlice.actions;

  export const filterReducer = filterSlice.reducer;
  export const getSearchSelector = (state) => state.filter.search;
