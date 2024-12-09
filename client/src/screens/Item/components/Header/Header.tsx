import React from "react";
import HeaderSelectionToolbar from "../HeaderSelectionToolbar/HeaderSelectionToolbar.tsx";
import HeaderSearchToolbar from "../HeaderSearchToolbar/HeaderSearchToolbar.tsx";
import HeaderSearchAndFilterToolbar from "../HeaderSearchAndFilterToolbar/HeaderSearchAndFilterToolbar.tsx";

type HeaderProps = {
  openSearch: () => void;
  closeSearch: () => void;
  onClose: () => void;
  openDialog: () => void;
  isSelectionMode: boolean;
  isSearch: boolean;
  totalSelectedItem: number;
};

const Header: React.FC<HeaderProps> = (props) => {
  const {
    openSearch,
    isSelectionMode,
    isSearch,
    totalSelectedItem,
    closeSearch,
    onClose,
    openDialog,
  } = props;

  if (isSelectionMode) {
    return (
      <HeaderSelectionToolbar
        openDialog={openDialog}
        onClose={onClose}
        totalSelectedItem={totalSelectedItem}
      />
    );
  }

  if (isSearch) {
    return <HeaderSearchToolbar closeSearch={closeSearch} />;
  }

  return (
    <>
      <HeaderSearchAndFilterToolbar openSearch={openSearch} />
    </>
  );
};

export default Header;
