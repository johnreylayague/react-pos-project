import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import assets from "../assets/assets";
import { FormValuesItem } from "../screens/ItemCreate/FormValues";
import { FormValuesItem as FormValuesEditItem } from "../screens/ItemEdit/ItemEditFormValues";

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
  sequenceId: number | string;
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
    selectedListId: "",
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
        sequenceId: 2,
        isSelected: false,
      },
      {
        id: 2,
        name: "Sugar",
        price: "24.00",
        categoryId: 1,
        soldby: "weight",
        cost: "24.00",
        sku: "123",
        barcode: "123",
        colorAndShapeImage: assets.images.colorsAndShapes.DarkOrchid.Square,
        image: "",
        trackstock: true,
        representation: "colorAndShape",
        instock: 5,
        colorId: 8,
        shapeId: 1,
        sequenceId: 5,
        isSelected: false,
      },
    ],
  } as initialItemState,
  reducers: {
    updateSelectedListId: (state, action: { payload: { itemId: number; sequenceId: number } }) => {
      const itemId = action.payload.itemId;
      const sequenceId = action.payload.sequenceId;

      const findItemById = state.itemList.find((item) => item.id === itemId);

      if (findItemById) {
        state.itemList.push({ ...findItemById, sequenceId: sequenceId });
      }
    },
    updateItemCategoryId: (
      state,
      action: PayloadAction<{ categoryId: number; itemList: number[] }>
    ) => {
      const prevItemList = state.itemList;
      const categoryId = action.payload.categoryId;
      const itemList = action.payload.itemList;

      state.itemList = prevItemList.map((item) =>
        itemList.includes(item.id) ? { ...item, categoryId: categoryId } : item
      );
    },
    updatedIsSelectedTrue: (state, action: { payload: number }) => {
      const itemId = action.payload;

      const updatedItemList = state.itemList.map((item) => ({
        ...(item.id === itemId ? { ...item, isSelected: true } : { ...item, isSelected: false }),
      }));

      state.itemList = updatedItemList;
    },
    addIsSelectedItem: (state) => {
      state.itemList = state.itemList.map((item) => ({ ...item, isSelected: false }));
    },
    updatedIsSelectedItemToFalse: (state) => {
      state.itemList = state.itemList.map((item) => ({ ...item, isSelected: false }));
    },
    updateCategorySelection: (state, action: { payload: number; type: string }) => {
      const categoryId = action.payload;

      state.itemList = state.itemList.map((item) =>
        item.categoryId === categoryId
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      );
    },
    updatedIsSelectedItem: (
      state,
      action: { payload: { itemId: number; isChecked?: boolean | undefined }; type: string }
    ) => {
      const itemId = action.payload.itemId;
      const isChecked = action.payload.isChecked;

      if (typeof isChecked !== "undefined") {
        state.itemList = state.itemList.map((item) =>
          itemId === item.id ? { ...item, isSelected: isChecked } : item
        );
        return;
      }

      state.itemList = state.itemList.map((item) =>
        itemId === item.id ? { ...item, isSelected: !item.isSelected } : item
      );
    },
    onChangeSearchInputValue: (state, action: { payload: string }) => {
      const payload = action.payload;
      state.searchInputValue = payload;
    },
    deleteSelectedItem: (state) => {
      state.itemList = state.itemList.filter((item) => !item.isSelected);
    },
    deleteItem: (state, action: { payload: number }) => {
      const itemId = action.payload;

      state.itemList = state.itemList.filter((item) => item.id !== itemId);
    },
    updateItem: (state, action: { payload: FormValuesEditItem }) => {
      const payload = action.payload;
      const prevItemList = state.itemList;

      const findColorById = colorData.find((color) => color.id === payload.colorId);
      const findShapeById = shapeData.find((shape) => shape.id === payload.shapeId);
      const findColorAndShapeByIdAndShape = colorAndShape.find(
        (colorAndShape) =>
          colorAndShape.color === findColorById?.color &&
          colorAndShape.shape === findShapeById?.shape
      );
      const updatedImage = findColorAndShapeByIdAndShape ? findColorAndShapeByIdAndShape.image : "";

      const representation: "colorAndShape" | "image" = !payload.image
        ? "colorAndShape"
        : payload.representation;

      const findItemIdByIndex = prevItemList.findIndex((item) => item.id === payload.id);

      const convertPayloadId =
        typeof payload.id === "number" ? payload.id : Number.parseInt(payload.id);

      state.itemList[findItemIdByIndex] = {
        ...payload,
        colorAndShapeImage: updatedImage,
        id: convertPayloadId,
        sequenceId: "",
        representation: representation,
        isSelected: false,
      };
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
        sequenceId: "",
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
