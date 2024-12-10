import { ListProps, List, Dialog, DialogProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const ListStyled = styled(List)<ListProps>(({}: { theme: Theme }) => ({
  overflowY: "auto",
}));

export const DialogStyled = styled(Dialog)<DialogProps>(({ theme }: { theme: Theme }) => ({
  "& .MuiDialog-paper": {
    [theme.breakpoints.down("md")]: {
      maxHeight: "100%",
      width: "100%",
      margin: 0,
    },
    "&.MuiDialog-paper": {
      borderRadius: 0,
    },
    height: "100%",
  },
}));
