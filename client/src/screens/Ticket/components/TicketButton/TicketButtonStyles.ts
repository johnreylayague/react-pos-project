import { ConfirmationNumber } from "@mui/icons-material";
import {
  styled,
  BoxProps,
  Box,
  ButtonBaseProps,
  ButtonBase,
  BadgeProps,
  Badge,
  IconProps,
} from "@mui/material";
import { LinkProps } from "react-router-dom";

export const ButtonWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  paddingLeft: theme.spacing(1),
  minHeight: "inherit",
}));

export const TicketButtonStyled = styled(ButtonBase)<ButtonBaseProps & LinkProps>(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { display: "none" },
  ...theme.typography.h6,
  minHeight: "inherit",
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
}));

export const BadgeStyled = styled(Badge)<BadgeProps>(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));

export const ConfirmationNumberIcon = styled(ConfirmationNumber)<IconProps>(({}) => ({}));
