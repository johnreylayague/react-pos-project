import { useState } from "react";

export const useConfirmationDialog = () => {
  const [isDialogOpen, setIsDialogOpenn] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setIsDialogOpenn(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpenn(false);
  };

  const handleDeleteAction = (handleDeleteFn: () => void) => () => {
    handleDeleteFn();
  };

  return {
    isDialogOpen,
    handleCloseDialog,
    handleOpenDialog,
    handleDeleteAction,
  };
};
