import { createSlice } from "@reduxjs/toolkit";
import { generateRandomId } from "../utils/generateId";

export type refundDataProps = {
  itemId: number;
  refunded: boolean;
  refundCount: number;
};

export type refundedDataProps = {
  id: number;
  itemId: number;
  receiptId: number;
  refundCount: number;
};

export type initialRefundState = {
  refundData: refundDataProps[];
  refundedData: refundedDataProps[];
  dialogQuantity: { id: number; title: string; quantity: number };
  receiptId: number;
};

const initialState: initialRefundState = {
  refundData: [],
  refundedData: [],
  dialogQuantity: { id: 0, title: "", quantity: 0 },
  receiptId: 0,
};

const refundSlice = createSlice({
  name: "refund",
  initialState: initialState,
  reducers: {
    initialRefundData(
      state,
      action: { type: string; payload: { refundData: refundDataProps[]; receiptId: number } }
    ) {
      const { refundData, receiptId } = action.payload;

      state.refundData = refundData;
      state.receiptId = receiptId;
    },
    updateDialogQuantity(
      state,
      action: { payload: { id: number; title: string; quantity: number } }
    ) {
      const { quantity, title, id } = action.payload;

      state.dialogQuantity.id = id;
      state.dialogQuantity.title = title;
      state.dialogQuantity.quantity = quantity;
    },
    updateRefundItem(
      state,
      action: { payload: { itemId: number; refunded: boolean; refundCount: number } }
    ) {
      const { itemId, refundCount, refunded } = action.payload;

      const index = state.refundData.findIndex((refund) => refund.itemId === itemId);

      state.refundData[index] = {
        ...state.refundData[index],
        refunded: refunded,
        refundCount: refundCount,
      };
    },
    updateRefundedData(state) {
      const refundedData = state.refundData.map((refund) => {
        return {
          id: generateRandomId(),
          itemId: refund.itemId,
          receiptId: state.receiptId,
          refundCount: refund.refundCount,
        } as refundedDataProps;
      });

      state.refundedData.push(...refundedData);
    },
  },
});

export const refundActions = refundSlice.actions;

export default refundSlice;
