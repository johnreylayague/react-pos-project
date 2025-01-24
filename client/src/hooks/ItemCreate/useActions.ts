import { FormValuesCategory, FormValuesItem } from "../../screens/ItemCreate/FormValues";
import { useNavigate } from "react-router-dom";
import { itemActions } from "../../store/item-slice";
import { categoryActions } from "../../store/category-slice";
import assets from "../../assets/assets";
import { UseFormReset, UseFormSetError, UseFormSetValue } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import { notificationProps } from "../material-ui/useSnackbar/useSnackbar";

const colorData = assets.json.colorData;

type useActionsProps = (
  etValueItem: UseFormSetValue<FormValuesItem>,
  isBelowSmallScreen: boolean,
  onCloseDialogCreateCategory: () => void,
  resetCategory: UseFormReset<FormValuesCategory>,
  handleOpenSnackbar: ({ message, severity }: notificationProps) => void,
  setErrorItem: UseFormSetError<FormValuesItem>
) => {
  handleOnSubmitCategory: (data: FormValuesCategory) => void;
  handleOnSubmitItem: (data: FormValuesItem) => void;
};

export const useActions: useActionsProps = (
  setValueItem,
  isBelowSmallScreen,
  onCloseDialogCreateCategory,
  resetCategory,
  handleOpenSnackbar,
  setErrorItem
) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryList = useSelector((state: storeProps) => state.category.categoryList);
  const itemList = useSelector((state: storeProps) => state.item.itemList);

  const itemRedirectPath = isBelowSmallScreen ? "/item/index" : "/item";

  const handleOnSubmitCategory = (data: FormValuesCategory) => {
    const findColorByIsDefault = colorData.find((color) => color.isDefault);

    if (!findColorByIsDefault) {
      handleOpenSnackbar({
        message: "No default color found. Please ensure a default color is selected",
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
    const filterItemByName = itemList.filter((item) =>
      item.name.toLowerCase().includes(data.name.toLowerCase())
    );

    if (filterItemByName.length !== 0) {
      setErrorItem("name", { type: "manual", message: "Item with this name already exists" });
      return;
    }

    dispatch(itemActions.addItem(data));

    navigate(itemRedirectPath);
  };

  return { handleOnSubmitCategory, handleOnSubmitItem };
};
