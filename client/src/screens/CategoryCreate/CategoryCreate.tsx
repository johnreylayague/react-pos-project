import { GlobalStyles, Interpolation, Theme } from "@mui/material";
import React from "react";

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
import InputField from "./components/InputField/InputField";
import { useAssignItemsDialog } from "../../hooks/CategoryEdit/useAssignItemsDialog";
import { useCategoryActions } from "../../hooks/CategoryEdit/useCategoryActions";

type CreateCategoryProps = {};

const CreateCategory: React.FC<CreateCategoryProps> = (props) => {
  const {} = props;

  const {
    categoryData,
    isDialogOpen: isAssignItemsDialogOpen,
    handleCloseDialog: handleAssignItemsCloseDialog,
    handleOpenDialog: handleAssignItemsOpenDialog,
    handleSaveAction: handleAssignItemsSaveAction,
  } = useAssignItemsDialog();

  const { colorData, handleColorSelectionChange, handleOnSaveCategory } = useCategoryActions();

  return (
    <>
      <GlobalStyles styles={categoryGlobalStyles as Interpolation<Theme>} />

      <HeaderFormAction
        title="Create Category"
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
        </StackStyled>
      </ContainerStyled>

      <DialogAssignItems
        open={isAssignItemsDialogOpen}
        categoryData={categoryData}
        onClose={handleAssignItemsCloseDialog}
        onSave={handleAssignItemsSaveAction}
      />
    </>
  );
};

export default CreateCategory;
