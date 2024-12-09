import React from "react";
import { Toolbar } from "@mui/material";
import {
  AppBarContainer,
  HeaderTitle,
  IconButtonStyled,
  ArrowBackIconStyled,
} from "./HeaderStyles";
import { Link } from "react-router-dom";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { title } = props;

  return (
    <AppBarContainer component="div" style={{ "--Paper-overlay": "", "--Paper-shadow": "" }}>
      <Toolbar>
        <IconButtonStyled component={Link} to=".." relative="path">
          <ArrowBackIconStyled />
        </IconButtonStyled>
        <HeaderTitle component="h6">{title}</HeaderTitle>
      </Toolbar>
    </AppBarContainer>
  );
};

export default Header;
