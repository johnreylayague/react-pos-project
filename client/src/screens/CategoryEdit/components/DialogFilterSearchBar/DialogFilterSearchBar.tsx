import React from "react";
import { SearchBarContainer } from "./DialogFilterSearchBarStyles";
import { IconButton, InputBase } from "@mui/material";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";

type DialogFilterSearchBarProps = {
  onChangeSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearchInput: () => void;
  searchValue: string;
};
const DialogFilterSearchBar: React.FC<DialogFilterSearchBarProps> = (props) => {
  const { onChangeSearchInput, searchValue, onClearSearchInput } = props;

  return (
    <SearchBarContainer spacing={2} direction={"row"}>
      <SearchIcon />
      <InputBase
        placeholder="Search item"
        value={searchValue}
        onChange={onChangeSearchInput}
        fullWidth
      />

      {searchValue && (
        <IconButton onClick={onClearSearchInput}>
          <CloseIcon />
        </IconButton>
      )}
    </SearchBarContainer>
  );
};

export default DialogFilterSearchBar;
