import React from "react";

export const useToggle = () => {
  const [isOpenToggle, setIsOpenToggle] = React.useState(false);

  const handleOpenToggle = () => {
    setIsOpenToggle(true);
  };

  const handleCloseToggle = () => {
    setIsOpenToggle(false);
  };

  return { isOpenToggle, handleOpenToggle, handleCloseToggle };
};
