import { Menu, styled, Theme, MenuProps } from "@mui/material";

export const MenuStyled = styled(Menu)<MenuProps>(({}: { theme: Theme }) => ({
  "& .MuiMenu-paper	": {
    borderRadius: 0,
  },
}));
