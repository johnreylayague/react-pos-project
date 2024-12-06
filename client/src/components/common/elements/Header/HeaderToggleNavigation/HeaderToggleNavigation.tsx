import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  styled,
  BoxProps,
  Box,
  Theme,
  IconProps,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const Title = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  marginLeft: theme.spacing(3),
}));

const MenuIconStyled = styled(MenuIcon)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

type HeaderProps = {
  title: string;
  onToggleNavigationMenu: () => void;
};

const HeaderToggleNavigation: React.FC<HeaderProps> = (props) => {
  const { onToggleNavigationMenu, title } = props;

  return (
    <AppBar color="success" position="static" elevation={0}>
      <Toolbar>
        <IconButton onClick={onToggleNavigationMenu}>
          <MenuIconStyled />
        </IconButton>

        <Title>{title}</Title>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderToggleNavigation;
