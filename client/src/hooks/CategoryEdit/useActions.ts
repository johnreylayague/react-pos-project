import { UseFormWatch } from "react-hook-form";
import { FormValuesCategory } from "../../screens/CategoryEdit/CategoryEdit";
import { categoryActions, categoryList } from "../../store/category-slice";
import { itemActions, itemListProps } from "../../store/item-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const useActions = (
  watch: UseFormWatch<FormValuesCategory>,
  handleOnOpenDialogAssignItems: () => void,
  selectedItemList: itemListProps[],
  categoryList: categoryList[],
  params: Partial<{
    categoryId: string;
  }>
) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnSaveAssignItems = () => {
    const categoryName = watch("name");
    const findIsSelectedItem = selectedItemList
      .filter((item) => item.isSelected)
      .map((item) => item.id);
    const findCategoryName = categoryList.find((category) => category.name === categoryName);

    if (findCategoryName?.id) {
      dispatch(
        itemActions.updateItemCategoryId({
          categoryId: findCategoryName?.id,
          itemList: findIsSelectedItem,
        })
      );
    }

    if (!findCategoryName?.id) {
      console.log("categoryName not found!");
    }

    handleOnOpenDialogAssignItems();
  };

  const handleOnSave = (data: FormValuesCategory) => {
    const convertedCategoryId =
      typeof params.categoryId === "string"
        ? Number.parseFloat(params.categoryId)
        : params.categoryId;

    if (convertedCategoryId) {
      dispatch(categoryActions.updateCategory({ categoryId: convertedCategoryId, data: data }));
      navigate("/item/category");
    }
  };

  const handleOnDelete = () => {
    const convertedCategoryId =
      typeof params.categoryId === "string"
        ? Number.parseFloat(params.categoryId)
        : params.categoryId;

    if (convertedCategoryId) {
      dispatch(categoryActions.deleteCategory(convertedCategoryId));
      navigate("/item/category");
    }
  };

  return { handleOnSaveAssignItems, handleOnSave, handleOnDelete };
};
