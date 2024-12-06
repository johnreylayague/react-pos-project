import { AppBar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  ToolbarStyled,
  ArrowBackIconStyled,
  BackButton,
  Title,
  SearchIconStyled,
  OpenSearchButton,
} from "./HeaderSearchAndFilterToolbarStyles";

type HeaderSearchAndFilterToolbarProps = {
  title: string;
  openSearch: () => void;
};
const HeaderSearchAndFilterToolbar: React.FC<HeaderSearchAndFilterToolbarProps> = (props) => {
  const { title, openSearch } = props;

  return (
    <>
      <AppBar component="div" elevation={0} color="success" position="static">
        <ToolbarStyled>
          <BackButton component={Link} to=".." relative="path">
            <ArrowBackIconStyled />
          </BackButton>

          <Title component="h6">{title}</Title>

          <OpenSearchButton onClick={openSearch}>
            <SearchIconStyled />
          </OpenSearchButton>
        </ToolbarStyled>
      </AppBar>
    </>
  );
};

export default HeaderSearchAndFilterToolbar;
