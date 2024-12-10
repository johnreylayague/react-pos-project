import { HTMLAttributes } from "react";
import {
  Theme,
  styled,
  List,
  ListItemText,
  ListItemTextProps,
  ListProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export const ItemDetails = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  "& .MuiListItemText-primary": { display: "flex" },
}));

export const ItemName = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({}));

export const Quantity = styled("span")<HTMLAttributes<HTMLSpanElement>>(({ theme }) => ({
  color: "red",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(3),
  flexShrink: 0,
}));

export const ItemPrice = styled(List)<ListProps>(({}: { theme: Theme }) => ({
  textAlign: "right",
  flexShrink: 0,
}));
