import {
  Box,
  BoxProps,
  List,
  Icon,
  ListProps,
  ListItem,
  ListItemProps,
  ListItemButton,
  ListItemButtonProps,
  ListItemTextProps,
  ListItemText,
  IconProps,
} from "@mui/material";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import { LinkProps } from "react-router-dom";

export const SidebarContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  ...theme.applyStyles("light", {
    backgroundColor: theme.palette.common.white,
  }),
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.customPrimary.dark,
  }),
  [theme.breakpoints.up("sm")]: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  height: `calc(100vh - 64px)`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const ListStyled = styled(List)<ListProps>(({ theme }: { theme: Theme }) => ({
  overflowY: "auto",
}));

export const ListItemTextStyled = styled(ListItemText)<ListItemTextProps & { selected?: boolean }>(
  ({ theme, selected }: { theme: Theme; selected?: boolean }) => ({
    color: selected ? theme.palette.success.main : "inherit",
  })
);

export const IconStyled = styled(Icon)<IconProps & { selected?: boolean }>(
  ({ theme, selected }: { theme: Theme; selected?: boolean }) => ({
    color: selected ? theme.palette.success.main : "inherit",
  })
);

export const ListItemStyled = styled(ListItem)<ListItemProps>(({ theme }: { theme: Theme }) => ({
  padding: 0,
}));

export const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps & LinkProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.applyStyles("light", {
      "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: theme.palette.customPrimaryListItemButton.light,
      } as CSSObject,
    }),
    ...theme.applyStyles("dark", {
      "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: theme.palette.customPrimaryListItemButton.dark,
      } as CSSObject,
    }),
    padding: `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(2)} ${theme.spacing(3)} `,
  })
);
