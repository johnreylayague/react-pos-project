import { HTMLAttributes } from "react";
import {
  IconProps,
  ListItemText,
  ListItemTextProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import { Warning } from "@mui/icons-material";

export const Quantity = styled("span")<HTMLAttributes<HTMLSpanElement>>(({ theme }) => ({
  color: theme.palette.action.active,
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

export const WarningIcon = styled(Warning)<IconProps>(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const AlertNotification = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.error.main,
}));
