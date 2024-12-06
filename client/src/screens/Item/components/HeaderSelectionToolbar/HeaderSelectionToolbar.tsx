import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import React from "react";
import { Close as CloseIcon, Delete as DeleteIcon } from "@mui/icons-material";

type HeaderSelectionToolbarProps = {
  openDialog: () => void;
  totalSelectedItem: number;
  onClose: () => void;
};
const HeaderSelectionToolbar: React.FC<HeaderSelectionToolbarProps> = (props) => {
  const { onClose, openDialog, totalSelectedItem } = props;

  return (
    <>
      <AppBar
        component="div"
        elevation={2}
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          position: "static",
        })}
      >
        <Toolbar>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography
            component="div"
            sx={(theme) => ({
              ...theme.typography.h6,
              flexGrow: 1,
              marginLeft: theme.spacing(3),
              color: theme.palette.common.black,
            })}
          >
            {totalSelectedItem}
          </Typography>
          <IconButton onClick={openDialog}>
            <DeleteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderSelectionToolbar;
