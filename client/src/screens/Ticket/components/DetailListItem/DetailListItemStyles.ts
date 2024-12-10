import {
  styled,
  Theme,
  ListItemTextProps,
  ListItemText,
  TypographyProps,
  Typography,
} from "@mui/material";
import { HTMLAttributes } from "react";

export const Price = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  textAlign: "right",
  flexShrink: 0,
}));

export const Details = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  "& .MuiListItemText-primary": { display: "flex" },
}));

export const Quantity = styled("span")<HTMLAttributes<HTMLSpanElement>>(({ theme }) => ({
  color: "red",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(3),
  flexShrink: 0,
}));

export const ItemName = styled(Typography)<TypographyProps>(({}) => ({}));
