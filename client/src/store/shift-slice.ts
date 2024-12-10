import { createSlice } from "@reduxjs/toolkit";

export type initialShiftState = {
  isShift: boolean;
};

const shiftSlice = createSlice({
  name: "shift",
  initialState: {
    isShift: false,
  } as initialShiftState,
  reducers: {
    handleOnOpenShift: (state) => {
      state.isShift = true;
    },
    handleOnCloseShift: (state) => {
      state.isShift = false;
    },
  },
});

export const shiftActions = shiftSlice.actions;

export default shiftSlice;
