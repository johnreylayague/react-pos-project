import { Search } from "@mui/icons-material";
import {
  Drawer,
  Button,
  ButtonProps,
  DrawerProps,
  ToolbarProps,
  Toolbar,
  IconProps,
  ListItemTextProps,
  ListItemText,
  ListItemButtonProps,
  ListItemButton,
  ListItemProps,
  ListItem,
} from "@mui/material";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { drawerWidth } from "../../utils/componentStyles";

export const DrawerStyled = styled(Drawer)<DrawerProps>(({ theme }: { theme: Theme }) => ({
  width: drawerWidth,
  boxShadow: theme.shadows[4],
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "content-box",
  },
}));

export const ButtonStyled = styled(Button)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h5,
  color: theme.palette.common.white,
  textTransform: "capitalize",
}));

export const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.success.main,
  justifyContent: "space-between",
}));

export const SearchIconStyled = styled(Search)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const ListItemTextStyled = styled(ListItemText)<ListItemTextProps>(({ theme }) => ({
  "&.MuiListItemText-root": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "stretch",
    margin: 0,
  } as CSSObject,
  "& .MuiListItemText-primary": {
    ...theme.typography.subtitle1,
    color: theme.palette.common.black,
    display: "block",
  } as CSSObject,
  "& .MuiListItemText-secondary": {
    ...theme.typography.subtitle1,
    color: theme.palette.common.black,
    display: "block",
  } as CSSObject,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingRight: theme.spacing(4),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    padding: `${theme.spacing(0)}
              ${theme.spacing(0)}
              ${theme.spacing(0)}
              ${theme.spacing(4)}`,
  })
);

export const ListItemStyled = styled(ListItem)<ListItemProps>(({ theme }: { theme: Theme }) => ({
  padding: 0,
  // padding: `${theme.spacing(0)}
  //           ${theme.spacing(0)}
  //           ${theme.spacing(0)}
  //           ${theme.spacing(0)}`,
}));
