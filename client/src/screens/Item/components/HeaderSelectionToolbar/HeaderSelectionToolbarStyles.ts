import { styled, Theme, AppBar, AppBarProps, TypographyProps, Typography } from "@mui/material";

export const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

export const SelectedCount = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  flexGrow: 1,
  marginLeft: theme.spacing(3),
  color: theme.palette.common.black,
}));
