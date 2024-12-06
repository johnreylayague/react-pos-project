import { Toolbar } from "@mui/material";
import React from "react";
import { ArrowBackIconStyled, IconButtonStyled, InputBaseStyled } from "./SearchToolbarStyles.ts";
import { searchActions } from "../../../../../store/search-slice.ts";
import { useDispatch } from "react-redux";

type SearchToolbarProps = {};

const SearchToolbar: React.FC<SearchToolbarProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchActions.handleToggleSearch());
  };

  return (
    <Toolbar>
      <IconButtonStyled onClick={handleSearch}>
        <ArrowBackIconStyled fontSize="large" />
      </IconButtonStyled>
      <InputBaseStyled placeholder="Search" />
    </Toolbar>
  );
};

export default SearchToolbar;
