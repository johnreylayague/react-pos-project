import { ArrowBack } from "@mui/icons-material";
import {
  AppBar,
  AppBarProps,
  ButtonBase,
  ButtonBaseProps,
  IconProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.success.main,
  position: "static",
}));

export const ArrowBackIconStyled = styled(ArrowBack)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  flexGrow: 1,
  marginLeft: theme.spacing(3),
}));

export const ButtonBaseStyled = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.body1,
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    minHeight: "inherit",
  })
);
