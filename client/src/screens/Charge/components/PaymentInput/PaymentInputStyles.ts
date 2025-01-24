import { IconProps, Input, InputProps, BoxProps, Box } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { Payments } from "@mui/icons-material";

export const PaymentsIcon = styled(Payments)<IconProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  marginRight: theme.spacing(2),
  color: theme.palette.action.active,
  marginTop: theme.spacing(2),
}));

export const InputStyled = styled(Input)<InputProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  minHeight: 58,
}));

export const PaymentWrapper = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  display: "flex",
  alignItems: "flex-start",
}));
