import { styled, Theme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { ButtonProps, Button, Typography, TypographyProps } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export const ButtonStyled = styled(Button)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  width: "100%",
  backgroundColor: "#e2e2e2",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  color: "inherit",
}));

export const TypographyStyled = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.h6,
    textTransform: "capitalize",
  })
);
