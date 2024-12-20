import { categoryActions } from "../../store/category-slice";
import { UnknownAction, Dispatch } from "@reduxjs/toolkit";

export const useHeaderInteractionHandlers = (
  dispatch: Dispatch<UnknownAction>,
  handleCloseDialogDelete: () => void
) => {
  const handleCloseSelection = () => {
    dispatch(categoryActions.closeDeleting());
  };
  const handleDeleteSelectionItem = () => {
    handleCloseDialogDelete();
    dispatch(categoryActions.deleteSelectedItem());
    dispatch(categoryActions.closeDeleting());
  };
  return { handleCloseSelection, handleDeleteSelectionItem };
};
