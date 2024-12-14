import { ArrowBack, Search } from "@mui/icons-material";
import {
  ToolbarProps,
  Toolbar,
  IconProps,
  styled,
  Theme,
  IconButtonProps,
  IconButton,
  ButtonBase,
  ButtonBaseProps,
  MenuProps,
  Menu,
  MenuItemProps,
  MenuItem,
} from "@mui/material";
import { LinkProps } from "react-router-dom";

export const SearchIcon = styled(Search)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const ArrowBackIcon = styled(ArrowBack)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "unset",
  },
}));

export const SearchButton = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: "auto",
  },
}));

export const BackButton = styled(IconButton)<IconButtonProps | LinkProps>(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "inline-flex",
    },
    display: "none",
  })
);

export const ButtonBaseStyled = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.h6,
    padding: theme.spacing(1),
  })
);

export const MenuStyled = styled(Menu)<MenuProps>(({}: { theme: Theme }) => ({
  "& .MuiMenu-paper": {
    borderRadius: 0,
  },
}));

export const MenuItemStyled = styled(MenuItem)<MenuItemProps>(({ theme }: { theme: Theme }) => ({
  paddingRight: theme.spacing(4),
}));
