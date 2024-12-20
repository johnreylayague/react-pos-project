import { FormValuesCategory, FormValuesItem } from "../../screens/ItemCreate/ItemCreate";
import { NavigateFunction } from "react-router-dom";
import { UnknownAction, Dispatch } from "@reduxjs/toolkit";
import { itemActions } from "../../store/item-slice";
import { categoryActions } from "../../store/category-slice";
import assets from "../../assets/assets";
import { UseFormReset, UseFormSetValue } from "react-hook-form";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";

const colorData = assets.json.colorData;

export const useActions = (
  setValueItem: UseFormSetValue<FormValuesItem>,
  navigate: NavigateFunction,
  dispatch: Dispatch<UnknownAction>,
  isBelowSmallScreen: boolean,
  onCloseDialogCreateCategory: () => void,
  resetCategory: UseFormReset<FormValuesCategory>
) => {
  const categoryList = useSelector((state: storeProps) => state.category.categoryList);

  const itemRedirectPath = isBelowSmallScreen ? "/item/index" : "/item";

  const handleOnSubmitCategory = (data: FormValuesCategory) => {
    const findColorByIsDefault = colorData.find((color) => color.isDefault);

    if (!findColorByIsDefault) {
      console.log("findColorByIsDefault result not found.");
      return;
    }

    const newCategoryId = categoryList.length + 1;

    dispatch(
      categoryActions.addItemCategory({
        id: newCategoryId,
        name: data.name,
        colorId: findColorByIsDefault.id,
      })
    );
    resetCategory();
    setValueItem("categoryId", newCategoryId);
    onCloseDialogCreateCategory();
  };

  const handleOnSubmitItem = (data: FormValuesItem) => {
    dispatch(itemActions.addItem(data));
    navigate(itemRedirectPath);
  };

  return { handleOnSubmitCategory, handleOnSubmitItem };
};
