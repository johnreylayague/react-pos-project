import {
  AppBar,
  AppBarProps,
  ListItem,
  ListItemProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const AppBarContainer = styled(AppBar)<AppBarProps>(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.success.main,
  boxShadow: "none",
  position: "static",
}));

export const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
}));

export const ListItemStyled = styled(ListItem)<ListItemProps>(({ theme }: { theme: Theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(2)} ${theme.spacing(3)}`,
}));
