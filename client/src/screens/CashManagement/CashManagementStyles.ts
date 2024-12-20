import { HTMLAttributes } from "react";
import {
  Box,
  Container,
  Divider,
  ListSubheader,
  Paper,
  CSSObject,
  styled,
  PaperProps,
  Theme,
  ListSubheaderProps,
  DividerProps,
  BoxProps,
  ContainerProps,
  ListItemText,
  ListItemTextProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export const ListSubheaderStyled = styled(ListSubheader)<ListSubheaderProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.success.main,
  })
);

export const DividerStyled = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: `-${theme.spacing(2)}`,
    marginRight: `-${theme.spacing(2)}`,
  } as CSSObject,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(0.5),
  marginLeft: `-${theme.spacing(3)}`,
  marginRight: `-${theme.spacing(3)}`,
}));

export const PaperStyled = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    boxShadow: "none",
    paddingLeft: 0,
    paddingRight: 0,
  } as CSSObject,
  boxShadow: theme.shadows[3],
  padding: `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(1)} ${theme.spacing(3)}`,
}));

export const ContainerStyled = styled(Container)<ContainerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
  },
  marginTop: theme.spacing(3),
}));

export const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  display: "flex",
  gap: theme.spacing(3),
}));

export const CashPayment = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  flexGrow: 0,
  flexShrink: 0,
}));

export const PaymentDate = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  flexGrow: 0,
  flexShrink: 0,
}));

export const Details = styled(ListItemText)<ListItemTextProps>(({ theme }: { theme: Theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const Comment = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.action.active,
}));
