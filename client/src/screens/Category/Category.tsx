import { List } from "@mui/material";
import React from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import FabButton from "../../components/common/elements/Button/FabButton/FabButton.tsx";
import CategoryListItem from "./components/CategoryListItem/CategoryListItem.tsx";
import { useCategoryInteractionHandlers } from "../../hooks/Category/useCategoryInteractionHandlers.ts";
import { useHeaderInteractionHandlers } from "../../hooks/Category/useHeaderInteractionHandlers.ts";
import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog.tsx";
import { useConfirmationDialog } from "../../hooks/useConfirmationDialog.ts";
import { useCategoryActions } from "../../hooks/Category/userCategoryActions.ts";

type CategoryProps = {};

const Category: React.FC<CategoryProps> = (props) => {
  const {} = props;

  const { interactionHandlers, categoryData } = useCategoryInteractionHandlers();

  const {
    isSearch,
    isSelectionMode,
    selectedCount,
    handleCloseSearch,
    handleCloseSelectionMode,
    handleOpenSearch,
  } = useHeaderInteractionHandlers();

  const { handleDeleteCategory } = useCategoryActions();

  const { handleCloseDialog, handleDeleteAction, handleOpenDialog, isDialogOpen } =
    useConfirmationDialog();

  return (
    <>
      <Header
        isSearch={isSearch}
        isSelectionMode={isSelectionMode}
        onClose={handleCloseSelectionMode}
        closeSearch={handleCloseSearch}
        totalSelectedCategory={selectedCount}
        openSearch={handleOpenSearch}
        openDialog={handleOpenDialog}
      />

      <List>
        {categoryData.map((category) => {
          return (
            <CategoryListItem
              key={category.id}
              categoryData={category}
              onInteractionHandlers={interactionHandlers}
            />
          );
        })}
      </List>

      <FabButton to="/item/category/create" component={Link}>
        <AddIcon />
      </FabButton>

      <ConfirmationDialog
        title="Delete category"
        description="Are you sure you want to delete the category?"
        open={isDialogOpen}
        onClose={handleCloseDialog}
        onDelete={handleDeleteAction(handleDeleteCategory)}
      />
    </>
  );
};

export default Category;
