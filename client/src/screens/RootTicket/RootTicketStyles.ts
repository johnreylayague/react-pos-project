import { HTMLAttributes } from "react";
import {
  AppBar,
  AppBarProps,
  Box,
  BoxProps,
  Divider,
  DividerProps,
  List,
  ListItemText,
  ListItemTextProps,
  ListProps,
  Typography,
  TypographyProps,
  styled,
  Theme,
} from "@mui/material";

const sideBarWidth = {
  xs: "100%",
  sm: "100%",
  md: 260,
  lg: 490,
};

export const RootContainer = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  display: "flex",
  height: "100dvh",
}));

export const SidebarContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("md")]: {
    maxWidth: sideBarWidth.md,
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  flex: 1,
  display: "flex",
  flexDirection: "column",
  maxWidth: sideBarWidth.lg,
  borderRight: `1px solid ${theme.palette.divider}`,
}));

export const ContentContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("md")]: {
    maxWidth: `calc(100vw - ${sideBarWidth.md}px)`,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
  flex: 1,
  maxWidth: `calc(100vw - ${sideBarWidth.md}px)`,
  width: "100%",
}));

export const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.black,
}));

export const ListStyled = styled(List)<ListProps>(({}: { theme: Theme }) => ({
  overflowY: "auto",
}));

export const ItemPrice = styled(List)<ListProps>(({}: { theme: Theme }) => ({
  textAlign: "right",
  flexShrink: 0,
}));

export const ItemName = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({}));

export const ItemDetails = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  "& .MuiListItemText-primary": { display: "flex" },
}));

export const Quantity = styled("span")<HTMLAttributes<HTMLSpanElement>>(({ theme }) => ({
  color: "red",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(3),
  flexShrink: 0,
}));

export const DividerStyled = styled(Divider)<DividerProps>(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}));

export const TotalAmount = styled(ListItemText)<ListItemTextProps>(({}) => ({
  "& .MuiListItemText-primary": { fontWeight: "bold", textAlign: "right" },
}));

export const TotalText = styled(ListItemText)<ListItemTextProps>(({}) => ({
  "& .MuiListItemText-primary": { fontWeight: "bold" },
}));
