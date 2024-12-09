import { AppBar, AppBarProps, Typography, TypographyProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

export const TotalSelectedText = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.h6,
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    color: theme.palette.common.black,
  })
);
