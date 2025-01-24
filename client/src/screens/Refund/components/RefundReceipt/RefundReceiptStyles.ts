import {
  Paper,
  styled,
  Theme,
  Box,
  BoxProps,
  PaperProps,
  Button,
  ButtonProps,
  List,
  ListProps,
} from "@mui/material";

export const RefundContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  padding: `${theme.spacing(0)} ${theme.spacing(2)} ${theme.spacing(2)}`,
  marginTop: "auto",
}));

export const PaperStyled = styled(Paper)<PaperProps>(({}: { theme: Theme }) => ({
  height: `calc(100vh - 112px)`,
  minHeight: "350px",
  display: "flex",
  flexDirection: "column",
}));
export const ListStyled = styled(List)<ListProps>(({}: { theme: Theme }) => ({
  overflowY: "auto",
}));

export const RefundButton = styled(Button)<ButtonProps>(({}: { theme: Theme }) => ({}));
