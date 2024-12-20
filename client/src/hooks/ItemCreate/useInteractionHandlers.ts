import React, { useEffect } from "react";
import { SelectChangeEvent } from "@mui/material";
import { ControllerRenderProps, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { FormValuesItem } from "../../screens/ItemCreate/ItemCreate";

export const useInteractionHandlers = (
  setValueItem: UseFormSetValue<FormValuesItem>,
  watchItem: UseFormWatch<FormValuesItem>,
  onOpenDialogCreateCategory: () => void
) => {
  useEffect(() => {
    if (!watchItem("trackstock")) {
      setValueItem("instock", 0);
    }
  }, [watchItem("trackstock")]);

  const handleSelectChangeColor = (event: React.MouseEvent<HTMLButtonElement>) => {
    const colorId = event.currentTarget.getAttribute("data-color-id");

    if (colorId) {
      const convertColorId = Number.parseInt(colorId);

      setValueItem("colorId", convertColorId);
    }

    if (!colorId) {
      console.log("colorId does not exist");
    }
  };

  const handleSelectChangeShape = (event: React.MouseEvent<HTMLButtonElement>) => {
    const shapeId = event.currentTarget.getAttribute("data-shape-id");

    if (shapeId) {
      const convertShapeId = Number.parseInt(shapeId);
      setValueItem("shapeId", convertShapeId);
    }

    if (!shapeId) {
      console.log("shapeId does not exist");
    }
  };

  const handleCategoryChange = (
    event: SelectChangeEvent<unknown>,
    field: ControllerRenderProps<FormValuesItem, "categoryId">
  ) => {
    if (event.target.value === "addCategory") {
      onOpenDialogCreateCategory();
      return;
    }

    field.onChange(event);
  };

  return {
    handleCategoryChange,
    handleSelectChangeShape,
    handleSelectChangeColor,
  };
};
