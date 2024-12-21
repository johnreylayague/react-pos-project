import { Alert, GlobalStyles, Interpolation, Snackbar, Theme } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import DialogAssignItems from "./components/DialogAssignItems/DialogAssignItems";
import { categoryGlobalStyles } from "./CategoryGlobalStyles";
import OutlinedButton from "../../components/common/elements/Button/OutlinedButton/OutlinedButton";
import {
  ButtonActions,
  FieldGroup,
  DividerStyled,
  Form,
  DeleteActionButton,
  DeleteIconStyled,
  ContainerStyled,
  StackStyled,
} from "./CategoryEditStyles";
import HeaderFormAction from "../../components/common/elements/Header/HeaderFormAction/HeaderFormAction.tsx";
import { Controller, useForm } from "react-hook-form";
import InputField from "../../components/common/elements/Input/InputField/InputField.tsx";
import { validationCategoryRules } from "./CategoryEditValidationRules.ts";
import { useSelector } from "react-redux";
import { storeProps } from "../../store/index.ts";
import { useInteractionHandlers } from "../../hooks/CategoryEdit/useInteractionHandlers.ts";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog.tsx";
import { useActions } from "../../hooks/CategoryEdit/useActions.ts";
import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog.tsx";
import { useSnackbar } from "../../hooks/material-ui/useSnackbar/useSnackbar.ts";
import { convertToNumber } from "../../utils/typescriptHelpers.ts";

export type FormValuesCategory = {
  id: number | string;
  name: string;
  colorId: number | string;
};

type CategoryEditProps = {};
const CategoryEdit: React.FC<CategoryEditProps> = (props) => {
  const {} = props;

  const params = useParams<{ categoryId: string }>();

  const categoryList = useSelector((state: storeProps) => state.category.categoryList);

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormValuesCategory>({
    defaultValues: {
      id: "",
      name: "",
      colorId: "",
    },
  });

  const { snackbar, handleCloseSnackbar, handleOpenSnackbar } = useSnackbar();

  useEffect(() => {
    const categoryId = convertToNumber("string", params.categoryId);
    const findCategoryById = categoryList.find((category) => category.id === categoryId);

    if (!findCategoryById) {
      handleOpenSnackbar({
        message: "Invalid category ID provided.",
        severity: "error",
      });
      return;
    }

    reset({
      id: findCategoryById.id,
      name: findCategoryById.name,
      colorId: findCategoryById.colorId,
    });
  }, [setValue]);

  const {
    isOpenDialog: isOpenDialogAssignItems,
    handleCloseDialog: handleOnCloseDialogAssignItems,
    handleOpenDialog: handleOnOpenDialogAssignItems,
  } = useDialog();

  const {
    isOpenDialog: isOpenDialogDelete,
    handleCloseDialog: handleCloseDialogDelete,
    handleOpenDialog: handleOpenDialogDelete,
  } = useDialog();

  const { handleColorSelectionChange, handleOnChangeSelect, handleOnClickSelect } =
    useInteractionHandlers(setValue, handleOpenSnackbar);

  const {
    handleOnSaveAssignItems,
    handleSaveCategory,
    handleOnDelete,
    handleOnCreateItem,
    handleOnAssignItems,
  } = useActions(
    handleOpenSnackbar,
    setError,
    watch,
    handleOnCloseDialogAssignItems,
    handleOnOpenDialogAssignItems
  );

  return (
    <>
      <GlobalStyles styles={categoryGlobalStyles as Interpolation<Theme>} />

      <HeaderFormAction
        title="Edit Category"
        onNavigateBack="/item/category"
        onSave={handleSubmit(handleSaveCategory)}
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
              <OutlinedButton onClick={handleSubmit(handleOnCreateItem)}>
                CREATE ITEM
              </OutlinedButton>
            </ButtonActions>
          </Form>

          <DeleteActionButton onClick={handleOpenDialogDelete}>
            <DeleteIconStyled />
            DELETE CATEGORY
          </DeleteActionButton>
        </StackStyled>
      </ContainerStyled>

      <DialogAssignItems
        onClickSelect={handleOnClickSelect}
        onChangeSelect={handleOnChangeSelect}
        open={isOpenDialogAssignItems}
        onClose={handleOnCloseDialogAssignItems}
        onSave={handleOnSaveAssignItems}
      />

      <ConfirmationDialog
        title="Delete category"
        description="Are you sure you want to delete the category?"
        open={isOpenDialogDelete}
        onClose={handleCloseDialogDelete}
        onDelete={handleOnDelete}
      />

      <Snackbar
        open={snackbar.isOpenSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.alert.severity}
          variant="filled"
          sx={() => ({ width: "100%" })}
        >
          {snackbar.alert.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CategoryEdit;
