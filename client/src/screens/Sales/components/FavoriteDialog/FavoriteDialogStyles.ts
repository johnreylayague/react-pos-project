import { styled, Theme } from "@mui/material/styles";
import { DialogContent, DialogContentProps } from "@mui/material";

export const DialogContentStyled = styled(DialogContent)<DialogContentProps>(
  ({}: { theme: Theme }) => ({
    padding: 0,
  })
);
