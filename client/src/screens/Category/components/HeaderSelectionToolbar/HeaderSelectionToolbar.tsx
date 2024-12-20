import { Toolbar, IconButton } from "@mui/material";
import React from "react";
import { AppBarStyled, TotalSelectedText } from "./HeaderSelectionToolbar";
import { Delete as DeleteIcon, Close as CloseIcon } from "@mui/icons-material";

type HeaderSelectionToolbarProps = {
  openDialogDelete: () => void;
  totalSelectedItem: number;
  onClose: () => void;
};
const HeaderSelectionToolbar: React.FC<HeaderSelectionToolbarProps> = (props) => {
  const { onClose, openDialogDelete, totalSelectedItem } = props;

  return (
    <>
      <AppBarStyled component="div" elevation={2} position="static">
        <Toolbar>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>

          <TotalSelectedText component="h6">{totalSelectedItem}</TotalSelectedText>

          <IconButton onClick={openDialogDelete}>
            <DeleteIcon />
          </IconButton>
        </Toolbar>
      </AppBarStyled>
    </>
  );
};

export default HeaderSelectionToolbar;
