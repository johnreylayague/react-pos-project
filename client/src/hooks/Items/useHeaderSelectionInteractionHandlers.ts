import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { itemActions } from "../../store/item-slice";

export const useHeaderSelectionInteractionHandlers = (
  dispatch: Dispatch<UnknownAction>,
  handleCloseDialogDelete: () => void
) => {
  const handleCloseSelection = () => {
    dispatch(itemActions.closeDeleting());
  };

  const handleDeleteSelectionItem = () => {
    handleCloseDialogDelete();
    dispatch(itemActions.deleteSelectedItem());
    dispatch(itemActions.closeDeleting());
  };

  return { handleCloseSelection, handleDeleteSelectionItem };
};
