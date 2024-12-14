import { itemActions } from "../../store/item-slice";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

type useItemActionsProps = { dispatch: Dispatch<UnknownAction>; handleCloseDialog: () => void };

export const useItemActions = (props: useItemActionsProps) => {
  const { dispatch, handleCloseDialog } = props;

  const handleDeleteItem = () => {
    handleCloseDialog();
    dispatch(itemActions.deleteSelectedItem());
    dispatch(itemActions.closeDeleting());
  };

  return { handleDeleteItem };
};
