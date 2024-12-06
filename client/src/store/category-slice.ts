import { createSlice } from "@reduxjs/toolkit";
import assets from "../assets/assets";

const categoryDataList = [
  {
    id: 1,
    title: "Category 1",
    quantity: 0,
    img: assets.images.colorsAndShapes.Apple.Circle,
    selected: false,
  },
  {
    id: 2,
    title: "Category 2",
    quantity: 3,
    img: assets.images.colorsAndShapes.ButtonBlue.Square,
    selected: false,
  },
  {
    id: 3,
    title: "Category 3",
    quantity: 13,
    img: assets.images.colorsAndShapes.CoralRedCircle.Circle,
    selected: false,
  },
  {
    id: 4,
    title: "Category 4",
    quantity: 5,
    img: assets.images.colorsAndShapes.Razzmatazz.Octagon,
    selected: false,
  },
  {
    id: 5,
    title: "Category 5",
    quantity: 1,
    img: assets.images.colorsAndShapes.Razzmatazz.Hexadecagon,
    selected: false,
  },
  // {
  //   id: 6,
  //   title: "Item1",
  //   quantity: 1,
  //   img: assets.images.colorsAndShapes.Razzmatazz.Circle,
  //   selected: false,
  // },
  // {
  //   id: 7,
  //   title: "Item1",
  //   quantity: 1,
  //   img: assets.images.colorsAndShapes.Razzmatazz.Circle,
  //   selected: false,
  // },
  // {
  //   id: 8,
  //   title: "Item1",
  //   quantity: 1,
  //   img: assets.images.colorsAndShapes.Razzmatazz.Circle,
  //   selected: false,
  // },
  // {
  //   id: 9,
  //   title: "Item1",
  //   quantity: 1,
  //   img: assets.images.colorsAndShapes.Razzmatazz.Circle,
  //   selected: false,
  // },
  // {
  //   id: 10,
  //   title: "Item1",
  //   quantity: 1,
  //   img: assets.images.colorsAndShapes.Razzmatazz.Circle,
  //   selected: false,
  // },
  // {
  //   id: 11,
  //   title: "Item1",
  //   quantity: 1,
  //   img: assets.images.colorsAndShapes.Razzmatazz.Circle,
  //   selected: false,
  // },
  // {
  //   id: 12,
  //   title: "Item1",
  //   quantity: 1,
  //   img: assets.images.colorsAndShapes.Razzmatazz.Circle,
  //   selected: false,
  // },
  // {
  //   id: 13,
  //   title: "Item1",
  //   quantity: 1,
  //   img: assets.images.colorsAndShapes.Razzmatazz.Circle,
  //   selected: false,
  // },
  // {
  //   id: 14,
  //   title: "Item1",
  //   quantity: 1,
  //   img: assets.images.colorsAndShapes.Razzmatazz.Circle,
  //   selected: false,
  // },
  // {
  //   id: 15,
  //   title: "Item1",
  //   quantity: 1,
  //   img: assets.images.colorsAndShapes.Razzmatazz.Circle,
  //   selected: false,
  // },
  // {
  //   id: 16,
  //   title: "Item1",
  //   quantity: 1,
  //   img: assets.images.colorsAndShapes.Razzmatazz.Circle,
  //   selected: false,
  // },
  // {
  //   id: 17,
  //   title: "Item1",
  //   quantity: 1,
  //   img: assets.images.colorsAndShapes.Razzmatazz.Circle,
  //   selected: false,
  // },
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

export type categoryProps = {
  id: number;
  title: string;
  quantity: number;
  img: string;
  selected: boolean;
};

export type categoryColorDataProps = {
  id: number;
  name: string;
  imageSrc: string;
  imgAlt: string;
  selected: boolean;
};

export type initialCategoryState = {
  isDeleting: boolean;
  isSelectionInProgress: boolean;
  isSelectionMode: boolean;
  categoryData: categoryProps[];
  colorData: categoryColorDataProps[];
  selectedCount: number;
  isSelecting: boolean;
  isSearch: boolean;
  searchValue: string;
};

const toggleSelected = (
  state: initialCategoryState,
  action: { payload: { categoryId: number; selected: boolean } }
) => {
  const { categoryId, selected } = action.payload;

  const updatedCategoryData = state.categoryData.map((category) => {
    if (category.id === categoryId) {
      return { ...category, selected };
    } else {
      return { ...category };
    }
  });

  const count = updatedCategoryData.filter((category) => category.selected).length;
  const updatedIsDeleting = count === 0 ? false : true;

  state.isDeleting = updatedIsDeleting;
  state.categoryData = updatedCategoryData;
  state.selectedCount = count;
};

const initialState: initialCategoryState = {
  isSelectionMode: false,
  isSelectionInProgress: false,
  categoryData: categoryDataList,
  selectedCount: 0,
  colorData: colorsDataList,
  isDeleting: false,
  isSelecting: false,
  isSearch: false,
  searchValue: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    searchInputChange: (state, action) => {
      state.searchValue = action.payload;
    },
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

    categoryIsSearch: (state, action) => {
      state.isSearch = action.payload;
    },
    closeDeleting: (state) => {
      state.isSelectionMode = false;
      state.isSelectionInProgress = false;

      state.isDeleting = false;
      state.categoryData = categoryDataList;
      state.selectedCount = 0;
      state.isSelecting = false;
      state.isSearch = false;
    },
    newToggleSelected: (state, action) => toggleSelected(state, action),
    selectMode: (state, action) => {
      const prevIsSelecting = state.isSelecting;

      state.isSelecting = state.isDeleting;

      if (prevIsSelecting && state.isDeleting) {
        toggleSelected(state, action);
      }
    },
    selectionMode(state, action: { payload: { itemId: number; isSelected: boolean } }) {
      const prevIsSelectionInProgress = state.isSelectionInProgress;

      state.isSelectionInProgress = state.isSelectionMode;

      if (prevIsSelectionInProgress && state.isSelectionMode) {
        const { itemId, isSelected } = action.payload;

        const updatedItemData = state.categoryData.map((item) => {
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
        state.categoryData = updatedItemData;
        state.selectedCount = selectedItemCount;
      }
    },
    toggleSelection(state, action: { payload: { itemId: number; isSelected: boolean } }) {
      const { itemId, isSelected } = action.payload;

      const updatedItemData = state.categoryData.map((item) => {
        if (item.id === itemId) {
          return { ...item, selected: isSelected };
        } else {
          return { ...item };
        }
      });

      const selectedItemCount = updatedItemData.filter((item) => item.selected).length;
      const hasSelectedItems = selectedItemCount > 0;

      state.isSelectionMode = hasSelectedItems;
      state.categoryData = updatedItemData;
      state.selectedCount = selectedItemCount;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
