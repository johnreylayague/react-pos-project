import {
  Container,
  Paper,
  Divider,
  Box,
  styled,
  Theme,
  BoxProps,
  List,
  ListSubheader,
  ListSubheaderProps,
  DividerProps,
  PaperProps,
  ListProps,
  CSSObject,
  ContainerProps,
} from "@mui/material";

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
    marginBottom: 0,
  } as CSSObject,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

export const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  } as CSSObject,
  display: "flex",
  gap: theme.spacing(3),
}));

export const ListStyled = styled(List)<ListProps>(({ theme }: { theme: Theme }) => ({
  marginTop: theme.spacing(1),
}));

export const ListSubheaderStyled = styled(ListSubheader)<ListSubheaderProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.success.main,
  })
);

export const DividerStyled = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginRight: `-${theme.spacing(2)}`,
    marginLeft: `-${theme.spacing(2)}`,
  } as CSSObject,
  marginRight: `-${theme.spacing(3)}`,
  marginLeft: `-${theme.spacing(3)}`,
}));
