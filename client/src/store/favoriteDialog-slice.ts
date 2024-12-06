import { createSlice } from "@reduxjs/toolkit";

const favoriteDialogSlice = createSlice({
  name: "favoriteDialog",
  initialState: {
    selectedTab: 0,
    isSearch: false,
    isDialog: false,
    OldValue: 0,
  },
  reducers: {
    changeTab(state, action) {
      state.selectedTab = action.payload;
    },
    updateOldValue(state, action) {
      state.OldValue = action.payload;
    },
    openDialog(state) {
      state.isDialog = true;
    },
    closeDialog(state) {
      state.isDialog = false;
    },
    openSearch(state) {
      state.isSearch = true;
    },
    closeSearch(state) {
      state.isSearch = false;
    },
  },
});

export const favoriteDialogActions = favoriteDialogSlice.actions;

export default favoriteDialogSlice;
