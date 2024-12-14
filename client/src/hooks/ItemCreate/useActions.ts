import { SelectChangeEvent } from "@mui/material";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import React from "react";
import { ControllerRenderProps, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { itemActions } from "../../store/item-slice";
import { FormValuesItem, FormValuesCategory } from "../../screens/ItemCreate/ItemCreate";
import { NavigateFunction } from "react-router-dom";

export const useActions = (
  setValueItem: UseFormSetValue<FormValuesItem>,
  navigate: NavigateFunction,
  dispatch: Dispatch<UnknownAction>,
  isBelowSmallScreen: boolean
) => {
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
    field: ControllerRenderProps<FormValuesItem, "category">,
    handleOpenDialog: () => void
  ) => {
    if (event.target.value === "addCategory") {
      handleOpenDialog();
      return;
    }

    field.onChange(event);
  };

  const handleOnSubmitItem = (data: FormValuesItem) => {
    dispatch(itemActions.addItem(data));
    navigate(isBelowSmallScreen ? "/item/index" : "/item");
  };

  const handleOnSubmitCategory = (data: FormValuesCategory) => {
    console.log(data);
  };

  return {
    handleSelectChangeColor,
    handleSelectChangeShape,
    handleCategoryChange,
    handleOnSubmitItem,
    handleOnSubmitCategory,
  };
};
