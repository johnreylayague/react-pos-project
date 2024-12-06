import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    isDialog: false,
  },
  reducers: {
    openDialog(state) {
      state.isDialog = true;
    },
    closeDialog(state) {
      state.isDialog = false;
    },
  },
});

export const dialogActions = dialogSlice.actions;

export default dialogSlice;
