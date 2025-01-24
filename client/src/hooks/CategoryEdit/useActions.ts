import { UseFormSetError, UseFormWatch } from "react-hook-form";
import { FormValuesCategory } from "../../screens/CategoryEdit/CategoryEdit";
import { categoryActions } from "../../store/category-slice";
import { itemActions } from "../../store/item-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { notificationProps } from "../material-ui/useSnackbar/useSnackbar";
import { storeProps } from "../../store";
import { convertToNumber } from "../../utils/typescriptHelpers";

type useActionsProps = (
  handleOpenSnackbar: ({ message, severity }: notificationProps) => void,
  setError: UseFormSetError<FormValuesCategory>,
  watch: UseFormWatch<FormValuesCategory>,
  handleOnCloseDialogAssignItems: () => void,
  handleOnOpenDialogAssignItems: () => void
) => {
  handleOnSaveAssignItems: () => void;
  handleSaveCategory: (data: FormValuesCategory) => void;
  handleOnDelete: () => void;
  handleOnCreateItem: (data: FormValuesCategory) => void;
  handleOnAssignItems: (data: FormValuesCategory) => void;
};

export const useActions: useActionsProps = (
  handleOpenSnackbar: ({ message, severity }: notificationProps) => void,
  setError: UseFormSetError<FormValuesCategory>,
  watch: UseFormWatch<FormValuesCategory>,
  handleOnCloseDialogAssignItems,
  handleOnOpenDialogAssignItems: () => void
) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemList = useSelector((state: storeProps) => state.item.itemList);
  const categoryList = useSelector((state: storeProps) => state.category.categoryList);

  const handleOnSaveAssignItems = () => {
    const categoryId = watch("id");

    const filterSelectedItemById = itemList
      .filter((item) => item.isSelected)
      .map((item) => item.id);

    const convertedCategortId = convertToNumber("string", categoryId);

    dispatch(
      itemActions.updateItemCategoryId({
        categoryId: convertedCategortId,
        itemList: filterSelectedItemById,
      })
    );

    handleOnCloseDialogAssignItems();
  };

  const handleOnAssignItems = (data: FormValuesCategory) => {
    const categoryName = watch("name");
    const categoryId = watch("id");

    const findCategoryById = categoryList.find((category) => category.id === categoryId);

    if (!findCategoryById?.id) {
      handleOpenSnackbar({ message: "Invalid category ID provided", severity: "error" });
      return;
    }

    const filterCategoryById = categoryList.filter(
      (category) => category.id !== categoryId && category.name === categoryName
    );

    if (filterCategoryById.length > 0) {
      setError("name", {
        type: "manual",
        message: "Category with this name already exists",
      });
      return;
    }

    const findIndexCategoryById = categoryList.findIndex((category) => category.id === categoryId);

    if (findIndexCategoryById < 0) {
      handleOpenSnackbar({ message: "Category index not found", severity: "error" });
      return;
    }

    const convertedCategortId = convertToNumber("string", findCategoryById.id);

    const updatedCategoryData = { ...data, id: convertedCategortId };

    dispatch(
      categoryActions.updateCategory({ indexId: findIndexCategoryById, data: updatedCategoryData })
    );

    dispatch(itemActions.updateCategorySelection(convertedCategortId));

    handleOnOpenDialogAssignItems();
  };

  const handleSaveCategory = (data: FormValuesCategory) => {
    const findCategoryById = categoryList.find((category) => category.id === data.id);
    const filterCategoryById = categoryList.filter(
      (category) => category.id !== data.id && category.name === data.name
    );
    const findIndexCategoryById = categoryList.findIndex((category) => category.id === data.id);

    if (!findCategoryById?.id) {
      handleOpenSnackbar({ message: "Invalid category ID provided", severity: "error" });
      return;
    }

    if (filterCategoryById.length > 0) {
      setError("name", {
        type: "manual",
        message: "Category with this name already exists",
      });
      return;
    }

    if (findIndexCategoryById < 0) {
      handleOpenSnackbar({ message: "Category index not found.", severity: "error" });
      return;
    }

    const convertedCategortId = convertToNumber("string", findCategoryById.id);

    const updatedCategoryData = { ...data, id: convertedCategortId };

    dispatch(
      categoryActions.updateCategory({ indexId: findIndexCategoryById, data: updatedCategoryData })
    );

    navigate("/item/category");
  };

  const handleOnDelete = () => {
    const categoryId = watch("id");

    const findCategoryById = categoryList.find((category) => category.id === categoryId);

    if (!findCategoryById) {
      handleOpenSnackbar({
        message: "Category with the provided ID was not found.",
        severity: "error",
      });
      return;
    }

    dispatch(categoryActions.deleteCategory(findCategoryById.id));
    navigate("/item/category");
  };

  const handleOnCreateItem = (data: FormValuesCategory) => {
    const findCategoryById = categoryList.find((category) => category.id === data.id);
    const filterCategoryById = categoryList.filter(
      (category) => category.id !== data.id && category.name === data.name
    );
    const findIndexCategoryById = categoryList.findIndex((category) => category.id === data.id);

    if (!findCategoryById?.id) {
      handleOpenSnackbar({ message: "Invalid category ID provided", severity: "error" });
      return;
    }

    if (filterCategoryById.length > 0) {
      setError("name", {
        type: "manual",
        message: "Category with this name already exists",
      });
      return;
    }

    if (findIndexCategoryById < 0) {
      handleOpenSnackbar({ message: "Category index not found.", severity: "error" });
      return;
    }

    const convertedCategortId = convertToNumber("string", findCategoryById.id);

    const updatedCategoryData = { ...data, id: convertedCategortId };

    dispatch(
      categoryActions.updateCategory({ indexId: findIndexCategoryById, data: updatedCategoryData })
    );

    const navigationState = {
      from: {
        newCategoryId: data.id,
        previousPath: location.pathname,
      },
    };

    navigate("/item/create", {
      state: navigationState,
    });
  };

  return {
    handleOnSaveAssignItems,
    handleSaveCategory,
    handleOnDelete,
    handleOnCreateItem,
    handleOnAssignItems,
  };
};
