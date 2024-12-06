import { Toolbar, IconButton, Box, Menu, Slide, Typography } from "@mui/material";
import { ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";
import React, { useState } from "react";
import {
  SearchIconStyled,
  IconButtonStyled,
  MenuIconStyled,
  MenuItemStyled,
  ButtonStyled,
} from "./NavigationToolbarStyles.ts";
import { drawerActions } from "../../../../../store/drawer-slice.ts";
import { searchActions } from "../../../../../store/search-slice.ts";
import { storeProps } from "../../../../../store/index.ts";
import { useDispatch, useSelector } from "react-redux";

type NavigationToolbarProps = {};

const menuList = [
  { id: 1, name: "All Items", selected: true },
  { id: 2, name: "Discounts", selected: false },
  { id: 3, name: "Candy", selected: false },
];

const NavigationToolbar: React.FC<NavigationToolbarProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isSetupItem = useSelector((state: storeProps) => state.item.isSetupItem);

  const handleToggleDrawer = () => {
    dispatch(drawerActions.handleToggleDrawer(true));
  };

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = () => {
    dispatch(searchActions.handleToggleSearch());
  };

  return (
    <Toolbar>
      <IconButtonStyled onClick={handleToggleDrawer}>
        <MenuIconStyled fontSize="large" />
      </IconButtonStyled>
      <Box sx={{ flexGrow: 1 }}>
        {isSetupItem ? (
          <Typography variant="h5" sx={{ ml: 1, fontWeight: "bold" }}>
            Favorite
          </Typography>
        ) : (
          <>
            <ButtonStyled
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="text"
              disableRipple
              endIcon={<ArrowDropDownIcon fontSize="large" />}
            >
              All Items
            </ButtonStyled>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              MenuListProps={{
                "aria-labelledby": "slide-button",
                style: { padding: 0 },
              }}
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
              disableScrollLock
              TransitionComponent={Slide}
              sx={{ ".MuiMenu-paper": { top: "0!important", borderRadius: 0 } }}
            >
              {menuList.map((item) => (
                <MenuItemStyled key={item.id} onClick={handleClose} selected={item.selected}>
                  <Typography variant="h6" component="span">
                    {item.name}
                  </Typography>
                </MenuItemStyled>
              ))}
            </Menu>
          </>
        )}
      </Box>
      <IconButton onClick={handleSearch}>
        <SearchIconStyled fontSize="large" />
      </IconButton>
    </Toolbar>
  );
};

export default NavigationToolbar;
