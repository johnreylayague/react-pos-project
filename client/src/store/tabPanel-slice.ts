import { createSlice } from "@reduxjs/toolkit";

const tabPanelSlice = createSlice({
  name: "tabPanel",
  initialState: {
    selectedTab: 0,
  },
  reducers: {
    handleChangeTab(state, action) {
      state.selectedTab = action.payload;
    },
  },
});

export const tabPanelActions = tabPanelSlice.actions;

export default tabPanelSlice;
