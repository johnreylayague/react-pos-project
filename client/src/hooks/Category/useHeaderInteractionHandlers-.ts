import { useSelector, useDispatch } from "react-redux";
import { storeProps } from "../../store";
import { categoryActions } from "../../store/category-slice";
import { useEffect } from "react";

export const useHeaderInteractionHandlers = () => {
  const isSearch = useSelector((state: storeProps) => state.category.isSearch);
  const isSelectionMode = useSelector((state: storeProps) => state.category.isSelectionMode);
  const selectedCount = useSelector((state: storeProps) => state.category.selectedCount);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(categoryActions.closeDeleting());
    };
  }, [dispatch]);

  const handleCloseSelectionMode = () => {
    dispatch(categoryActions.closeDeleting());
  };

  const handleCloseSearch = () => {
    dispatch(categoryActions.categoryIsSearch(false));
  };

  const handleOpenSearch = () => {
    dispatch(categoryActions.categoryIsSearch(true));
  };

  return {
    isSearch,
    isSelectionMode,
    selectedCount,
    handleCloseSelectionMode,
    handleCloseSearch,
    handleOpenSearch,
  };
};
