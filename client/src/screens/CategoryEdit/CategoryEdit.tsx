import { GlobalStyles, Interpolation, Theme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

export type FormValuesCategory = {
  name: string;
  colorId: number | string;
};

type CategoryEditProps = {};
const CategoryEdit: React.FC<CategoryEditProps> = (props) => {
  const {} = props;

  const params = useParams<{ categoryId: string }>();
  const itemList = useSelector((state: storeProps) => state.item.itemList);
  const categoryList = useSelector((state: storeProps) => state.category.categoryList);
  const [selectedItemList, setSelectedItemList] = useState(itemList);

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
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

    if (!params.categoryId) {
      console.log("Connot find categoryId");
    }

    if (params.categoryId) {
      const categoryId = Number.parseFloat(params.categoryId);
      const findCategoryById = categoryList.find((category) => category.id === categoryId);

      if (findCategoryById) {
        reset({ name: findCategoryById.name, colorId: findCategoryById.colorId });
      }

      if (!findCategoryById) {
        console.log("Connot find category object");
      }
    }
  }, [setSelectedItemList, setValue]);

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

  const {
    handleColorSelectionChange,
    handleOnAssignItems,
    handleOnChangeSelect,
    handleOnClickSelect,
  } = useInteractionHandlers(setValue, handleOnOpenDialogAssignItems, setSelectedItemList);

  const { handleOnSaveAssignItems, handleOnSave, handleOnDelete } = useActions(
    watch,
    handleOnCloseDialogAssignItems,
    selectedItemList,
    categoryList,
    params
  );

  return (
    <>
      <GlobalStyles styles={categoryGlobalStyles as Interpolation<Theme>} />

      <HeaderFormAction
        title="Edit Category"
        onNavigateBack="/item/category"
        onSave={handleSubmit(handleOnSave)}
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
              <OutlinedButton onClick={handleOnAssignItems}>ASSIGN ITEMS</OutlinedButton>
              <OutlinedButton
                component={Link}
                to="/item/create"
                state={{ from: location.pathname }}
              >
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
        selectedItemList={selectedItemList}
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
    </>
  );
};

export default CategoryEdit;
// import { GlobalStyles, Interpolation, Theme } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";
// import InputField from "./components/InputField/InputField";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
// import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog.tsx";
// import DialogAssignItems from "./components/DialogAssignItems/DialogAssignItems";
// import { categoryGlobalStyles } from "./CategoryGlobalStyles";
// import OutlinedButton from "../../components/common/elements/Button/OutlinedButton/OutlinedButton";
// import {
//   ButtonActions,
//   FieldGroup,
//   DividerStyled,
//   Form,
//   DeleteActionButton,
//   DeleteIconStyled,
//   ContainerStyled,
//   StackStyled,
// } from "./CategoryEditStyles";
// import { useConfirmationDialog } from "../../hooks/useConfirmationDialog.ts";
// import { useAssignItemsActions } from "../../hooks/CategoryEdit/useAssignItemsActions.ts";
// import { useCategoryActions } from "../../hooks/CategoryEdit/useCategoryActions.ts";
// import HeaderFormAction from "../../components/common/elements/Header/HeaderFormAction/HeaderFormAction.tsx";

// type CategoryEditProps = {};
// const CategoryEdit: React.FC<CategoryEditProps> = (props) => {
//   const {} = props;

//   const {
//     handleCloseDialog: closeConfirmationDialog,
//     handleDeleteAction: handleConfirmDeleteAction,
//     handleOpenDialog: openConfirmationDialog,
//     isDialogOpen: isConfirmationDialogOpen,
//   } = useConfirmationDialog();

//   // const {
//   //   categoryData,
//   //   isDialogOpen: isAssignItemsDialogOpen,
//   //   handleCloseDialog: handleAssignItemsCloseDialog,
//   //   handleOpenDialog: handleAssignItemsOpenDialog,
//   //   handleSaveAction: handleAssignItemsSaveAction,
//   // } = useAssignItemsActions();

//   // const { colorData, handleColorSelectionChange, handleOnSaveCategory, handleDeleteCategory } =
//   //   useAssignItemsActions();

//   return (
//     <>
//       <GlobalStyles styles={categoryGlobalStyles as Interpolation<Theme>} />

//       <HeaderFormAction
//         title="Edit Category"
//         onNavigateBack="/item/category"
//         onSave={handleOnSaveCategory}
//       />

//       <ContainerStyled maxWidth="md">
//         <StackStyled spacing={3}>
//           <Form>
//             <FieldGroup spacing={4}>
//               <InputField
//                 labelText="Category name"
//                 errorText="This field cannot be blank"
//                 isError={false}
//               />

//               <ColorPicker colorData={colorData} onChangeSelected={handleColorSelectionChange} />
//             </FieldGroup>

//             <DividerStyled />

//             <ButtonActions>
//               <OutlinedButton onClick={handleAssignItemsOpenDialog}>ASSIGN ITEMS</OutlinedButton>
//               <OutlinedButton
//                 component={Link}
//                 to="/item/create"
//                 state={{ from: location.pathname }}
//               >
//                 CREATE ITEM
//               </OutlinedButton>
//             </ButtonActions>
//           </Form>

//           <DeleteActionButton onClick={openConfirmationDialog}>
//             <DeleteIconStyled />
//             DELETE CATEGORY
//           </DeleteActionButton>
//         </StackStyled>
//       </ContainerStyled>

//       <DialogAssignItems
//         open={isAssignItemsDialogOpen}
//         categoryData={categoryData}
//         onClose={handleAssignItemsCloseDialog}
//         onSave={handleAssignItemsSaveAction}
//       />

//       <ConfirmationDialog
//         title="Delete category"
//         description="Are you sure you want to delete the category?"
//         open={isConfirmationDialogOpen}
//         onClose={closeConfirmationDialog}
//         onDelete={handleConfirmDeleteAction(closeConfirmationDialog)}
//       />
//     </>
//   );
// };

// export default CategoryEdit;
