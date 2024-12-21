import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../store/category-slice";
import { UseFormSetError, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { FormValuesCategory } from "../../screens/CategoryCreate/CategoryCreate";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { storeProps } from "../../store";
import { itemActions } from "../../store/item-slice";
import { notificationProps } from "../material-ui/useSnackbar/useSnackbar";
import { convertToNumber } from "../../utils/typescriptHelpers";

type useActionsProps = (
  handleOnOpenDialogAssignItems: () => void,
  setError: UseFormSetError<FormValuesCategory>,
  watch: UseFormWatch<FormValuesCategory>,
  setValue: UseFormSetValue<FormValuesCategory>,
  handleOnCloseDialogAssignItems: () => void,
  handleOpenSnackbar: ({ message, severity }: notificationProps) => void
) => {
  buttonSaveRef: React.MutableRefObject<HTMLButtonElement | null>;
  handleOnSaveCategory: (data: FormValuesCategory) => void;
  handleOnAssignItems: (data: FormValuesCategory) => void;
  handleOnCreateItem: (data: FormValuesCategory) => void;
  handleOnSaveAssignItems: () => void;
};

export const useActions: useActionsProps = (
  handleOnOpenDialogAssignItems,
  setError,
  watch,
  setValue,
  handleOnCloseDialogAssignItems,
  handleOpenSnackbar
) => {
  const buttonSaveRef = useRef<HTMLButtonElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryList = useSelector((state: storeProps) => state.category.categoryList);
  const itemList = useSelector((state: storeProps) => state.item.itemList);

  const handleOnSaveCategory = (data: FormValuesCategory) => {
    const filterCategoryByCategoryName = categoryList.filter(
      (category) => category.name === data.name
    );

    if (filterCategoryByCategoryName.length > 0) {
      setError("name", {
        type: "manual",
        message: "Category with this name already exists",
      });
      return;
    }

    dispatch(categoryActions.addCategory(data));

    navigate("/item/category");
  };

  const handleOnAssignItems = (data: FormValuesCategory) => {
    const filterCategoryByCategoryName = categoryList.filter(
      (category) => category.name.toLowerCase() === data.name.toLowerCase()
    );

    if (filterCategoryByCategoryName.length > 0) {
      setError("name", {
        type: "manual",
        message: "Category with this name already exists",
      });
      return;
    }

    const nextAvailableCategoryId = categoryList.length + 1;

    const updatedCategoryData = { ...data, nextAvailableCategoryId };

    setValue("id", nextAvailableCategoryId);

    dispatch(categoryActions.addCategory(updatedCategoryData));

    dispatch(itemActions.updateCategorySelection(nextAvailableCategoryId));

    handleOnOpenDialogAssignItems();
  };

  const handleOnCreateItem = (data: FormValuesCategory) => {
    const filterCategoryByCategoryName = categoryList.filter(
      (category) => category.name.toLowerCase() === data.name.toLowerCase()
    );

    if (filterCategoryByCategoryName.length > 0) {
      setError("name", {
        type: "manual",
        message: "Category with this name already exists",
      });
      return;
    }

    const nextAvailableCategoryId = categoryList.length + 1;

    const updatedCategoryData = { ...data, id: nextAvailableCategoryId };

    const navigationState = {
      from: {
        newCategoryId: nextAvailableCategoryId,
        previousPath: location.pathname,
      },
    };

    dispatch(categoryActions.addCategory(updatedCategoryData));

    navigate("/item/create", {
      state: navigationState,
    });
  };

  const handleOnSaveAssignItems = () => {
    const categoryId = watch("id");

    if (!categoryId) {
      handleOpenSnackbar({ message: "Category ID is missing or undefined.", severity: "error" });
      return;
    }

    const filterIsSelectedItemById = itemList
      .filter((item) => item.isSelected)
      .map((item) => item.id);

    const converetedCategoryId = convertToNumber("string", categoryId);

    dispatch(
      itemActions.updateItemCategoryId({
        categoryId: converetedCategoryId,
        itemList: filterIsSelectedItemById,
      })
    );

    setValue("id", "");

    handleOnCloseDialogAssignItems();
  };

  return {
    buttonSaveRef,
    handleOnSaveCategory,
    handleOnAssignItems,
    handleOnCreateItem,
    handleOnSaveAssignItems,
  };
};
