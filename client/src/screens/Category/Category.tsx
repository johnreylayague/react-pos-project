import React from "react";
import { useToggle } from "../../hooks/components/useToggle/useToggle.tsx";
import HeaderSearchToolbar from "./components/HeaderSearchToolbar/HeaderSearchToolbar.tsx";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store/index.ts";
import HeaderSearchAndFilterToolbar from "./components/HeaderSearchAndFilterToolbar/HeaderSearchAndFilterToolbar.tsx";
import HeaderSelectionToolbar from "./components/HeaderSelectionToolbar/HeaderSelectionToolbar.tsx";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog.tsx";
import { useHeaderInteractionHandlers } from "../../hooks/Category/useHeaderInteractionHandlers.ts";
import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog.tsx";
import { useListItemInteractionHandlers } from "../../hooks/Category/useListItemInteractionHandlers.ts";
import { List } from "@mui/material";
import FabButton from "../../components/common/elements/Button/FabButton/FabButton.tsx";
import { Add as AddIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import EmptyItemNotification from "./components/EmptyItemNotification/EmptyItemNotification.tsx";
import CategoryListItem from "./components/CategoryListItem/CategoryListItem.tsx";
import { ResultMessage } from "./CategoryStyles.ts";

type CategoryProps = {};

const Category: React.FC<CategoryProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();
  const isSelectionMode = useSelector((state: storeProps) => state.category.isSelectionMode);
  const searchInputValue = useSelector((state: storeProps) => state.category.searchInputValue);
  const totalSelectedItem = useSelector((state: storeProps) => state.category.selectedCount);
  const categoryList = useSelector((state: storeProps) => state.category.categoryList);

  const {
    isOpenDialog: isOpenDialogDelete,
    handleOpenDialog: handleOpenDialogDelete,
    handleCloseDialog: handleCloseDialogDelete,
  } = useDialog();

  const {
    isOpenToggle: isOpenSearch,
    handleCloseToggle: handleOnCloseSearch,
    handleOpenToggle: handleOnOpenSearch,
  } = useToggle();

  const { interactionHandlers } = useListItemInteractionHandlers(handleOnCloseSearch);

  const { handleCloseSelection, handleDeleteSelectionItem } = useHeaderInteractionHandlers(
    dispatch,
    handleCloseDialogDelete
  );

  return (
    <>
      {isSelectionMode && (
        <HeaderSelectionToolbar
          onClose={handleCloseSelection}
          openDialogDelete={handleOpenDialogDelete}
          totalSelectedItem={totalSelectedItem}
        />
      )}

      {!isSelectionMode && isOpenSearch && (
        <HeaderSearchToolbar backButton={handleOnCloseSearch} searchInputValue={searchInputValue} />
      )}

      {!isSelectionMode && !isOpenSearch && (
        <HeaderSearchAndFilterToolbar
          title="Categories"
          backButton=".."
          openSearch={handleOnOpenSearch}
        />
      )}

      {!isOpenSearch && categoryList.length === 0 && (
        <EmptyItemNotification
          mainMessage="You have no category yet"
          subMessage="Add categories to start organizing your collection."
        />
      )}

      {isOpenSearch &&
        categoryList.filter((category) =>
          category.name.toLowerCase().includes(searchInputValue.toLowerCase())
        ).length === 0 && (
          <ResultMessage variant="body1" component={"div"}>
            No existing category found.
          </ResultMessage>
        )}

      {categoryList.filter((category) =>
        category.name.toLowerCase().includes(searchInputValue.toLowerCase())
      ).length !== 0 && (
        <List>
          {categoryList
            .filter((category) =>
              category.name.toLowerCase().includes(searchInputValue.toLowerCase())
            )
            .map((category) => {
              return (
                <CategoryListItem
                  key={category.id}
                  categoryData={category}
                  onInteractionHandlers={interactionHandlers}
                />
              );
            })}
        </List>
      )}

      <FabButton to="/item/category/create" component={Link}>
        <AddIcon />
      </FabButton>

      <ConfirmationDialog
        title="Delete category"
        description="Are you sure you want to delete the category?"
        open={isOpenDialogDelete}
        onClose={handleCloseDialogDelete}
        onDelete={handleDeleteSelectionItem}
      />
    </>
  );
};

export default Category;
