import React from "react";
import { InputBase } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { CloseSearchButton, SearchContainer } from "./SearchModeStyles";

type SearchModeProps = {
  onCloseSearch: () => void;
};
const SearchMode: React.FC<SearchModeProps> = (props) => {
  const { onCloseSearch } = props;

  return (
    <SearchContainer>
      <InputBase placeholder="Search" autoFocus fullWidth />

      <CloseSearchButton onClick={onCloseSearch}>
        <CloseIcon />
      </CloseSearchButton>
    </SearchContainer>
  );
};

export default SearchMode;
