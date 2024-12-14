import { TypographyProps, Typography, styled, Theme } from "@mui/material";

export const ResultMessage = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(3),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));
