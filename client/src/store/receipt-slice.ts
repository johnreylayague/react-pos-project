import { createSlice } from "@reduxjs/toolkit";

type receiptDataListProps = {
  id: number;
  employee: string;
  pos: string;
  icon: string;
};

const receiptDataList: receiptDataListProps[] = [];

export type initialReceiptState = {
  isShowSideBar: boolean;
  receiptData: receiptDataListProps[];
};

const initialState: initialReceiptState = {
  isShowSideBar: true,
  receiptData: receiptDataList,
};

const receiptSlice = createSlice({
  name: "receipt",
  initialState,
  reducers: {
    handleShowSideBar(state, action) {
      state.isShowSideBar = action.payload;
    },
  },
});

export const receiptActions = receiptSlice.actions;

export default receiptSlice;
