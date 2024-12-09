import { Box, IconButton, Typography, Button } from "@mui/material";
import React from "react";
import { Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material";

type DialogHeaderProps = {
  onClose: () => void;
  onSave: () => void;
};

const DialogHeader: React.FC<DialogHeaderProps> = (props) => {
  const { onClose, onSave } = props;

  return (
    <>
      <Box
        sx={(_theme) => ({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <IconButton onClick={onClose} sx={(theme) => ({ ml: theme.spacing(2) })}>
          <CloseIcon />
        </IconButton>
        <Typography
          sx={(theme) => ({
            flexGrow: 1,
            pl: theme.spacing(3),
            fontWeight: "bold",
          })}
        >
          Assign items to category
        </Typography>
        <Button
          onClick={onSave}
          variant="text"
          color="success"
          sx={(theme) => ({ borderRadius: 0, py: theme.spacing(2), px: theme.spacing(3) })}
        >
          SAVE
        </Button>
      </Box>
    </>
  );
};

export default DialogHeader;
