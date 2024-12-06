import { createSlice } from "@reduxjs/toolkit";

export type initialSaleState = {
  searchInput: string;
};

const initialState: initialSaleState = {
  searchInput: "",
};

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
    handleShowSideBar(state, action) {
      // state.isShowSideBar = action.payload;
    },
  },
});

export const saleActions = saleSlice.actions;

export default saleSlice;
