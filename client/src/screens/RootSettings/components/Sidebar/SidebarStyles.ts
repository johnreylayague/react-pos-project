import {
  Box,
  BoxProps,
  ButtonBase,
  ButtonBaseProps,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
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
  height: `calc(100dvh - 64px)`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const EmailDisplay = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: "#a5a5a5",
}));

export const SignOutButton = styled(ButtonBase)<ButtonBaseProps>(({ theme }: { theme: Theme }) => ({
  ...theme.applyStyles("light", {
    backgroundColor: theme.palette.customSecondaryButton.light,
  }),
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.customSecondaryButton.dark,
  }),
  ...theme.typography.body1,
  padding: `${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)}`,
  borderRadius: 1,
  border: `1px solid ${theme.palette.divider}`,
}));

export const SidebarActionsContainer = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(3),
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
