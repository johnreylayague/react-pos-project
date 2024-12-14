import { AppBar, Toolbar, IconButton } from "@mui/material";
import React, { useRef } from "react";
import { CloseButton, CloseIcon, SearchInput, ArrowBackIcon } from "./HeaderSearchToolbarStyles";
import { useDispatch } from "react-redux";
import { itemActions } from "../../../../store/item-slice";

type HeaderSearchToolbarProps = { backButton: () => void; searchInputValue: string };
const HeaderSearchToolbar: React.FC<HeaderSearchToolbarProps> = (props) => {
  const { backButton, searchInputValue } = props;

  const searchInputRef = useRef<HTMLInputElement | null>();
  const dispatch = useDispatch();

  const handleOnChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(itemActions.onChangeSearchInputValue(value));
  };

  const handleOnCloseSearch = () => {
    dispatch(itemActions.onChangeSearchInputValue(""));
    searchInputRef.current?.focus();
  };


  return (
    <AppBar component="div" elevation={0} position="sticky" color="success">
      <Toolbar>
        <IconButton onClick={backButton}>
          <ArrowBackIcon />
        </IconButton>

        <SearchInput
          autoFocus
          placeholder="Search"
          onChange={handleOnChangeSearchInput}
          value={searchInputValue}
          inputRef={searchInputRef}
        />

        {searchInputValue && (
          <CloseButton onClick={handleOnCloseSearch}>
            <CloseIcon />
          </CloseButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderSearchToolbar;
