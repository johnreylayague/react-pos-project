import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  AppBarProps,
  Theme,
  styled,
  IconButtonProps,
  IconProps,
  TypographyProps,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const AppbarStyled = styled(AppBar)<AppBarProps>(({ theme }: { theme: Theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
}));

const ButtonBack = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

const MenuIcon = styled(Menu)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

const Title = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  paddingLeft: theme.spacing(2),
  flexGrow: 1,
}));

type HeaderProps = {
  onToggleNavigation: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  const { onToggleNavigation } = props;

  return (
    <AppbarStyled elevation={0} position="static" color="success">
      <Toolbar>
        <ButtonBack onClick={onToggleNavigation}>
          <MenuIcon />
        </ButtonBack>

        <Title component="h6" typography="h6">
          Receipts
        </Title>
      </Toolbar>
    </AppbarStyled>
  );
};

export default Header;
