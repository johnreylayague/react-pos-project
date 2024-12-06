import {
  CSSObject,
  StackProps,
  Stack,
  Divider,
  DividerProps,
  Paper,
  PaperProps,
  ButtonBaseProps,
  ButtonBase,
  IconProps,
  ContainerProps,
  Container,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { Delete } from "@mui/icons-material";

export const ImgStyled = styled("img")<{
  src: string;
  alt: string;
}>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "160px",
  } as CSSObject,
  position: "relative",
  width: "100%",
  height: "80px",
}));

export const ButtonActions = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  flexDirection: "row",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  gap: theme.spacing(3),
}));

export const FieldGroup = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

export const DividerStyled = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

export const Form = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
  },
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

export const DeleteActionButton = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
    width: "100%",
    padding: `${theme.spacing(1.142)} ${theme.spacing(3)}`,
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
  })
);

export const DeleteIconStyled = styled(Delete)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: "#757575",
  marginRight: theme.spacing(1),
}));

export const StackStyled = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const ContainerStyled = styled(Container)<ContainerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: 0,
  },
  paddingTop: theme.spacing(3),
}));
