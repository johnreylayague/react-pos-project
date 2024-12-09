import {
  AppBar,
  AppBarProps,
  IconButton,
  IconButtonProps,
  IconProps,
  Toolbar,
  ToolbarProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { LinkProps } from "react-router-dom";

export const AppBarContainer = styled(AppBar)<
  AppBarProps & { style?: { "--Paper-overlay": string; "--Paper-shadow": string } }
>(({ theme }: { theme: Theme }) => ({
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

export const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  justifyContent: "space-between",
}));

export const IconButtonStyled = styled(IconButton)<IconButtonProps & LinkProps>(
  ({ theme }: { theme: Theme }) => ({
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-flex",
      marginRight: theme.spacing(3),
    } as CSSObject,
  })
);

export const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  fontWeight: "bold",
}));

export const ArrowBackIconStyled = styled(ArrowBackIcon)<IconProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.common.white,
  })
);
