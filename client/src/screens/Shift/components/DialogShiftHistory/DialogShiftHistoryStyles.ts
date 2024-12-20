import { styled, Dialog, DialogProps, Theme } from "@mui/material";

export const DialogStyled = styled(Dialog)<DialogProps>(({}: { theme: Theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
    my: 0,
  },
  "& .MuiDialog-paper": {
    height: "100%",
  },
}));
