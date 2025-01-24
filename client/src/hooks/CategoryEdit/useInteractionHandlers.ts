import React from "react";
import { UseFormSetValue } from "react-hook-form";
import { FormValuesCategory } from "../../screens/CategoryEdit/CategoryEdit";
import { itemActions } from "../../store/item-slice";
import { useDispatch } from "react-redux";
import { notificationProps } from "../material-ui/useSnackbar/useSnackbar";
import { convertToNumber } from "../../utils/typescriptHelpers";

type useInteractionHandlersProps = (
  setValue: UseFormSetValue<FormValuesCategory>,
  handleOpenSnackbar: ({ message, severity }: notificationProps) => void
) => {
  handleColorSelectionChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleOnClickSelect: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleOnChangeSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useInteractionHandlers: useInteractionHandlersProps = (
  setValue,
  handleOpenSnackbar
) => {
  const dispatch = useDispatch();

  const handleColorSelectionChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const colorId = event.currentTarget.getAttribute("data-color-id");

    if (!colorId) {
      handleOpenSnackbar({
        message: "'data-color-id' attribute is missing or undefined.",
        severity: "error",
      });
      return;
    }

    const convertColorId = convertToNumber("string", colorId);

    setValue("colorId", convertColorId);
  };

  const handleOnChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const itemId = event.target.getAttribute("data-id");

    if (!itemId) {
      handleOpenSnackbar({
        message: "'data-id' attribute is missing or undefined.",
        severity: "error",
      });
      return;
    }

    const convertedItemId = convertToNumber("string", itemId);

    dispatch(itemActions.updatedIsSelectedItem({ itemId: convertedItemId, isChecked: isChecked }));
  };

  const handleOnClickSelect = (event: React.MouseEvent<HTMLDivElement>) => {
    const itemId = event.currentTarget.getAttribute("data-id");

    if (!itemId) {
      handleOpenSnackbar({
        message: "'data-id' attribute is missing or undefined.",
        severity: "error",
      });
      return;
    }

    const convertedItemId = convertToNumber("string", itemId);

    dispatch(itemActions.updatedIsSelectedItem({ itemId: convertedItemId }));
  };

  return {
    handleColorSelectionChange,
    handleOnClickSelect,
    handleOnChangeSelect,
  };
};
