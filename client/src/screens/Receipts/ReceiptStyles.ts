import {
  Container,
  ContainerProps,
  Box,
  BoxProps,
  Paper,
  PaperProps,
  styled,
  CSSObject,
  Theme,
} from "@mui/material";

export const ContainerStyled = styled(Container)<ContainerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingTop: 0,
    paddingBottom: 0,
  } as CSSObject,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: `calc(100dvh - 56px)`,
  } as CSSObject,
  overflowY: "auto",
  height: `calc(100dvh - 64px)`,
}));

export const PaperStyled = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    boxShadow: "none",
    paddingLeft: 0,
    paddingRight: 0,
  },
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
  background: theme.palette.common.white,
}));
