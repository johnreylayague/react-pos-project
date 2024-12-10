import { createSlice } from "@reduxjs/toolkit";

type refundListProps = {
  id: number;
  itemName: string;
  itemCount: number;
  itemPrice: string;
  refunded: boolean;
};

export type itemListProps = {
  id: number;
  itemName: string;
  itemCount: number;
  itemPrice: string;
  refundedCount: number;
  refunded: boolean;
};

const itemList: itemListProps[] = [
  {
    id: 1,
    itemName: "Item 21",
    itemCount: 1,
    itemPrice: "199.00",
    refundedCount: 0,
    refunded: false,
  },
  {
    id: 2,
    itemName: "Item 2",
    itemCount: 3,
    itemPrice: "100.00",
    refundedCount: 0,
    refunded: false,
  },
  {
    id: 3,
    itemName: "Item 3",
    itemCount: 55,
    itemPrice: "45.00",
    refundedCount: 0,
    refunded: false,
  },
];

const refundList: itemListProps[] = [];

export type initialRefundState = {
  refundData: refundListProps[];
  itemData: itemListProps[];
};

const refundSlice = createSlice({
  name: "refund",
  initialState: {
    itemData: itemList,
    refundData: refundList,
  },
  reducers: {
    refundItem(state, action) {
      const isItemExist = state.itemData.filter((item) => item.id === action.payload).length;

      const isItemExistInRefund = state.refundData.filter(
        (refund) => refund.id === action.payload
      ).length;

      if (!isItemExistInRefund && isItemExist) {
        const updatedItemData = state.itemData.map((item) => {
          if (item.id === action.payload) {
            return { ...item, refunded: true };
          }
          return { ...item };
        });

        const addedRefundItem = updatedItemData.find((item) => item.id === action.payload);

        state.itemData = [...updatedItemData];
        if (addedRefundItem) {
          state.refundData.push(addedRefundItem);
        }
      }
    },
    removeRefundedItem(state, action) {
      const isRefundExist = state.refundData.filter((item) => item.id === action.payload).length;

      const isRefundExistInItem = state.refundData.filter(
        (refund) => refund.id === action.payload
      ).length;

      if (isRefundExistInItem && isRefundExist) {
        const updatedItemData = state.itemData.map((item) => {
          if (item.id === action.payload) {
            return { ...item, refunded: false };
          }
          return { ...item };
        });

        const filteredRefundedItem = state.refundData.filter((item) => item.id !== action.payload);

        state.itemData = [...updatedItemData];
        state.refundData = filteredRefundedItem;
      }
    },
  },
});

export const refundActions = refundSlice.actions;

export default refundSlice;
