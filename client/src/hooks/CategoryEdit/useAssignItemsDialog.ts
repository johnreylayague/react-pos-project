import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import { useState } from "react";

export const useAssignItemsDialog = () => {
  const [isDialogOpen, setIsDialogOpenn] = useState<boolean>(false);
  const categoryData = useSelector((state: storeProps) => state.category.categoryData);

  const handleOpenDialog = () => {
    setIsDialogOpenn(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpenn(false);
  };

  const handleSaveAction = () => {
    console.log("Save item");
  };

  return { categoryData, isDialogOpen, handleOpenDialog, handleCloseDialog, handleSaveAction };
};
