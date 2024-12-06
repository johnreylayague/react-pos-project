import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { IconButton, Menu, styled, Theme, MenuProps } from "@mui/material";
import React from "react";

const MenuStyled = styled(Menu)<MenuProps>(({ theme }: { theme: Theme }) => ({
  "& .MuiMenu-paper	": {
    borderRadius: 0,
  },
}));

type OptionsMenuProps = {
  isOpen: boolean;
  anchorEl: null | HTMLElement;
  onClose: () => void;
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id: string;
  content: React.ReactNode;
  children: React.ReactNode;
};
const OptionsMenu: React.FC<OptionsMenuProps> = (props) => {
  const { children, onClose, onOpen, anchorEl, isOpen, content, id } = props;

  return (
    <div>
      <IconButton onClick={onOpen}>{content}</IconButton>
      <MenuStyled
        id={id}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={onClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {children}
      </MenuStyled>
    </div>
  );
};

export default OptionsMenu;
