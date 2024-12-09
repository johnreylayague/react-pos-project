import React from "react";
import { Toolbar, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { drawerActions } from "../../../../store/drawer-slice.ts";
import { AppBarContainer, MenuIconStyled, Title } from "./HeaderStyles.ts";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { title } = props;

  const dispatch = useDispatch();

  const handleDrawer = () => {
    dispatch(drawerActions.handleToggleDrawer(true));
  };

  return (
    <>
      <AppBarContainer elevation={0}>
        <Toolbar>
          <IconButton onClick={handleDrawer}>
            <MenuIconStyled />
          </IconButton>
          <Title component="h6">{title}</Title>
        </Toolbar>
      </AppBarContainer>
    </>
  );
};

export default Header;
