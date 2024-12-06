import React from "react";
import HeaderFilterItem from "./HeaderFilterItem/HeaderFilterItem";
import HeaderSearchItem from "./HeaderSearchItem/HeaderSearchItem";
import {
  handleOnToggleIsSearchProps,
  handleOnOpenDrawerProps,
  handleOnUpdateSearchInputProps,
  handleOnClearSearchInputProps,
  handleOnCloseDropdownProps,
  handleOnOpenDropdownProps,
} from "../../../hooks/Sale/useSearch";

type HeaderProps = {
  isSearch: boolean;
  isOpenDropdown: boolean;
  inputSearchValue: string;
  onOpenDrawer: handleOnOpenDrawerProps;
  onToggleIsSearch: handleOnToggleIsSearchProps;
  onUpdateSearchInput: handleOnUpdateSearchInputProps;
  onClearSearchInput: handleOnClearSearchInputProps;
  anchorElDropdown: null | HTMLElement;
  onOpenDropdown: handleOnOpenDropdownProps;
  onCloseDropdown: handleOnCloseDropdownProps;
};
const Header: React.FC<HeaderProps> = (props) => {
  const {
    onOpenDrawer,
    onToggleIsSearch,
    isSearch,
    inputSearchValue,
    onUpdateSearchInput,
    onClearSearchInput,
    isOpenDropdown,
    onCloseDropdown,
    onOpenDropdown,
    anchorElDropdown,
  } = props;

  return (
    <>
      {isSearch && (
        <HeaderSearchItem
          inputSearchValue={inputSearchValue}
          onUpdateSearchInput={onUpdateSearchInput}
          onToggleIsSearch={onToggleIsSearch}
          onClearSearchInput={onClearSearchInput}
        />
      )}
      {!isSearch && (
        <HeaderFilterItem
          anchorElDropdown={anchorElDropdown}
          isOpenDropdown={isOpenDropdown}
          onCloseDropdown={onCloseDropdown}
          onOpenDropdown={onOpenDropdown}
          onOpenDrawer={onOpenDrawer}
          onToggleIsSearch={onToggleIsSearch}
        />
      )}
    </>
  );
};

export default Header;
