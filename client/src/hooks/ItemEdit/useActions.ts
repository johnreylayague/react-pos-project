import { FormValuesCategory, FormValuesItem } from "../../screens/ItemEdit/ItemEdit";
import { NavigateFunction } from "react-router-dom";
import { UnknownAction, Dispatch } from "@reduxjs/toolkit";
import { itemActions } from "../../store/item-slice";

export const useActions = (
  navigate: NavigateFunction,
  dispatch: Dispatch<UnknownAction>,
  isBelowSmallScreen: boolean,
  params: Readonly<Partial<{ itemId: string }>>
) => {
  const itemRedirectPath = isBelowSmallScreen ? "/item/index" : "/item";

  const handleOnSubmitCategory = (data: FormValuesCategory) => {
    console.log(data);
  };

  const handleOnSubmitItem = (data: FormValuesItem) => {
    dispatch(itemActions.updateItem(data));
    navigate(itemRedirectPath);
  };

  const handleOnDeleteItem = () => {
    const itemId = params.itemId;

    if (itemId) {
      dispatch(itemActions.deleteItem(itemId));
      navigate(itemRedirectPath);
    }

    if (!itemId) {
      console.log("Item Id does not exist !");
    }
  };

  return { handleOnSubmitCategory, handleOnSubmitItem, handleOnDeleteItem };
};
