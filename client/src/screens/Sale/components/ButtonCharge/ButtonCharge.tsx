import React from "react";
import { Box, Button, ListItemText } from "@mui/material";

const ButtonCharge = () => {
  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up("sm")]: { display: "none" },
        padding: theme.spacing(2),
        bgcolor: theme.palette.grey[100],
      })}
    >
      <Button
        disableElevation
        sx={(theme) => ({ borderRadius: 0 })}
        color="success"
        size="small"
        variant="contained"
        fullWidth
      >
        <ListItemText
          sx={(theme) => ({
            "& .MuiListItemText-primary": {},
            "& .MuiListItemText-secondary": {
              ...theme.typography.body1,
              color: theme.palette.common.white,
            },
          })}
          secondary={"₱0.02"}
        >
          CHARGE
        </ListItemText>
      </Button>
    </Box>
  );
};

export default ButtonCharge;
