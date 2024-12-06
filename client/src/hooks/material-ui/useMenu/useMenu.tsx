import React from "react";

export const useMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return { anchorEl, isOpen, handleOpenMenu, handleCloseMenu };
};
