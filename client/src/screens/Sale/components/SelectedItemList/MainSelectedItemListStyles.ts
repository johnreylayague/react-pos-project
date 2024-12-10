import { HTMLAttributes } from "react";
import {
  Box,
  BoxProps,
  Divider,
  DividerProps,
  List,
  ListItemText,
  ListItemTextProps,
  ListProps,
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

export const ListStyled = styled(List)<ListProps>(({}) => ({
  overflowY: "auto",
}));

export const Detail = styled(ListItemText)<ListItemTextProps>(({}) => ({
  "& .MuiListItemText-primary": { display: "flex" },
}));

export const Price = styled(ListItemText)<ListItemTextProps>(({}) => ({
  textAlign: "right",
  flexShrink: 0,
}));

export const Label = styled(ListItemText)<ListItemTextProps>(({}) => ({
  "& .MuiListItemText-primary": { fontWeight: "bold" },
}));

export const TotalPrice = styled(ListItemText)<ListItemTextProps>(({}) => ({
  "& .MuiListItemText-primary": { fontWeight: "bold", textAlign: "right" },
}));

export const DividerStyled = styled(Divider)<DividerProps>(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}));

export const ItemName = styled(Typography)<TypographyProps>(({}) => ({}));

export const ActionBox = styled(Box)<BoxProps>(({ theme }) => ({
  padding: `0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  marginTop: "auto",
}));
