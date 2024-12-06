import { createSlice } from "@reduxjs/toolkit";

const menuDataList = [
  { id: 1, title: "General", link: "/settings/general", icon: "settings" },
  { id: 2, title: "Printers", link: "/settings/printers", icon: "print" },
  { id: 3, title: "Customer displays", link: "/settings/customer-display", icon: "tablet" },
  { id: 4, title: "Taxes displays", link: "/settings/taxes-display", icon: "percent" },
];

const generalDataList = [
  { id: 1, title: "Use camera to scan barcodes", checked: false },
  { id: 2, title: "Dark Theme", checked: false },
];

type SettingsMenuList = {
  id: number;
  title: string;
  link: string;
  icon: string;
};

type SettingGeneralList = {
  id: number;
  title: string;
  checked: boolean;
};

export type isThemeModeProps = "light" | "dark";
export type isShowSidebarProps = "show" | "hidden";

export type initialSettingState = {
  menuData: SettingsMenuList[];
  generalData: SettingGeneralList[];
  isShowSidebar: isShowSidebarProps;
  isThemeMode: isThemeModeProps;
};

const initialState: initialSettingState = {
  menuData: menuDataList,
  generalData: generalDataList,
  isShowSidebar: "show",
  isThemeMode: "light",
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    toggleSideBar(state, action: { payload: isShowSidebarProps }) {
      state.isShowSidebar = action.payload;
    },
    toggleThemeMode(state, action: { payload: isThemeModeProps }) {
      state.isThemeMode = action.payload;
    },
    updateGeneral(state, action: { payload: { id: number; checked: boolean } }) {
      state.generalData = state.generalData.map((general) => {
        if (general.id === action.payload.id) {
          return { ...general, checked: action.payload.checked };
        }
        return general;
      });
    },
  },
});

export const settingActions = settingSlice.actions;

export default settingSlice;
