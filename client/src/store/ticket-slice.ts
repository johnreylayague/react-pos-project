import { createSlice } from "@reduxjs/toolkit";

const menuDataList = [{ id: 1, title: "", link: "", icon: "" }];

type SettingsMenuList = {
  id: number;
  title: string;
  link: string;
  icon: string;
};

export type initialSettingState = {
  menuData: SettingsMenuList[];
};

const initialState: initialSettingState = {
  menuData: menuDataList,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    toggleSideBar(state, action) {},
  },
});

export const settingActions = settingSlice.actions;

export default settingSlice;
