import { GlobalStyles, Interpolation, Theme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import InputField from "./components/InputField/InputField";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog.tsx";
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
import { useConfirmationDialog } from "../../hooks/useConfirmationDialog.ts";
import { useAssignItemsDialog } from "../../hooks/CategoryEdit/useAssignItemsDialog.ts";
import { useCategoryActions } from "../../hooks/CategoryEdit/useCategoryActions.ts";
import HeaderFormAction from "../../components/common/elements/Header/HeaderFormAction/HeaderFormAction.tsx";

type CategoryEditProps = {};
const CategoryEdit: React.FC<CategoryEditProps> = (props) => {
  const {} = props;

  const {
    handleCloseDialog: closeConfirmationDialog,
    handleDeleteAction: handleConfirmDeleteAction,
    handleOpenDialog: openConfirmationDialog,
    isDialogOpen: isConfirmationDialogOpen,
  } = useConfirmationDialog();

  const {
    categoryData,
    isDialogOpen: isAssignItemsDialogOpen,
    handleCloseDialog: handleAssignItemsCloseDialog,
    handleOpenDialog: handleAssignItemsOpenDialog,
    handleSaveAction: handleAssignItemsSaveAction,
  } = useAssignItemsDialog();

  const { colorData, handleColorSelectionChange, handleOnSaveCategory, handleDeleteCategory } =
    useCategoryActions();

  return (
    <>
      <GlobalStyles styles={categoryGlobalStyles as Interpolation<Theme>} />

      <HeaderFormAction
        title="Edit Category"
        onNavigateBack="/item/category"
        onSave={handleOnSaveCategory}
      />

      <ContainerStyled maxWidth="md">
        <StackStyled spacing={3}>
          <Form>
            <FieldGroup spacing={4}>
              <InputField
                labelText="Category name"
                errorText="This field cannot be blank"
                isError={false}
              />

              <ColorPicker colorData={colorData} onChangeSelected={handleColorSelectionChange} />
            </FieldGroup>

            <DividerStyled />

            <ButtonActions>
              <OutlinedButton onClick={handleAssignItemsOpenDialog}>ASSIGN ITEMS</OutlinedButton>
              <OutlinedButton
                component={Link}
                to="/item/create"
                state={{ from: location.pathname }}
              >
                CREATE ITEM
              </OutlinedButton>
            </ButtonActions>
          </Form>

          <DeleteActionButton onClick={openConfirmationDialog}>
            <DeleteIconStyled />
            DELETE CATEGORY
          </DeleteActionButton>
        </StackStyled>
      </ContainerStyled>

      <DialogAssignItems
        open={isAssignItemsDialogOpen}
        categoryData={categoryData}
        onClose={handleAssignItemsCloseDialog}
        onSave={handleAssignItemsSaveAction}
      />

      <ConfirmationDialog
        title="Delete category"
        description="Are you sure you want to delete the category?"
        open={isConfirmationDialogOpen}
        onClose={closeConfirmationDialog}
        onDelete={handleConfirmDeleteAction(closeConfirmationDialog)}
      />
    </>
  );
};

export default CategoryEdit;
