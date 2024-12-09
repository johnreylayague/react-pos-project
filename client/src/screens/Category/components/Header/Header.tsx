import React from "react";
import HeaderSelectionToolbar from "../HeaderSelectionToolbar/HeaderSelectionToolbar.tsx";
import HeaderSearchToolbar from "../HeaderSearchToolbar/HeaderSearchToolbar.tsx";
import HeaderSearchAndFilterToolbar from "../HeaderSearchAndFilterToolbar/HeaderSearchAndFilterToolbar.tsx";

type HeaderProps = {
  isSelectionMode: boolean;
  isSearch: boolean;
  totalSelectedCategory: number;
  onClose: () => void;
  closeSearch: () => void;
  openSearch: () => void;
  openDialog: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  const {
    openDialog,
    isSearch,
    isSelectionMode,
    totalSelectedCategory,
    onClose,
    closeSearch,
    openSearch,
  } = props;

  if (isSelectionMode) {
    return (
      <HeaderSelectionToolbar
        openDialog={openDialog}
        onClose={onClose}
        totalSelectedCategory={totalSelectedCategory}
      />
    );
  }

  if (isSearch) {
    return <HeaderSearchToolbar closeSearch={closeSearch} />;
  }

  return (
    <>
      <HeaderSearchAndFilterToolbar title="Categories" openSearch={openSearch} />
    </>
  );
};

export default Header;
