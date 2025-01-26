import { createSlice } from "@reduxjs/toolkit";

export type initialDrawerState = {
  isDrawerOpen: boolean;
  menuData: menuDataListProps[];
};

type menuDataListProps = {
  id: number;
  name: string;
  link: string;
  icon: string;
};

const menuDataList = [
  { id: 1, name: "Sales", link: "/sale", icon: "shopping_basket" },
  { id: 2, name: "Receipts", link: "/receipt", icon: "receipt" },
  { id: 3, name: "Shift", link: "/shift", icon: "schedule" },
  { id: 4, name: "Items", link: "/item", icon: "list" },
  // { id: 5, name: "Settings", link: "/settings", icon: "settings" },
];

const initialState: initialDrawerState = {
  isDrawerOpen: false,
  menuData: menuDataList,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    handleToggleDrawer(state, action) {
      state.isDrawerOpen = action.payload;
    },
    handleOpenDrawer(state) {
      state.isDrawerOpen = true;
    },
    handleCloseDrawer(state) {
      state.isDrawerOpen = false;
    },
  },
});

export const drawerActions = drawerSlice.actions;

export default drawerSlice;
