import { ButtonProps, Button, Input, InputProps, TypographyProps, Typography } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const ButtonQuantityStyled = styled(Button)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  borderRadius: 0,
  backgroundColor: theme.palette.grey[100],
  border: `1px solid #e2e2e2`,
  color: theme.palette.grey[800],
}));

export const InputStyled = styled(Input)<InputProps>(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

export const TypographyStyled = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.success.main,
    fontWeight: "bold",
    display: "block",
    marginBottom: theme.spacing(2),
  })
);
