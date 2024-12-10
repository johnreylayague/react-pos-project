import { Paper, PaperProps, Typography, TypographyProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const PaperStyled = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
    padding: `${theme.spacing(3)} ${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(2)}`,
  },
  padding: `${theme.spacing(2)} ${theme.spacing(3)} ${theme.spacing(3)}`,
  boxShadow: theme.shadows[3],
  borderRadius: 1,
  backgroundColor: theme.palette.background.paper,
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  marginBottom: theme.spacing(3),
}));
