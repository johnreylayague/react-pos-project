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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saleActions } from "../../../../store/sale-slice";
import { storeProps } from "../../../../store";

const BackButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
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

type HeaderSearchItemProps = {};
const HeaderSearchItem: React.FC<HeaderSearchItemProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();
  const searchInputValue = useSelector((state: storeProps) => state.sale.searchInputValue);

  useEffect(() => {
    return () => {
      dispatch(saleActions.updateSearchInputValue(""));
    };
  }, []);

  const handleOnCloseSearch = () => {
    dispatch(saleActions.handleOnCloseSearch());
  };

  const handleOnUpdateSearchInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    dispatch(saleActions.updateSearchInputValue(value));
  };

  const handleOnClearSearchInput = () => {
    dispatch(saleActions.updateSearchInputValue(""));
  };

  return (
    <AppBar elevation={0} position="static" color="success">
      <Toolbar>
        <BackButton onClick={handleOnCloseSearch}>
          <ArrowBackIcon />
        </BackButton>

        <SearchInput
          autoFocus
          placeholder="Search"
          value={searchInputValue}
          onChange={handleOnUpdateSearchInput}
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
