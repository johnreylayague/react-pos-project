import {
  Menu,
  MenuItem,
  Fade,
  ButtonBase,
  Collapse,
  Grow,
  Slide,
  Zoom,
  Slider,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";

type DropdownProps = {};

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {} = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const itemState = useSelector((state: storeProps) => state.item);

  return (
    <>
      <div>
        <ButtonBase
          id="basic-button"
          disableRipple
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={(theme) => ({
            ...theme.typography.h6,
            padding: `
            ${theme.spacing(1)} 
            ${theme.spacing(1)} 
            ${theme.spacing(1)} 
            ${theme.spacing(1)}
            `,
          })}
        >
          All Items
          <ArrowDropDownIcon sx={() => ({ ml: 1 })} />
        </ButtonBase>
        <Menu
          keepMounted
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={(theme) => ({
            "& .MuiMenu-paper": {
              borderRadius: 0,
            },
          })}
        >
          <MenuItem onClick={handleClose} sx={(theme) => ({ paddingRight: theme.spacing(4) })}>
            All items
          </MenuItem>
          {itemState.categoryData.map((category) => {
            return (
              <MenuItem
                key={category.id}
                onClick={handleClose}
                sx={(theme) => ({ paddingRight: theme.spacing(4) })}
              >
                {category.categoryName}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </>
  );
};

export default Dropdown;
