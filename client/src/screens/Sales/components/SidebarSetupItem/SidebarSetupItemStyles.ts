import {
  DialogTitle,
  ButtonProps,
  Button,
  Box,
  Typography,
  TypographyProps,
  BoxProps,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const BoxContainerStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  padding: theme.spacing(2),
}));

export const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  textAlign: "center",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
}));
export const TypographyTitleStyled = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    fontWeight: "bold",
  })
);
export const TypographyDescriptionStyled = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.h6,
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  })
);

export const ButtonStyled = styled(Button)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  backgroundColor: theme.palette.success.main,
  width: "100%",
  fontWeight: "bold",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));
