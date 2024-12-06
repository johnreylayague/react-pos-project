import React from "react";

export const useDialog = () => {
  const [isOpenDialog, setIsOpenDialog] = React.useState<boolean>(false);

  const handleOpenDialog = () => {
    setIsOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  return { isOpenDialog, handleOpenDialog, handleCloseDialog };
};
