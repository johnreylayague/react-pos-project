import { Close as CloseIcon } from "@mui/icons-material";
import { Box, InputBase, IconButton } from "@mui/material";
import React from "react";

type HeaderMobileSearchItemProps = {
  onCloseSearch: () => void;
};
const HeaderMobileSearchItem: React.FC<HeaderMobileSearchItemProps> = (props) => {
  const { onCloseSearch } = props;

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up("sm")]: { display: "none" },
        display: "flex",
        alignItems: "center",
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      })}
    >
      <InputBase
        placeholder="Search"
        autoFocus
        fullWidth
        sx={(theme) => ({
          paddingRight: theme.spacing(1),
        })}
      />

      <IconButton
        onClick={onCloseSearch}
        sx={(theme) => ({
          marginRight: `-${theme.spacing(1)}`,
        })}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default HeaderMobileSearchItem;
