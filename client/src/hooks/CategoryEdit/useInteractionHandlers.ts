import React from "react";
import { UseFormSetValue } from "react-hook-form";
import { FormValuesCategory } from "../../screens/CategoryEdit/CategoryEdit";
import { itemListProps } from "../../store/item-slice";

export const useInteractionHandlers = (
  setValue: UseFormSetValue<FormValuesCategory>,
  handleOnOpenDialogAssignItems: () => void,
  setSelectedItemList: React.Dispatch<React.SetStateAction<itemListProps[]>>
) => {
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

  const handleOnAssignItems = () => {
    handleOnOpenDialogAssignItems();
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

  return {
    handleColorSelectionChange,
    handleOnAssignItems,
    handleOnClickSelect,
    handleOnChangeSelect,
  };
};
