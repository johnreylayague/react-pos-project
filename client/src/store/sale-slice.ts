import { createSlice } from "@reduxjs/toolkit";

export type pageDataProps = {
  id: number;
  pageName: string;
  tabId: number;
  pageId: number;
};

export type initialSaleState = {
  isSsearch: boolean;
  isEdit: boolean;
  tabIndex: number;
  pageData: pageDataProps[];
};

const saleSlice = createSlice({
  name: "sale",
  initialState: {
    isSsearch: false,
    isEdit: false,
    tabIndex: 0,
    pageData: [],
  } as initialSaleState,
  reducers: {
    handleOnOpenSearch(state) {
      state.isSsearch = true;
    },
    handleOnCloseSearch(state) {
      state.isSsearch = false;
    },
    handleOnOpenEdit(state) {
      state.isEdit = true;
    },
    handleOnCloseEdit(state) {
      state.isEdit = false;
    },
    handleOnChangeTab(state, action) {
      state.tabIndex = action.payload;
    },
    handleOnAddNewTabPage(state) {
      const prevPageData = state.pageData;

      const nextTabIndex = prevPageData.length + 1;

      const existingPageIds = prevPageData.map((page) => page.pageId);

      const availablePageIds = Array.from({ length: 5 }, (_, index) => index + 2).filter(
        (pageId) => !existingPageIds.includes(pageId)
      );

      const smallestAvailablePageId = Math.min(...availablePageIds);

      const newPage = {
        id: Math.random(),
        pageName: `Page ${smallestAvailablePageId}`,
        pageId: smallestAvailablePageId,
        tabId: nextTabIndex,
      };

      const updatedPageList = [...prevPageData, newPage];

      state.pageData = updatedPageList;
    },
    handleOnRemoveTabPage(state) {
      const prevPageData = state.pageData;

      const deletedItemIndex = prevPageData.findIndex((page) => page.tabId === state.tabIndex);
      const filteredPage = prevPageData.filter((page) => page.tabId !== state.tabIndex);
      const updatedState = filteredPage.map((page, index) => {
        const rowCount = index + 1;
        return { ...page, tabId: rowCount };
      });

      const finalIndex = Math.max(deletedItemIndex, 0);

      state.tabIndex = finalIndex;
      state.pageData = updatedState;
    },
    handleOnUpdatePageTitleForTab(state, action: { payload: string }) {
      const prevPageData = state.pageData;
      const newPageTitle = action.payload;

      const updatedPageList = prevPageData.map((page) => {
        if (state.tabIndex === page.tabId) {
          return { ...page, pageName: newPageTitle };
        }
        return { ...page };
      });

      state.pageData = updatedPageList;
    },
    handleOnShiftPage(state, action: { payload: "left" | "right" }) {
      const prevPageData = state.pageData;
      const tabIndex = state.tabIndex;
      const value = action.payload;

      const findTabIndex = prevPageData.findIndex((page) => page.tabId === tabIndex);
      const RowIndex = prevPageData.find((page) => page.tabId === tabIndex);
      let filteredTabIndex = prevPageData.filter((page) => tabIndex !== page.tabId);

      if (!RowIndex) {
        console.log("connot find index");
      }

      if (RowIndex) {
        const startIndex = value === "left" ? findTabIndex - 1 : findTabIndex + 1;
        filteredTabIndex.splice(startIndex, 0, RowIndex);
      }

      const updatedState = filteredTabIndex.map((page, index) => {
        return { ...page, tabId: index + 1 };
      });

      const updatedTabIndex = value === "left" ? findTabIndex : findTabIndex + 2;

      state.tabIndex = updatedTabIndex;
      state.pageData = updatedState;
    },
  },
});

export const saleActions = saleSlice.actions;

export default saleSlice;
