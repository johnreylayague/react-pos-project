import { AppBar, Toolbar, IconButton } from "@mui/material";
import {
  ArrowBackIconStyled,
  CloseIconStyled,
  SearchInputField,
} from "./HeaderSearchToolbarStyles";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../../../store/category-slice";

type HeaderSearchToolbarProps = {
  backButton: () => void;
  searchInputValue: string;
};
const HeaderSearchToolbar: React.FC<HeaderSearchToolbarProps> = (props) => {
  const { backButton, searchInputValue } = props;

  const searchInputRef = useRef<HTMLInputElement | null>();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(categoryActions.onChangeSearchInputValue(""));
    };
  }, [dispatch]);

  const handleOnChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(categoryActions.onChangeSearchInputValue(value));
  };

  const handleOnCloseSearch = () => {
    dispatch(categoryActions.onChangeSearchInputValue(""));
    searchInputRef.current?.focus();
  };

  return (
    <>
      <AppBar component="div" position="static" color="success" elevation={0}>
        <Toolbar>
          <IconButton onClick={backButton}>
            <ArrowBackIconStyled />
          </IconButton>

          <SearchInputField
            autoFocus
            placeholder="Search"
            onChange={handleOnChangeSearchInput}
            value={searchInputValue}
            inputRef={searchInputRef}
          />

          {searchInputValue && (
            <IconButton onClick={handleOnCloseSearch}>
              <CloseIconStyled />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderSearchToolbar;
