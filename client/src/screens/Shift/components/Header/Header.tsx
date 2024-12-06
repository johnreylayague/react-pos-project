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
  IconButtonProps,
} from "@mui/material";
import { Menu as MenuIcon, History as HistoryIcon } from "@mui/icons-material";

const Title = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  paddingLeft: theme.spacing(2),
  flexGrow: 1,
}));

const MenuIconStyled = styled(MenuIcon)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

const HistoryIconStyled = styled(HistoryIcon)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

const IconButtonLeftStyled = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

const IconButtonRightStyled = styled(IconButton)<IconButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    marginRight: `-${theme.spacing(1)}`,
  })
);

type HeaderProps = {
  title: string;
  onToggleNavigationMenu: () => void;
  onOpenShiftHistory: () => void;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { onToggleNavigationMenu, title, onOpenShiftHistory } = props;

  return (
    <AppBar color="success" position="sticky" elevation={0}>
      <Toolbar>
        <IconButtonLeftStyled onClick={onToggleNavigationMenu}>
          <MenuIconStyled />
        </IconButtonLeftStyled>

        <Title>{title}</Title>

        <IconButtonRightStyled onClick={onOpenShiftHistory}>
          <HistoryIconStyled />
        </IconButtonRightStyled>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
