import { styled, Theme, CSSObject } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  IconButtonProps,
  ButtonProps,
  Button,
  Typography,
  TypographyProps,
  Box,
  BoxProps,
  IconButton,
  Tab,
  TabProps,
  DialogContent,
  DialogContentProps,
  ListItemTextProps,
  ListItemText,
  ListItemButtonProps,
  ListItemButton,
  ListItemProps,
  ListItem,
} from "@mui/material";

export const BoxHeaderStyled = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: `${theme.spacing(1)} ${theme.spacing(4)} ${theme.spacing(1)} ${theme.spacing(4)}`,
}));

export const IconButtonStyled = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  marginRight: theme.spacing(3),
}));

export const TypographyHeaderStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.h5,
  fontWeight: "bold",
  flexGrow: 1,
}));

export const BoxTabStyled = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

export const IconButtonSearchStyled = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  position: "absolute",
  top: "50%",
  right: 13,
  transform: "translate(-50%,-50%)",
}));

export const TabStyled = styled(Tab)<TabProps>(({ theme }) => ({
  ...theme.typography.body1,
  fontWeight: "bold",
  "&.Mui-selected": { color: theme.palette.success.main },
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

export const DialogContentStyled = styled(DialogContent)<DialogContentProps>(({ theme }) => ({
  padding: 0,
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
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
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
}));
