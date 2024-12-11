import { Toolbar, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AppBarStyled } from "./HeaderFormActionStyles";
import { ArrowBackIconStyled, Title, ButtonBaseStyled } from "./HeaderFormActionStyles";

type HeaderFormActionProps = {
  onSave: () => void;
  onNavigateBack: string;
  title: string;
};
const HeaderFormAction: React.FC<HeaderFormActionProps> = (props) => {
  const { onNavigateBack, onSave, title } = props;

  return (
    <>
      <AppBarStyled elevation={0} position="sticky">
        <Toolbar>
          <IconButton component={Link} to={onNavigateBack} relative="path">
            <ArrowBackIconStyled />
          </IconButton>

          <Title component="h6">{title}</Title>

          <ButtonBaseStyled onClick={onSave}>SAVE</ButtonBaseStyled>
        </Toolbar>
      </AppBarStyled>
    </>
  );
};

export default HeaderFormAction;
