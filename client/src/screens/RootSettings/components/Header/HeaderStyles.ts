import { AppBar, AppBarProps, IconProps, Typography, TypographyProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { Menu } from "@mui/icons-material";

export const AppBarContainer = styled(AppBar)<
  AppBarProps & { style?: { "--Paper-overlay": string; "--Paper-shadow": string } }
>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.up("sm")]: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  ...theme.applyStyles("light", {
    backgroundColor: theme.palette.customPrimary.light,
    boxShadow: "none",
  }),
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.customPrimary.dark,
    boxShadow: theme.shadows[3],
  }),
  position: "relative",
}));

export const MenuIconStyled = styled(Menu)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  marginLeft: theme.spacing(3),
  fontWeight: "bold",
}));
