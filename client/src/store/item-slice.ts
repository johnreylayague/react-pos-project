import { createSlice } from "@reduxjs/toolkit";
import assets from "../assets/assets";
import { FormValuesItem } from "../screens/ItemCreate/ItemCreate";
import { FormValuesItem as FormValuesEditItem } from "../screens/ItemEdit/ItemEdit";

const colorAndShape = assets.json.colorAndShapes;
const shapeData = assets.json.shapeData;
const colorData = assets.json.colorData;

export type itemDataListProps = {
  id: number;
  itemName: string;
  itemPrice: string;
  stock: number;
  imageSrc: string;
  selected: boolean;
};

export type categoryDataListProps = {
  id: number;
  categoryName: string;
};

export type itemListProps = {
  id: number;
  name: string;
  categoryId: number | string;
  soldby: string;
  price: string;
  cost: string;
  sku: string;
  barcode: string;
  trackstock: boolean;
  isSelected: boolean;
  representation: "colorAndShape" | "image";
  colorAndShapeImage: string;
  image: string;
  colorId: number | string;
  shapeId: number | string;
  instock: number;
};

export type initialItemState = {
  isShowSideBar: boolean;
  isSearch: boolean;
  isSelectionMode: boolean;
  isSelectionInProgress: boolean;
  itemList: itemListProps[];
  selectedCount: number;
  searchInputValue: string;
};

