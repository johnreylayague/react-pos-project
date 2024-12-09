import { MoreVert } from "@mui/icons-material";
import {
  AppBar,
  Typography,
  styled,
  Theme,
  AppBarProps,
  IconProps,
  TypographyProps,
  Menu,
  MenuProps,
} from "@mui/material";

export const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme }: { theme: Theme }) => ({
  background: theme.palette.common.white,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const MoreVertIcon = styled(MoreVert)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.black,
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.black,
  flexGrow: 1,
}));

export const MenuStyled = styled(Menu)<MenuProps>(({ theme }: { theme: Theme }) => ({
  "& .MuiMenu-paper	": {
    borderRadius: 0,
  },
}));
