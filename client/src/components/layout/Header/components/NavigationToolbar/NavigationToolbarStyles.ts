import { Search } from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import {
  BoxProps,
  IconButton,
  IconButtonProps,
  Button,
  ButtonProps,
  IconProps,
  Box,
  MenuItem,
  MenuItemProps,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const IconButtonStyled = styled(IconButton)<IconButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    marginRight: theme.spacing(3),
  })
);

export const MenuIconStyled = styled(Menu)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const BoxStyled = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  flexGrow: 1,
}));

export const SearchIconStyled = styled(Search)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const ButtonStyled = styled(Button)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h5,
  color: theme.palette.common.white,
  fontWeight: "bold",
  textTransform: "capitalize",
}));

export const MenuItemStyled = styled(MenuItem)<MenuItemProps>(({ theme }: { theme: Theme }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(5),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  "&.Mui-selected": {
    backgroundColor: "#f0f0f0",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#f0f0f0",
  },
}));
