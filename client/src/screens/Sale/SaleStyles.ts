import { Box, BoxProps, styled, Theme } from "@mui/material";

const sideBarWidth = {
  xs: "100%",
  sm: "100%",
  md: 270,
  lg: 490,
  xl: 490,
};

export const RootContainer = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  display: "flex",
  height: "100dvh",
}));

export const ContentContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    maxWidth: `calc(100vw - 380px)`,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: `calc(100vw - ${sideBarWidth.md}px)`,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: sideBarWidth.sm,
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: sideBarWidth.sm,
  },
  width: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  maxWidth: `calc(100vw - ${sideBarWidth.lg}px)`,
  overflowX: "hidden",
}));

export const SidebarContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("lg")]: { maxWidth: 380 },
  [theme.breakpoints.down("md")]: {
    maxWidth: sideBarWidth.md,
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  flex: 1,
  maxWidth: sideBarWidth.lg,
  display: "flex",
  flexDirection: "column",
  borderLeft: `1px solid ${theme.palette.divider}`,
}));

export const ActionBox = styled(Box)<BoxProps>(({ theme }) => ({
  padding: `0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  marginTop: "auto",
}));
