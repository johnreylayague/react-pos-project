import { Toolbar, IconButton } from "@mui/material";
import React from "react";
import { AppBarStyled, TotalSelectedText } from "./HeaderSelectionToolbar";
import { Delete as DeleteIcon, Close as CloseIcon } from "@mui/icons-material";

type HeaderSelectionToolbarProps = {
  onClose: () => void;
  openDialog: () => void;
  totalSelectedCategory: number;
};
const HeaderSelectionToolbar: React.FC<HeaderSelectionToolbarProps> = (props) => {
  const { onClose, totalSelectedCategory, openDialog } = props;

  return (
    <>
      <AppBarStyled component="div" elevation={2} position="static">
        <Toolbar>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>

          <TotalSelectedText component="h6">{totalSelectedCategory}</TotalSelectedText>

          <IconButton onClick={openDialog}>
            <DeleteIcon />
          </IconButton>
        </Toolbar>
      </AppBarStyled>
    </>
  );
};

export default HeaderSelectionToolbar;