const itemSlice = createSlice({
  name: "item",
  initialState: {
    searchInputValue: "",
    isShowSideBar: false,
    isSearch: false,
    isSelectionMode: false,
    isSelectionInProgress: false,
    selectedCount: 0,
    itemList: [
      {
        id: 1,
        name: "Candy",
        price: "12.00",
        categoryId: "",
        soldby: "each",
        cost: "3.00",
        sku: "3",
        barcode: "123",
        colorAndShapeImage: assets.images.colorsAndShapes.Apple.Circle,
        image: "",
        trackstock: true,
        representation: "colorAndShape",
        instock: 1,
        colorId: 6,
        shapeId: 2,
        isSelected: false,
      },
      {
        id: 2,
        name: "Sugar",
        price: "24.00",
        categoryId: "",
        soldby: "weight",
        cost: "24.00",
        sku: "123",
        barcode: "123",
        colorAndShapeImage: assets.images.colorsAndShapes.DarkOrchid.Square,
        image: "",
        trackstock: false,
        representation: "colorAndShape",
        instock: 0,
        colorId: 8,
        shapeId: 1,
        isSelected: false,
      },
    ],
  } as initialItemState,
  reducers: {
    updateItemCategoryId: (
      state,
      action: { payload: { categoryId: number; itemList: number[] } }
    ) => {
      const prevItemList = state.itemList;
      const categoryId = action.payload.categoryId;
      const itemList = action.payload.itemList;

      state.itemList = prevItemList.map((item) => {
        if (itemList.includes(item.id)) {
          return { ...item, categoryId: categoryId };
        }
        return item;
      });
    },
    addIsSelectedItem: (state) => {
      state.itemList = state.itemList.map((item) => ({ ...item, isSelected: false }));
    },
    onChangeSearchInputValue: (state, action: { payload: string }) => {
      const payload = action.payload;
      state.searchInputValue = payload;
    },
    deleteSelectedItem: (state) => {
      state.itemList = state.itemList.filter((item) => !item.isSelected);
    },
    deleteItem: (state, action: { payload: string }) => {
      const payload = action.payload;

      const itemId = payload ? Number.parseInt(payload) : payload;

      if (typeof itemId === "number") {
        state.itemList = state.itemList.filter((item) => item.id !== itemId);
      }

      if (typeof itemId !== "number") {
        console.log("ItemId is not a number");
      }
    },
    updateItem: (state, action: { payload: FormValuesEditItem }) => {
      const payload = action.payload;
      const prevItemList = state.itemList;

      const findItemIdByIndex = prevItemList.findIndex((item) => item.id === payload.id);

      const convertPayloadId =
        typeof payload.id === "number" ? payload.id : Number.parseInt(payload.id);

      const findColorById = colorData.find((color) => color.id === payload.colorId);
      const findShapeById = shapeData.find((shape) => shape.id === payload.shapeId);
      const findColorAndShapeByIdAndShape = colorAndShape.find(
        (colorAndShape) =>
          colorAndShape.color === findColorById?.color &&
          colorAndShape.shape === findShapeById?.shape
      );
      const updatedImage = findColorAndShapeByIdAndShape ? findColorAndShapeByIdAndShape.image : "";

      const representation: "colorAndShape" | "image" = !payload.image ? "colorAndShape" : "image";

      const updatedItem: itemListProps = {
        ...payload,
        colorAndShapeImage: updatedImage,
        id: convertPayloadId,
        representation: representation,
        isSelected: false,
      };

      if (findItemIdByIndex !== -1) {
        state.itemList[findItemIdByIndex] = { ...updatedItem };
      }

      if (findItemIdByIndex === -1) {
        console.log("Connot findIndex on Item !");
      }
    },
    addItem: (state, action: { payload: FormValuesItem }) => {
      const payload = action.payload;
      const prevItemList = state.itemList;
      const newItemId = prevItemList.length + 1;

      const findColorById = colorData.find((color) => color.id === payload.colorId);
      const findShapeById = shapeData.find((shape) => shape.id === payload.shapeId);

      const findColorAndShapeByIdAndShape = colorAndShape.find(
        (colorAndShape) =>
          colorAndShape.color === findColorById?.color &&
          colorAndShape.shape === findShapeById?.shape
      );

      const updatedImage = findColorAndShapeByIdAndShape ? findColorAndShapeByIdAndShape.image : "";

      const representation: "colorAndShape" | "image" = !payload.image ? "colorAndShape" : "image";

      const newItem: itemListProps = {
        ...payload,
        id: newItemId,
        isSelected: false,
        colorAndShapeImage: updatedImage,
        representation: representation,
      };

      state.itemList.push(newItem);
    },
    closeDeleting: (state) => {
      state.isSelectionMode = false;
      state.isSelectionInProgress = false;
      state.itemList = state.itemList.map((item) => ({ ...item, isSelected: false }));
      state.selectedCount = 0;
      state.isSearch = false;
    },
    toggleIsSearch(state, action: { payload: boolean }) {
      state.isSearch = action.payload;
    },
    toggleSideBar(state, action: { payload: boolean }) {
      state.isShowSideBar = action.payload;
    },
    selectionMode(state, action: { payload: { itemId: number; isSelected: boolean } }) {
      const prevIsSelectionInProgress = state.isSelectionInProgress;

      state.isSelectionInProgress = state.isSelectionMode;

      if (prevIsSelectionInProgress && state.isSelectionMode) {
        const { itemId, isSelected } = action.payload;

        const updatedItemData = state.itemList.map((item) => {
          if (item.id === itemId) {
            return { ...item, isSelected: isSelected };
          } else {
            return { ...item };
          }
        });

        const selectedItemCount = updatedItemData.filter((item) => item.isSelected).length;
        const hasSelectedItems = selectedItemCount > 0;

        state.isSelectionMode = hasSelectedItems;
        state.isSelectionInProgress = hasSelectedItems;
        state.itemList = updatedItemData;
        state.selectedCount = selectedItemCount;
      }
    },
    toggleSelection(state, action: { payload: { itemId: number; isSelected: boolean } }) {
      const { itemId, isSelected } = action.payload;

      const updatedItemData = state.itemList.map((item) => {
        if (item.id === itemId) {
          return { ...item, isSelected: isSelected };
        } else {
          return { ...item };
        }
      });

      const selectedItemCount = updatedItemData.filter((item) => item.isSelected).length;
      const hasSelectedItems = selectedItemCount > 0;

      state.isSelectionMode = hasSelectedItems;
      state.itemList = updatedItemData;
      state.selectedCount = selectedItemCount;
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice;
