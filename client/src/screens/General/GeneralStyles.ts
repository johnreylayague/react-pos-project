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
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));
