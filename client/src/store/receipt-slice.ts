import { createSlice } from "@reduxjs/toolkit";
import { purchasedItems } from "./sale-slice";

type receiptDataListProps = {
  id: number;
  employee: string;
  pos: string;
  icon: string;
};

export type refundDataProps = {
  itemId: number;
  refunded: boolean;
  refundCount: number;
};

const receiptDataList: receiptDataListProps[] = [];

export type initialReceiptState = {
  isShowSideBar: boolean;
  receiptData: receiptDataListProps[];
  refundData: refundDataProps[];
  refundDialogQuantity: number;
  refundDialogitemId: number | string;
};

const initialState: initialReceiptState = {
  isShowSideBar: true,
  receiptData: receiptDataList,
  refundData: [],
  refundDialogQuantity: 0,
  refundDialogitemId: "",
};

const receiptSlice = createSlice({
  name: "receipt",
  initialState,
  reducers: {
    handleShowSideBar(state, action) {
      state.isShowSideBar = action.payload;
    },
    initialRefundData(state, action: { type: string; payload: purchasedItems[] }) {
      const purchasedItemData = action.payload;

      const updatedItemData = purchasedItemData.map((item) => {
        return { itemId: item.id, refunded: false, refundCount: 0 } as refundDataProps;
      });

      state.refundData = updatedItemData;
    },
    addRefundItem(state, action: { type: string; payload: string }) {
      const itemId = action.payload;

      const updatedRefundData = state.refundData.map((item) => {
        if (item.itemId === parseInt(itemId)) {
          return { ...item, refunded: true } as refundDataProps;
        }
        return item;
      });

      state.refundData = updatedRefundData;
    },
    removeRefundedItem(state, action: { type: string; payload: string }) {
      const itemId = action.payload;

      const updatedRefundData = state.refundData.map((item) => {
        if (item.itemId === parseInt(itemId)) {
          return { ...item, refunded: false, refundCount: 0 } as refundDataProps;
        }
        return item;
      });

      state.refundData = updatedRefundData;
    },
    updateRefundDialogQuantity(state, action: { type: string; payload: number }) {
      const quantity = action.payload;

      state.refundDialogQuantity = quantity;
    },
    updateRefundItemCount(
      state,
      action: { type: string; payload: { itemId: number; itemRefundCount: number } }
    ) {
      const { itemRefundCount, itemId } = action.payload;

      const updatedRefundData = state.refundData.map((item) => {
        if (item.itemId === itemId) {
          return { ...item, refundCount: itemRefundCount, refunded: true } as refundDataProps;
        }
        return item;
      });

      state.refundData = updatedRefundData;
    },
    updateRefundDialogitemId(state, action: { type: string; payload: number | string }) {
      const itemId = action.payload;

      state.refundDialogitemId = itemId;
    },
  },
});

export const receiptActions = receiptSlice.actions;

export default receiptSlice;
