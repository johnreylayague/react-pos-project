import { createSlice } from "@reduxjs/toolkit";
import assets from "../assets/assets";

const menuDataList = [
  { id: 1, title: "Items", link: "/item/index", icon: "lists" },
  { id: 2, title: "Categories", link: "/item/category", icon: "content_copy" },
];

const colorsDataList = [
  {
    id: 1,
    name: "",
    imageSrc: assets.images.colorsAndShapes.SoftPeach.Square,
    imgAlt: "SoftPeach Square",
    selected: true,
  },
  {
    id: 2,
    name: "",
    imageSrc: assets.images.colorsAndShapes.CoralRedCircle.Square,
    imgAlt: "CoralRedCircle Square",
    selected: false,
  },
  {
    id: 3,
    name: "",
    imageSrc: assets.images.colorsAndShapes.Razzmatazz.Square,
    imgAlt: "Razzmatazz Square",
    selected: false,
  },
  {
    id: 4,
    name: "",
    imageSrc: assets.images.colorsAndShapes.VividGamboge.Square,
    imgAlt: "VividGamboge Square",
    selected: false,
  },
  {
    id: 5,
    name: "",
    imageSrc: assets.images.colorsAndShapes.Pear.Square,
    imgAlt: "Pear Square",
    selected: false,
  },
  {
    id: 6,
    name: "",
    imageSrc: assets.images.colorsAndShapes.Apple.Square,
    imgAlt: "Apple Square",
    selected: false,
  },
  {
    id: 7,
    name: "",
    imageSrc: assets.images.colorsAndShapes.ButtonBlue.Square,
    imgAlt: "ButtonBlue Square",
    selected: false,
  },
  {
    id: 8,
    name: "",
    imageSrc: assets.images.colorsAndShapes.DarkOrchid.Square,
    imgAlt: "DarkOrchid Square",
    selected: false,
  },
];

const shapesDataList: ShapesDataProps[] = [
  {
    id: 1,
    name: "",
    imageSrc: assets.images.colorsAndShapes.SoftPeach.BorderSquare,
    shape: "square",
    imgAlt: "SoftPeach Square",
    selected: true,
  },
  {
    id: 2,
    name: "",
    imageSrc: assets.images.colorsAndShapes.SoftPeach.BorderCircle,
    shape: "circle",
    imgAlt: "CoralRedCircle Square",
    selected: false,
  },
  {
    id: 3,
    name: "",
    imageSrc: assets.images.colorsAndShapes.SoftPeach.BorderHexadecagon,
    shape: "circle",
    imgAlt: "Razzmatazz Square",
    selected: false,
  },
  {
    id: 4,
    name: "",
    imageSrc: assets.images.colorsAndShapes.SoftPeach.BorderOctagon,
    shape: "circle",
    imgAlt: "VividGamboge Square",
    selected: false,
  },
];

const itemDataList = [
  {
    id: 1,
    itemName: "item 1",
    itemPrice: "₱999,999.00",
    stock: 2,
    imageSrc: assets.images.colorsAndShapes.Apple.Circle,
    selected: false,
  },
  {
    id: 2,
    itemName: "item 2",
    itemPrice: "₱455.00",
    stock: 0,
    imageSrc: assets.images.colorsAndShapes.VividGamboge.Octagon,
    selected: false,
  },
  {
    id: 3,
    itemName: "item 3",
    itemPrice: "₱255.00",
    stock: 0,
    imageSrc: assets.images.colorsAndShapes.DarkOrchid.Hexadecagon,
    selected: false,
  },
  {
    id: 4,
    itemName: "item 4",
    itemPrice: "₱25.00",
    stock: 5,
    imageSrc: assets.images.colorsAndShapes.Razzmatazz.Square,
    selected: false,
  },
];

const categoryDataList = [
  { id: 1, categoryName: "Category 1" },
  { id: 2, categoryName: "Category 2" },
  { id: 3, categoryName: "Category 3" },
  { id: 4, categoryName: "Category 4" },
];

type menuDataListProps = {
  id: number;
  title: string;
  link: string;
  icon: string;
};

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

export type ColorDataProps = {
  id: number;
  name: string;
  imageSrc: string;
  imgAlt: string;
  selected: boolean;
};

export type ShapesDataProps = {
  id: number;
  name: string;
  imageSrc: string;
  shape: "square" | "circle";
  imgAlt: string;
  selected: boolean;
};

export type initialItemState = {
  isShowSideBar: boolean;
  isSetupItem: boolean;
  isSearch: boolean;
  isSelectionMode: boolean;
  isSelectionInProgress: boolean;
  menuData: menuDataListProps[];
  itemData: itemDataListProps[];
  categoryData: categoryDataListProps[];
  selectedCount: number;
  colorData: ColorDataProps[];
  shapeData: ShapesDataProps[];
};

const initialState: initialItemState = {
  isShowSideBar: false,
  isSetupItem: false,
  isSearch: false,
  isSelectionMode: false,
  isSelectionInProgress: false,
  menuData: menuDataList,
  itemData: itemDataList,
  categoryData: categoryDataList,
  selectedCount: 0,
  colorData: colorsDataList,
  shapeData: shapesDataList,
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    selectColorPicker: (state, action: { payload: { colorId: number } }) => {
      const { colorId } = action.payload;

      const updatedColorData = state.colorData.map((color) => {
        if (color.id === colorId) {
          return { ...color, selected: true };
        } else {
          return { ...color, selected: false };
        }
      });

      state.colorData = updatedColorData;
    },
    selectShapePicker: (state, action: { payload: { shapeId: number } }) => {
      const { shapeId } = action.payload;

      const updatedShapeData = state.shapeData.map((shape) => {
        if (shape.id === shapeId) {
          return { ...shape, selected: true };
        } else {
          return { ...shape, selected: false };
        }
      });

      state.shapeData = updatedShapeData;
    },
    closeDeleting: (state) => {
      state.isSelectionMode = false;
      state.isSelectionInProgress = false;
      state.itemData = itemDataList;
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

        const updatedItemData = state.itemData.map((item) => {
          if (item.id === itemId) {
            return { ...item, selected: isSelected };
          } else {
            return { ...item };
          }
        });

        const selectedItemCount = updatedItemData.filter((item) => item.selected).length;
        const hasSelectedItems = selectedItemCount > 0;

        state.isSelectionMode = hasSelectedItems;
        state.isSelectionInProgress = hasSelectedItems;
        state.itemData = updatedItemData;
        state.selectedCount = selectedItemCount;
      }
    },
    toggleSelection(state, action: { payload: { itemId: number; isSelected: boolean } }) {
      const { itemId, isSelected } = action.payload;

      const updatedItemData = state.itemData.map((item) => {
        if (item.id === itemId) {
          return { ...item, selected: isSelected };
        } else {
          return { ...item };
        }
      });

      const selectedItemCount = updatedItemData.filter((item) => item.selected).length;
      const hasSelectedItems = selectedItemCount > 0;

      state.isSelectionMode = hasSelectedItems;
      state.itemData = updatedItemData;
      state.selectedCount = selectedItemCount;
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice;
