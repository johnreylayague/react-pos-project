import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  styled,
  Theme,
  IconButtonProps,
  TypographyProps,
  IconProps,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link, LinkProps } from "react-router-dom";

const ButtonBack = styled(IconButton)<IconButtonProps & LinkProps>(
  ({ theme }: { theme: Theme }) => ({
    marginLeft: `-${theme.spacing(1)}`,
  })
);

const Title = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  paddingLeft: theme.spacing(2),
}));

const ArrowBackIcon = styled(ArrowBack)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

type HeaderProps = {
  title: string;
  onBackNavigation: string;
};
const Header: React.FC<HeaderProps> = (props) => {
  const { onBackNavigation, title } = props;

  return (
    <AppBar elevation={0} position="static" color="success">
      <Toolbar>
        <ButtonBack component={Link} to={onBackNavigation} relative="path">
          <ArrowBackIcon />
        </ButtonBack>

        <Title component="h6" typography="h6">
          {title}
        </Title>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
