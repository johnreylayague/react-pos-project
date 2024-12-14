import { useSelector, useDispatch } from "react-redux";
import { storeProps } from "../../store";
import { itemActions } from "../../store/item-slice";
import { useEffect } from "react";

export const useHeaderInteractionHandlers = () => {
  const isSearch = useSelector((state: storeProps) => state.item.isSearch);
  const isSelectionMode = useSelector((state: storeProps) => state.item.isSelectionMode);
  const totalSelectedItem = useSelector((state: storeProps) => state.item.selectedCount);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(itemActions.closeDeleting());
    };
  }, [dispatch]);

  const handleCloseSelectionMode = () => {
    dispatch(itemActions.closeDeleting());
  };

  const handleCloseSearch = () => {
    console.log("handleOpenSearch");
    dispatch(itemActions.toggleIsSearch(false));
  };

  const handleOpenSearch = () => {
    dispatch(itemActions.toggleIsSearch(true));
  };

  return {
    isSearch,
    isSelectionMode,
    totalSelectedItem,
    handleOpenSearch,
    handleCloseSearch,
    handleCloseSelectionMode,
  };
};
