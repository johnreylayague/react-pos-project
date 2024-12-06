import { ArrowBack, Close } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  styled,
  IconButtonProps,
  InputBaseProps,
  IconProps,
} from "@mui/material";
import React from "react";
import { useSearch } from "../../../../hooks/Sale/useSearch";

const BackButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
  // marginRight: theme.spacing(2),
}));

const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  marginRight: `-${theme.spacing(1)}`,
}));

const SearchInput = styled(InputBase)<InputBaseProps>(({ theme }) => ({
  color: theme.palette.common.white,
  ...theme.typography.h6,
  flexGrow: 1,
  marginLeft: theme.spacing(2),
}));

const ArrowBackIcon = styled(ArrowBack)<IconProps>(({ theme }) => ({
  color: theme.palette.common.white,
}));

const CloseIcon = styled(Close)<IconProps>(({ theme }) => ({
  color: theme.palette.common.white,
}));

type HeaderSearchItemProps = {
  onCloseSearch: () => void;
};
const HeaderSearchItem: React.FC<HeaderSearchItemProps> = (props) => {
  const { onCloseSearch } = props;

  const { searchInputValue, handleOnClearSearchInput, handleOnUpdateSearchInput } = useSearch();

  return (
    <AppBar elevation={0} position="static" color="success">
      <Toolbar>
        <BackButton onClick={onCloseSearch}>
          <ArrowBackIcon />
        </BackButton>

        <SearchInput
          autoFocus
          placeholder="Search"
          value={searchInputValue}
          onChange={(event) => handleOnUpdateSearchInput(event)}
        />

        {searchInputValue && (
          <CloseButton onClick={handleOnClearSearchInput}>
            <CloseIcon />
          </CloseButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderSearchItem;
