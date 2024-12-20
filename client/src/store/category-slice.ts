import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormValuesCategory } from "../screens/CategoryCreate/CategoryCreate";

export type categoryList = {
  id: number;
  name: string;
  colorId: number | string;
  isSelected: boolean;
};

export type initialCategoryState = {
  isDeleting: boolean;
  isSelectionInProgress: boolean;
  isSelectionMode: boolean;
  selectedCount: number;
  isSelecting: boolean;
  searchInputValue: string;
  categoryList: categoryList[];
};

const categorySlice = createSlice({
  name: "category",
  initialState: {
    searchInputValue: "",
    isSelectionMode: false,
    isSelectionInProgress: false,
    selectedCount: 0,
    categoryList: [
      { id: 1, name: "Category 1", colorId: 3, isSelected: false },
      { id: 2, name: "Category 2", colorId: 4, isSelected: false },
      { id: 3, name: "Category 3", colorId: 2, isSelected: false },
    ],
  } as initialCategoryState,
  reducers: {
    updateCategory: (
      state,
      action: { payload: { categoryId: number; data: FormValuesCategory } }
    ) => {
      const categoryId = action.payload.categoryId;
      const payload = action.payload.data;

      const findCategoryIndex = state.categoryList.findIndex(
        (category) => category.id === categoryId
      );

      if (findCategoryIndex === -1) {
        console.log("Connot findIndex on Item !");
      }

      if (findCategoryIndex !== -1) {
        state.categoryList[findCategoryIndex] = {
          ...state.categoryList[findCategoryIndex],
          ...payload,
        };
      }
    },
    deleteCategory: (state, action: { payload: number }) => {
      const payload = action.payload;
      const prevStateCategory = state.categoryList;

      state.categoryList = prevStateCategory.filter((category) => category.id !== payload);
    },
    addCategory: (state, action: PayloadAction<FormValuesCategory>) => {
      const payload = action.payload;
      const newCategoryId = state.categoryList.length + 1;

      state.categoryList.push({ id: newCategoryId, isSelected: false, ...payload });
    },
    addItemCategory: (state, action: PayloadAction<FormValuesCategory & { id: number }>) => {
      const payload = action.payload;
      state.categoryList.push({ isSelected: false, ...payload });
    },
    onChangeSearchInputValue: (state, action) => {
      const payload = action.payload;
      state.searchInputValue = payload;
    },
    deleteSelectedItem: (state) => {
      state.categoryList = state.categoryList.filter((item) => !item.isSelected);
    },
    closeDeleting: (state) => {
      state.isSelectionMode = false;
      state.isSelectionInProgress = false;
      state.categoryList = state.categoryList.map((item) => ({ ...item, isSelected: false }));
      state.selectedCount = 0;
    },
    selectionMode(state, action: { payload: { categoryId: number; isSelected: boolean } }) {
      const prevIsSelectionInProgress = state.isSelectionInProgress;

      state.isSelectionInProgress = state.isSelectionMode;

      if (prevIsSelectionInProgress && state.isSelectionMode) {
        const { categoryId, isSelected } = action.payload;

        const updatedItemData = state.categoryList.map((category) => {
          if (category.id === categoryId) {
            return { ...category, isSelected: isSelected };
          }
          return { ...category };
        });

        const selectedItemCount = updatedItemData.filter((category) => category.isSelected).length;
        const hasSelectedItems = selectedItemCount > 0;

        state.isSelectionMode = hasSelectedItems;
        state.isSelectionInProgress = hasSelectedItems;
        state.categoryList = updatedItemData;
        state.selectedCount = selectedItemCount;
      }
    },
    toggleSelection(state, action: { payload: { categoryId: number; isSelected: boolean } }) {
      const { categoryId, isSelected } = action.payload;

      const updatedItemData = state.categoryList.map((category) => {
        if (category.id === categoryId) {
          return { ...category, isSelected: isSelected };
        } else {
          return { ...category };
        }
      });

      const selectedItemCount = updatedItemData.filter((item) => item.isSelected).length;
      const hasSelectedItems = selectedItemCount > 0;

      state.isSelectionMode = hasSelectedItems;
      state.categoryList = updatedItemData;
      state.selectedCount = selectedItemCount;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
