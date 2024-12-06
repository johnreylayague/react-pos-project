import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isSearch: false,
  },
  reducers: {
    handleToggleSearch(state) {
      state.isSearch = !state.isSearch;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
