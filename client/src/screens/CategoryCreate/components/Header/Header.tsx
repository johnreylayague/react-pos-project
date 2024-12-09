import { Toolbar, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AppBarStyled } from "./HeaderStyles";
import { ArrowBackIconStyled, Title, ButtonBaseStyled } from "./HeaderStyles";

type HeaderProps = {
  onSaveChanges: () => void;
  onNavigateBack: string;
  title: string;
};
const Header: React.FC<HeaderProps> = (props) => {
  const { onNavigateBack, onSaveChanges, title } = props;

  return (
    <>
      <AppBarStyled component="div" elevation={0}>
        <Toolbar>
          <IconButton component={Link} to={onNavigateBack} relative="path">
            <ArrowBackIconStyled />
          </IconButton>

          <Title component="h6">{title}</Title>

          <ButtonBaseStyled onClick={onSaveChanges}>SAVE</ButtonBaseStyled>
        </Toolbar>
      </AppBarStyled>
    </>
  );
};

export default Header;
