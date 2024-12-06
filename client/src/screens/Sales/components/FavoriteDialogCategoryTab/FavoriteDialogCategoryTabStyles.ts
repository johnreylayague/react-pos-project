import { styled, Theme, CSSObject } from "@mui/material/styles";
import {
  ListItemTextProps,
  ListItemText,
  ListItemButtonProps,
  ListItemButton,
  ListItemProps,
  ListItem,
} from "@mui/material";

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

export const ListItemStyled = styled(ListItem)<ListItemProps>(({}: { theme: Theme }) => ({
  padding: 0,
}));
