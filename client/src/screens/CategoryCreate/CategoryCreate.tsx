import { GlobalStyles, Interpolation, Theme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderFormAction from "../../components/common/elements/Header/HeaderFormAction/HeaderFormAction";
import { categoryGlobalStyles } from "./CategoryGlobalStyles";
import OutlinedButton from "../../components/common/elements/Button/OutlinedButton/OutlinedButton";
import {
  ContainerStyled,
  StackStyled,
  FieldGroup,
  DividerStyled,
  ButtonActions,
  Form,
} from "./CategoryCreateStyles";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import DialogAssignItems from "./components/DialogAssignItems/DialogAssignItems";
import { useAssignItemsActions } from "../../hooks/CategoryEdit/useAssignItemsActions";
import { useCategoryActions } from "../../hooks/CategoryEdit/useCategoryActions";
import { Controller, useForm } from "react-hook-form";
import InputField from "../../components/common/elements/Input/InputField/InputField";
import assets from "../../assets/assets";
import { validationCategoryRules } from "./CategoryCreateValidationRules";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog";

const colorData = assets.json.colorData;

export type FormValuesCategory = {
  name: string;
  colorId: number | string;
};

type CreateCategoryProps = {};

const CreateCategory: React.FC<CreateCategoryProps> = (props) => {
  const {} = props;

  const itemList = useSelector((state: storeProps) => state.item.itemList);
  const categoryList = useSelector((state: storeProps) => state.category.categoryList);
  const [selectedItemList, setSelectedItemList] = useState(itemList);

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    setError,
    formState: { errors },
  } = useForm<FormValuesCategory>({
    defaultValues: {
      name: "",
      colorId: "",
    },
  });

  useEffect(() => {
    setSelectedItemList((prevState) => {
      const updatedItemList = prevState.map((item) => {
        return { ...item, isSelected: false };
      });

      return updatedItemList;
    });

    const findIsDefault = colorData.find((color) => color.isDefault);

    if (findIsDefault) {
      setValue("colorId", findIsDefault.id);
    }

    if (!findIsDefault) {
      console.log("ColorId does not exist!");
    }
  }, [setSelectedItemList, setValue]);

  const {
    isOpenDialog: isOpenDialogAssignItems,
    handleCloseDialog: handleOnCloseDialogAssignItems,
    handleOpenDialog: handleOnOpenDialogAssignItems,
  } = useDialog();

  const { handleSaveAction, handleOnChangeSelect, handleOnClickSelect } = useAssignItemsActions(
    selectedItemList,
    categoryList,
    watch,
    setSelectedItemList,
    handleOnCloseDialogAssignItems
  );

  const { handleColorSelectionChange, handleOnSaveCategory, handleOnAssignItems, buttonSaveRef } =
    useCategoryActions(setValue, handleOnOpenDialogAssignItems, setError, watch, categoryList);

  return (
    <>
      <GlobalStyles styles={categoryGlobalStyles as Interpolation<Theme>} />

      <HeaderFormAction
        ref={buttonSaveRef}
        title="Create Category"
        onNavigateBack="/item/category"
        onSave={handleSubmit(handleOnSaveCategory)}
      />

      <ContainerStyled maxWidth="md">
        <StackStyled spacing={3}>
          <Form>
            <FieldGroup spacing={4}>
              <Controller
                name="name"
                control={control}
                rules={validationCategoryRules.name}
                render={({ field }) => (
                  <InputField
                    inputProps={{ ...field }}
                    helperText={errors.name?.message}
                    isShowHelperText={!!errors.name?.message}
                    label="Category name"
                  />
                )}
              />

              <ColorPicker onChangeSelected={handleColorSelectionChange} watch={watch} />
            </FieldGroup>

            <DividerStyled />

            <ButtonActions>
              <OutlinedButton onClick={handleSubmit(handleOnAssignItems)}>
                ASSIGN ITEMS
              </OutlinedButton>
              <OutlinedButton
                component={Link}
                to="/item/create"
                state={{ from: location.pathname }}
              >
                CREATE ITEM
              </OutlinedButton>
            </ButtonActions>
          </Form>
        </StackStyled>
      </ContainerStyled>

      <DialogAssignItems
        onClickSelect={handleOnClickSelect}
        onChangeSelect={handleOnChangeSelect}
        selectedItemList={selectedItemList}
        open={isOpenDialogAssignItems}
        onClose={handleOnCloseDialogAssignItems}
        onSave={handleSaveAction}
      />
    </>
  );
};

export default CreateCategory;
