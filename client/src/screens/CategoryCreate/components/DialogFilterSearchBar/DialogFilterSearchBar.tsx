import React from "react";
import { SearchBarContainer } from "./DialogFilterSearchBarStyles";
import { IconButton, InputBase } from "@mui/material";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";

type DialogFilterSearchBarProps = {
  onSearch: () => void;
  onClose: () => void;
};
const DialogFilterSearchBar: React.FC<DialogFilterSearchBarProps> = (props) => {
  const { onClose, onSearch } = props;

  return (
    <SearchBarContainer spacing={2} direction={"row"}>
      <IconButton onClick={onSearch}>
        <SearchIcon />
      </IconButton>
      <InputBase placeholder="Search item" fullWidth />
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </SearchBarContainer>
  );
};

export default DialogFilterSearchBar;
