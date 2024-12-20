import React, { useState } from "react";
import { List } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useItemInteractionHandlers } from "../../hooks/Items/useItemInteractionHandlers";
import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog";
import FabButton from "../../components/common/elements/Button/FabButton/FabButton";
import ItemListItem from "./components/ItemListItem/ItemListItem";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import EmptyItemNotification from "./components/EmptyItemMessage/EmptyItemMessage";
import HeaderSelectionToolbar from "./components/HeaderSelectionToolbar/HeaderSelectionToolbar";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog";
import { useToggle } from "../../hooks/components/useToggle/useToggle";
import { useHeaderSelectionInteractionHandlers } from "../../hooks/Items/useHeaderSelectionInteractionHandlers";
import HeaderSearchAndFilterToolbar from "./components/HeaderSearchAndFilterToolbar/HeaderSearchAndFilterToolbar";
import HeaderSearchToolbar from "./components/HeaderSearchToolbar/HeaderSearchToolbar";
import { ResultMessage } from "./ItemStyles";

type ItemsProps = {};

const Item: React.FC<ItemsProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();
  const itemList = useSelector((state: storeProps) => state.item.itemList);
  const isSelectionMode = useSelector((state: storeProps) => state.item.isSelectionMode);
  const totalSelectedItem = useSelector((state: storeProps) => state.item.selectedCount);
  const searchInputValue = useSelector((state: storeProps) => state.item.searchInputValue);
  const [selectedMenu, setSelectedMenu] = useState<{ id: number | string; text: string }>({
    id: "",
    text: "All Items",
  });

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

  const { interactionHandlers } = useItemInteractionHandlers(handleOnCloseSearch);

  const { handleCloseSelection, handleDeleteSelectionItem } = useHeaderSelectionInteractionHandlers(
    dispatch,
    handleCloseDialogDelete
  );

  const handleOnChangeMenu = (event: React.MouseEvent<HTMLLIElement>) => {
    const menuId = event.currentTarget.getAttribute("data-id");
    const categoryName = event.currentTarget.getAttribute("data-category-name");

    if (menuId && categoryName) {
      const convertedMenuId = Number.parseInt(menuId);
      setSelectedMenu({
        id: convertedMenuId,
        text: categoryName,
      });
    }

    if (!categoryName) {
      console.log("CategoryName does not exist.");
    }

    if (!menuId) {
      setSelectedMenu({ id: "", text: "All items" });
    }
  };

  const filterItemByCategoryId = itemList.filter((item) => item.categoryId === selectedMenu.id);

  return (
    <>
      {isSelectionMode && (
        <HeaderSelectionToolbar
          totalSelectedItem={totalSelectedItem}
          onClose={handleCloseSelection}
          openDialogDelete={handleOpenDialogDelete}
        />
      )}
      {!isSelectionMode && isOpenSearch && (
        <HeaderSearchToolbar searchInputValue={searchInputValue} backButton={handleOnCloseSearch} />
      )}
      {!isSelectionMode && !isOpenSearch && (
        <HeaderSearchAndFilterToolbar
          openSearch={handleOnOpenSearch}
          selectedMenu={selectedMenu}
          onChangeMenu={handleOnChangeMenu}
        />
      )}

      {isOpenSearch &&
        itemList.filter((item) => item.name.toLowerCase().includes(searchInputValue.toLowerCase()))
          .length === 0 && (
          <ResultMessage variant="body1" component={"div"}>
            No existing items found.
          </ResultMessage>
        )}

      {itemList.length === 0 ||
        (selectedMenu.id !== "" && filterItemByCategoryId.length === 0 && (
          <EmptyItemNotification
            mainMessage="You have no items yet"
            subMessage="Add items to start organizing your collection."
          />
        ))}

      {itemList.length !== 0 && selectedMenu.id === "" && (
        <List>
          {itemList
            .filter((item) => item.name.toLowerCase().includes(searchInputValue.toLowerCase()))
            .map((item) => {
              return (
                <ItemListItem
                  key={item.id}
                  itemData={item}
                  onInteractionHandlers={interactionHandlers}
                />
              );
            })}
        </List>
      )}

      {itemList.length !== 0 && selectedMenu.id !== "" && filterItemByCategoryId.length !== 0 && (
        <List>
          {filterItemByCategoryId
            .filter((item) => item.name.toLowerCase().includes(searchInputValue.toLowerCase()))
            .map((item) => {
              return (
                <ItemListItem
                  key={item.id}
                  itemData={item}
                  onInteractionHandlers={interactionHandlers}
                />
              );
            })}
        </List>
      )}

      <FabButton to={"/item/create"} component={Link}>
        <AddIcon />
      </FabButton>

      <ConfirmationDialog
        title="Delete item"
        description="Are you sure you want to delete the item"
        open={isOpenDialogDelete}
        onClose={handleCloseDialogDelete}
        onDelete={handleDeleteSelectionItem}
      />
    </>
  );
};

export default Item;
