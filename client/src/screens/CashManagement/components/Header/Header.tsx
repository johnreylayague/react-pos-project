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
  ToolbarProps,
  IconButtonProps,
  CSSObject,
} from "@mui/material";
import { Menu as MenuIcon, ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { Link, LinkProps } from "react-router-dom";

const Title = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  marginLeft: theme.spacing(2),
}));

const ArrowBackIconStyled = styled(ArrowBackIcon)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

const IconButtonStyled = styled(IconButton)<IconButtonProps & Partial<LinkProps>>(
  ({ theme }: { theme: Theme }) => ({
    marginLeft: `-${theme.spacing(1)}`,
  })
);

type HeaderProps = {
  title: string;
  backTo: string;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { title, backTo } = props;

  return (
    <AppBar color="success" position="sticky" elevation={0}>
      <Toolbar>
        <IconButtonStyled component={Link} to={backTo} relative="path">
          <ArrowBackIconStyled />
        </IconButtonStyled>

        <Title>{title}</Title>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
