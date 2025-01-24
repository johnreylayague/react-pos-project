import {
  Container,
  Grid2,
  styled,
  Theme,
  ContainerProps,
  Grid2Props,
  CSSObject,
  List,
  Box,
  Button,
  BoxProps,
  ListProps,
  ButtonProps,
} from "@mui/material";

export const ContainerStyled = styled(Container)<ContainerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
    marginBottom: 0,
  } as CSSObject,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

export const Grid2Styled = styled(Grid2)<Grid2Props>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  } as CSSObject,
}));

export const MobileList = styled(List)<ListProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(2)}`,
  marginRight: `-${theme.spacing(2)}`,
  overflowY: "auto",
}));

export const MobileButtonRefund = styled(Button)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  marginTop: "auto",
  marginBottom: theme.spacing(2),
}));

export const MobileView = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  display: "flex",
  flexDirection: "column",
  height: "calc(100dvh - 56px)",
}));
