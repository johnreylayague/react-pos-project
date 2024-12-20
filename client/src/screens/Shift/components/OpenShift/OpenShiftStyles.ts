import {
  Container,
  ContainerProps,
  CSSObject,
  Paper,
  PaperProps,
  styled,
  Theme,
} from "@mui/material";

export const PaperStyled = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    boxShadow: "none",
    paddingLeft: 0,
    paddingRight: 0,
  } as CSSObject,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
}));

export const ContainerStyled = styled(Container)<ContainerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
    marginBottom: 0,
  } as CSSObject,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));
