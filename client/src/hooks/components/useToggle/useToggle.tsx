import React from "react";

type useToggleProps = (initialState?: boolean) => {
  isOpenToggle: boolean;
  handleOpenToggle: () => void;
  handleCloseToggle: () => void;
};

export const useToggle: useToggleProps = (initialState = false) => {
  const [isOpenToggle, setIsOpenToggle] = React.useState(initialState);

  const handleOpenToggle = () => {
    setIsOpenToggle(true);
  };

  const handleCloseToggle = () => {
    setIsOpenToggle(false);
  };

  return { isOpenToggle, handleOpenToggle, handleCloseToggle };
};
