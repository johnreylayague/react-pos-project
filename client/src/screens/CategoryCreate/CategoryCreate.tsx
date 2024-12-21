import { Alert, GlobalStyles, Interpolation, Snackbar, Theme } from "@mui/material";
import React, { useEffect } from "react";
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
import { useActions } from "../../hooks/CategoryCreate/useActions";
import { Controller, useForm } from "react-hook-form";
import InputField from "../../components/common/elements/Input/InputField/InputField";
import assets from "../../assets/assets";
import { validationCategoryRules } from "./CategoryCreateValidationRules";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog";
import { useSnackbar } from "../../hooks/material-ui/useSnackbar/useSnackbar";
import { useInteractionHandlers } from "../../hooks/CategoryCreate/useInteractionHandlers";

const colorData = assets.json.colorData;

export type FormValuesCategory = {
  id?: number | string;
  name: string;
  colorId: number | string;
};

type CreateCategoryProps = {};

const CreateCategory: React.FC<CreateCategoryProps> = (props) => {
  const {} = props;

  const {
    handleSubmit,
    control,
    setValue,
    watch,
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
    const findIsDefault = colorData.find((color) => color.isDefault);

    if (!findIsDefault) {
      handleOpenSnackbar({
        message: "No default color found in the provided data.",
        severity: "error",
      });
      return;
    }

    setValue("colorId", findIsDefault.id);
  }, [setValue]);

  const {
    isOpenDialog: isOpenDialogAssignItems,
    handleCloseDialog: handleOnCloseDialogAssignItems,
    handleOpenDialog: handleOnOpenDialogAssignItems,
  } = useDialog();

  const { handleColorSelectionChange, handleOnChangeSelect, handleOnClickSelect } =
    useInteractionHandlers(setValue, handleOpenSnackbar);

  const {
    handleOnSaveCategory,
    handleOnAssignItems,
    buttonSaveRef,
    handleOnCreateItem,
    handleOnSaveAssignItems,
  } = useActions(
    handleOnOpenDialogAssignItems,
    setError,
    watch,
    setValue,
    handleOnCloseDialogAssignItems,
    handleOpenSnackbar
  );

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
              <OutlinedButton onClick={handleSubmit(handleOnCreateItem)}>
                CREATE ITEM
              </OutlinedButton>
            </ButtonActions>
          </Form>
        </StackStyled>
      </ContainerStyled>

      <DialogAssignItems
        onClickSelect={handleOnClickSelect}
        onChangeSelect={handleOnChangeSelect}
        open={isOpenDialogAssignItems}
        onClose={handleOnCloseDialogAssignItems}
        onSave={handleOnSaveAssignItems}
      />

      <Snackbar
        open={snackbar.isOpenSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.alert.severity} variant="filled">
          {snackbar.alert.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreateCategory;
