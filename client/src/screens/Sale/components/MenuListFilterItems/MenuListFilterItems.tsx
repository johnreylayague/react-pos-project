import { MenuItem } from "@mui/material";
import React from "react";
import { MenuStyled } from "./MenuListFilterItemsStyles";

type MenuListFilterItemsProps = {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  onClose: () => void;
};
const MenuListFilterItems: React.FC<MenuListFilterItemsProps> = (props) => {
  const { anchorEl, isOpen, onClose } = props;

  return (
    <MenuStyled
      id="basic-menu"
      anchorEl={anchorEl}
      open={isOpen}
      onClose={onClose}
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
      <MenuItem onClick={onClose}>All items</MenuItem>
      <MenuItem onClick={onClose}>CATEGORY 1</MenuItem>
      <MenuItem onClick={onClose}>CATEGORY 2</MenuItem>
    </MenuStyled>
  );
};

export default MenuListFilterItems;
