import { configureStore } from "@reduxjs/toolkit";
import drawerSlice, { initialDrawerState } from "./drawer-slice";
import searchSlice from "./search-slice";
import itemSlice, { initialItemState } from "./item-slice";
import tabPanelSlice from "./tabPanel-slice";
import favoriteDialog from "./favoriteDialog-slice";
import setting, { initialSettingState } from "./setting-slice";
import category, { initialCategoryState } from "./category-slice";
import refund, { initialRefundState } from "./refund-slice";
import receipt, { initialReceiptState } from "./receipt-slice";
import sale, { initialSaleState } from "./sale-slice";
import dialog from "./dialog-slice";

export type storeProps = {
  drawer: initialDrawerState;
  search: { isSearch: boolean };
  item: initialItemState;
  tabPanel: { selectedTab: number };
  dialog: { isDialog: boolean };
  favoriteDialog: { selectedTab: number; isSearch: boolean; isDialog: boolean; OldValue: number };
  category: initialCategoryState;
  refund: initialRefundState;
  receipt: initialReceiptState;
  setting: initialSettingState;
  sale: initialSaleState;
};

const store = configureStore({
  reducer: {
    drawer: drawerSlice.reducer,
    search: searchSlice.reducer,
    item: itemSlice.reducer,
    tabPanel: tabPanelSlice.reducer,
    dialog: dialog.reducer,
    favoriteDialog: favoriteDialog.reducer,
    category: category.reducer,
    refund: refund.reducer,
    setting: setting.reducer,
    receipt: receipt.reducer,
    sale: sale.reducer,
  },
});

export default store;
