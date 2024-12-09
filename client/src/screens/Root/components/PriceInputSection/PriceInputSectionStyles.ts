import { InputLabel, InputLabelProps, Input, InputProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const InputLabelStyled = styled(InputLabel)<InputLabelProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.success.main,
    transform: "none",
    fontWeight: "bold",
    position: "static",
    paddingBottom: theme.spacing(1),
  })
);

export const InputStyled = styled(Input)<InputProps>(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  "&.MuiInput-root": {
    marginTop: "0",
  },
}));
