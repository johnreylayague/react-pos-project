import { AppBar, Toolbar, IconButton } from "@mui/material";
import {
  ArrowBackIconStyled,
  CloseIconStyled,
  SearchInputField,
} from "./HeaderSearchToolbarStyles";
import React from "react";

type HeaderSearchToolbarProps = {
  closeSearch: () => void;
};
const HeaderSearchToolbar: React.FC<HeaderSearchToolbarProps> = (props) => {
  const { closeSearch } = props;

  return (
    <>
      <AppBar component="div" position="static" color="success" elevation={0}>
        <Toolbar>
          <IconButton onClick={closeSearch}>
            <ArrowBackIconStyled />
          </IconButton>

          <SearchInputField autoFocus placeholder="Search" />

          <IconButton>
            <CloseIconStyled />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderSearchToolbar;
