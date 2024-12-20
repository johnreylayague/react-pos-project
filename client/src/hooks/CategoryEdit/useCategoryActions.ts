import { useDispatch } from "react-redux";
import { categoryActions, categoryList } from "../../store/category-slice";
import { UseFormSetError, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { FormValuesCategory } from "../../screens/CategoryCreate/CategoryCreate";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const useCategoryActions = (
  setValue: UseFormSetValue<FormValuesCategory>,
  handleOnOpenDialogAssignItems: () => void,
  setError: UseFormSetError<FormValuesCategory>,
  watch: UseFormWatch<FormValuesCategory>,
  categoryList: categoryList[]
) => {
  const buttonSaveRef = useRef<HTMLButtonElement | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSaveCategory = (data: FormValuesCategory) => {
    dispatch(categoryActions.addCategory(data));
    navigate("/item/category");
  };

  const handleColorSelectionChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const colorId = event.currentTarget.getAttribute("data-color-id");

    if (colorId) {
      const convertColorId = Number.parseInt(colorId);
      setValue("colorId", convertColorId);
    }

    if (!colorId) {
      console.log("colorId not found!");
    }
  };

  const handleOnAssignItems = (data: FormValuesCategory) => {
    const categoryName = watch("name");
    const findCategoryName = categoryList.filter(
      (category) => category.name.toLowerCase() === categoryName.toLowerCase()
    );

    if (findCategoryName.length === 0) {
      dispatch(categoryActions.addCategory(data));
      handleOnOpenDialogAssignItems();
    }

    if (findCategoryName.length >= 1) {
      setError("name", {
        type: "manual",
        message: "Category with this name already exists",
      });
    }
  };

  return {
    buttonSaveRef,
    handleOnSaveCategory,
    handleColorSelectionChange,
    handleOnAssignItems,
  };
};
