import { Typography, TypographyProps, Input, InputProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const TypographyStyled = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.success.main,
    paddingBottom: theme.spacing(1),
    fontWeight: "bold",
    display: "block",
  })
);

export const InputStyled = styled(Input)<InputProps>(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));
