import { List } from "@mui/material";
import React from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header";
import { useHeaderInteractionHandlers } from "../../hooks/Items/useHeaderInteractionHandlers";
import { useItemInteractionHandlers } from "../../hooks/Items/useItemInteractionHandlers";
import { useConfirmationDialog } from "../../hooks/useConfirmationDialog";
import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog";
import { useItemActions } from "../../hooks/Items/userItemActions";
import FabButton from "../../components/common/elements/Button/FabButton/FabButton";
import ItemListItem from "./components/ItemListItem/ItemListItem";

type ItemsProps = {};

const Item: React.FC<ItemsProps> = (props) => {
  const {} = props;

  const {
    isSearch,
    isSelectionMode,
    totalSelectedItem,
    handleOpenSearch,
    handleCloseSearch,
    handleCloseSelectionMode,
  } = useHeaderInteractionHandlers();

  const { handleCloseDialog, handleDeleteAction, handleOpenDialog, isDialogOpen } =
    useConfirmationDialog();

  const { handleDeleteItem } = useItemActions();

  const { itemData, interactionHandlers } = useItemInteractionHandlers();

  return (
    <>
      <Header
        onClose={handleCloseSelectionMode}
        closeSearch={handleCloseSearch}
        totalSelectedItem={totalSelectedItem}
        isSearch={isSearch}
        isSelectionMode={isSelectionMode}
        openSearch={handleOpenSearch}
        openDialog={handleOpenDialog}
      />

      <List>
        {itemData.map((item) => {
          return (
            <ItemListItem
              key={item.id}
              itemData={item}
              onInteractionHandlers={interactionHandlers}
            />
          );
        })}
      </List>

      <FabButton to={"/item/create"} component={Link}>
        <AddIcon />
      </FabButton>

      <ConfirmationDialog
        title="Delete item"
        description="Are you sure you want to delete the item"
        open={isDialogOpen}
        onClose={handleCloseDialog}
        onDelete={handleDeleteAction(handleDeleteItem)}
      />
    </>
  );
};

export default Item;
