import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../store/category-slice";
import { storeProps } from "../../store";

export const useCategoryActions = () => {
  const dispatch = useDispatch();
  const colorData = useSelector((state: storeProps) => state.category.colorData);

  const handleOnSaveCategory = () => {
    console.log("Save Category");
  };

  const handleDeleteCategory = () => {
    console.log("Category deleted");
  };

  const handleColorSelectionChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const colorId = event.currentTarget.getAttribute("data-color-id");

    if (colorId) {
      const convertColorId = Number.parseInt(colorId);

      dispatch(
        categoryActions.selectColorPicker({
          colorId: convertColorId,
        })
      );
    }
  };

  return { colorData, handleDeleteCategory, handleOnSaveCategory, handleColorSelectionChange };
};
