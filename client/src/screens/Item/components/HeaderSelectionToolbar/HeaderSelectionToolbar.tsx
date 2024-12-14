import { Toolbar, IconButton } from "@mui/material";
import React from "react";
import { Close as CloseIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { AppBarStyled, SelectedCount } from "./HeaderSelectionToolbarStyles";

type HeaderSelectionToolbarProps = {
  openDialogDelete: () => void;
  totalSelectedItem: number;
  onClose: () => void;
};
const HeaderSelectionToolbar: React.FC<HeaderSelectionToolbarProps> = (props) => {
  const { onClose, openDialogDelete, totalSelectedItem } = props;

  return (
    <>
      <AppBarStyled component="div" elevation={2} position="sticky">
        <Toolbar>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>

          <SelectedCount component="div" variant="h6">
            {totalSelectedItem}
          </SelectedCount>

          <IconButton onClick={openDialogDelete}>
            <DeleteIcon />
          </IconButton>
        </Toolbar>
      </AppBarStyled>
    </>
  );
};

export default HeaderSelectionToolbar;
