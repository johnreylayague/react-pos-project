import { useDispatch } from "react-redux";
import { itemActions, itemListProps } from "../../store/item-slice";
import { UseFormWatch } from "react-hook-form";
import { FormValuesCategory } from "../../screens/CategoryCreate/CategoryCreate";
import { categoryList } from "../../store/category-slice";
import { useNavigate } from "react-router-dom";

export const useAssignItemsActions = (
  selectedItemList: itemListProps[],
  categoryList: categoryList[],
  watch: UseFormWatch<FormValuesCategory>,
  setSelectedItemList: React.Dispatch<React.SetStateAction<itemListProps[]>>,
  handleOnCloseDialogAssignItems: () => void
) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSaveAction = () => {
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

    handleOnCloseDialogAssignItems();
    navigate("/item/category");
  };

  const handleOnChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const id = event.target.getAttribute("data-id");

    if (id) {
      const convertedId = Number.parseInt(id);

      setSelectedItemList((prevState) => {
        return prevState.map((item) =>
          convertedId === item.id ? { ...item, isSelected: isChecked } : item
        );
      });
    }
  };

  const handleOnClickSelect = (event: React.MouseEvent<HTMLDivElement>) => {
    const dataId = event.currentTarget.getAttribute("data-id");

    if (dataId) {
      const convertedId = dataId ? Number.parseInt(dataId) : 0;

      setSelectedItemList((prevState) => {
        const updatedItemList = prevState.map((item) => {
          if (convertedId === item.id) {
            return { ...item, isSelected: !item.isSelected };
          }
          return item;
        });

        return updatedItemList;
      });
    }
  };

  return { handleSaveAction, handleOnChangeSelect, handleOnClickSelect };
};
