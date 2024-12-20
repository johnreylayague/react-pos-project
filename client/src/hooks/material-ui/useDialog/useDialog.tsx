import React from "react";

type useDialogProps = (initialState?: boolean) => {
  isOpenDialog: boolean;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
};

export const useDialog: useDialogProps = (initialState = false) => {
  const [isOpenDialog, setIsOpenDialog] = React.useState<boolean>(initialState);

  const handleOpenDialog = () => {
    setIsOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  return { isOpenDialog, handleOpenDialog, handleCloseDialog };
};
