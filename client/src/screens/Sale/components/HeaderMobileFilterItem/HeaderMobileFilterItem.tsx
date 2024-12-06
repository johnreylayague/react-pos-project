import { ArrowDropDown as ArrowDropDownIcon, Search as SearchIcon } from "@mui/icons-material";
import { Box, ButtonBase, Menu, MenuItem, Divider, IconButton } from "@mui/material";
import React from "react";

type HeaderMobileFilterItemProps = {
  isOpenDropdown: boolean;
  onOpenDropdown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onCloseDropdown: () => void;
  onOpenSearch: () => void;
  handleAllItem: () => void;
  handleFavorite: () => void;
  anchorEl: null | HTMLElement;
};
const HeaderMobileFilterItem: React.FC<HeaderMobileFilterItemProps> = (props) => {
  const {
    isOpenDropdown,
    onOpenDropdown,
    onCloseDropdown,
    anchorEl,
    onOpenSearch,
    handleAllItem,
    handleFavorite,
  } = props;

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up("sm")]: { display: "none" },
        display: "flex",
        alignItems: "center",
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <ButtonBase
        id="basic-button"
        aria-controls={isOpenDropdown ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpenDropdown ? "true" : undefined}
        onClick={onOpenDropdown}
        sx={(theme) => ({
          padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
          width: "100%",
          ...theme.typography.body1,
        })}
      >
        Item 1
        <ArrowDropDownIcon
          fontSize="small"
          sx={(theme) => ({
            marginLeft: "auto",
          })}
        />
      </ButtonBase>
      <Menu
        sx={(theme) => ({
          [theme.breakpoints.up("sm")]: {
            display: "none",
          },
          [theme.breakpoints.down("sm")]: {
            "& .MuiMenu-paper": {
              maxWidth: `calc(100vw - ${130}px)`,
              width: `100%`,
            },
          },
          "& .MuiMenu-paper": {
            borderRadius: 0,
          },
        })}
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpenDropdown}
        onClose={onCloseDropdown}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleAllItem}>All Items</MenuItem>
        <MenuItem onClick={handleFavorite}>Favorite</MenuItem>
      </Menu>
      <Divider orientation="vertical" flexItem />
      <IconButton
        onClick={onOpenSearch}
        sx={(theme) => ({
          marginLeft: theme.spacing(1.5),
          marginRight: theme.spacing(1),
        })}
      >
        <SearchIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};

export default HeaderMobileFilterItem;
