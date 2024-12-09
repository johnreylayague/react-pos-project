import { HTMLAttributes } from "react";
import {
  ListItemText,
  ListItemTextProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";

export const Quantity = styled("span")<HTMLAttributes<HTMLSpanElement>>(({ theme }) => ({
  color: "red",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(3),
  flexShrink: 0,
}));

export const Detail = styled(ListItemText)<ListItemTextProps>(({}) => ({
  "& .MuiListItemText-primary": { display: "flex" },
}));

export const ItemName = styled(Typography)<TypographyProps>(({}) => ({}));

export const Price = styled(ListItemText)<ListItemTextProps>(({}) => ({
  textAlign: "right",
  flexShrink: 0,
}));
