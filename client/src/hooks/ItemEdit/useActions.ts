import { FormValuesCategory, FormValuesItem } from "../../screens/ItemEdit/ItemEditFormValues";
import { NavigateFunction } from "react-router-dom";
import { UnknownAction, Dispatch } from "@reduxjs/toolkit";
import { itemActions } from "../../store/item-slice";
import { categoryActions } from "../../store/category-slice";
import assets from "../../assets/assets";
import { UseFormReset, UseFormSetError, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import { notificationProps } from "../material-ui/useSnackbar/useSnackbar";
import { convertToNumber } from "../../utils/typescriptHelpers";

const colorData = assets.json.colorData;

export const useActions = (
  watchItem: UseFormWatch<FormValuesItem>,
  setValueItem: UseFormSetValue<FormValuesItem>,
  navigate: NavigateFunction,
  dispatch: Dispatch<UnknownAction>,
  isBelowSmallScreen: boolean,
  onCloseDialogCreateCategory: () => void,
  resetCategory: UseFormReset<FormValuesCategory>,
  handleOpenSnackbar: ({ message, severity }: notificationProps) => void,
  setErrorItem: UseFormSetError<FormValuesItem>
) => {
  const categoryList = useSelector((state: storeProps) => state.category.categoryList);
  const itemList = useSelector((state: storeProps) => state.item.itemList);
  const itemRedirectPath = isBelowSmallScreen ? "/item/index" : "/item";

  const handleOnSubmitCategory = (data: FormValuesCategory) => {
    const findColorByIsDefault = colorData.find((color) => color.isDefault);

    if (!findColorByIsDefault) {
      handleOpenSnackbar({
        message: "No default color is set. Please select or designate a default color.",
        severity: "error",
      });
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
    const filterItemByName = itemList.filter(
      (item) => item.id !== data.id && item.name.toLowerCase() === data.name.toLowerCase()
    );

    if (filterItemByName.length !== 0) {
      setErrorItem("name", { type: "manual", message: "Item with this name already exists" });
      return;
    }

    const filterItemById = itemList.filter((item) => item.id === data.id);

    if (filterItemById.length === 0) {
      handleOpenSnackbar({ message: "Invalid Item ID provided", severity: "error" });
      return;
    }

    const findItemIdByIndex = itemList.findIndex((item) => item.id === data.id);

    if (findItemIdByIndex < 0) {
      handleOpenSnackbar({ message: "Item index not found", severity: "error" });
      return;
    }

    dispatch(itemActions.updateItem(data));

    navigate(itemRedirectPath);
  };

  const handleOnDeleteItem = () => {
    const itemId = watchItem("id");

    const filterItemById = itemList.filter((item) => item.id === itemId);

    if (filterItemById.length === 0) {
      handleOpenSnackbar({ message: "Invalid Item ID provided", severity: "error" });
      return;
    }

    const converetedItemId = convertToNumber("string", itemId);

    dispatch(itemActions.deleteItem(converetedItemId));

    navigate("/item");
  };

  return { handleOnSubmitCategory, handleOnSubmitItem, handleOnDeleteItem };
};
