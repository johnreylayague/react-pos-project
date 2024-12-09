import React from "react";
import { Toolbar, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { drawerActions } from "../../../../store/drawer-slice.ts";
import { AppBarContainer, MenuIconStyled, Title } from "./HeaderStyles.ts";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const dispatch = useDispatch();

  const handleDrawer = () => {
    dispatch(drawerActions.handleToggleDrawer(true));
  };

  return (
    <AppBarContainer style={{ "--Paper-overlay": "", "--Paper-shadow": "" }}>
      <Toolbar>
        <IconButton onClick={handleDrawer}>
          <MenuIconStyled />
        </IconButton>
        <Title component="h6">Settings</Title>
      </Toolbar>
    </AppBarContainer>
  );
};

export default Header;
