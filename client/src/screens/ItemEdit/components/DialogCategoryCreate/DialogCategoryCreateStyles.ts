import {
  ButtonProps,
  DialogActions,
  DialogActionsProps,
  DialogContent,
  DialogContentProps,
  DialogTitle,
  DialogTitleProps,
  Dialog,
  DialogProps,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import TextButton from "../../../../components/common/elements/Button/TextButton/TextButton";

export const DialogStyled = styled(Dialog)<DialogProps>(({}: { theme: Theme }) => ({
  "& .MuiDialog-paper": { borderRadius: 0 },
}));

export const DialogTitleStyled = styled(DialogTitle)<DialogTitleProps>(({}: { theme: Theme }) => ({
  fontWeight: "bold",
}));

export const DialogContentStyled = styled(DialogContent)<DialogContentProps>(
  ({}: { theme: Theme }) => ({})
);

export const DialogActionsStyled = styled(DialogActions)<DialogActionsProps>(
  ({ theme }: { theme: Theme }) => ({
    paddingBottom: theme.spacing(1),
    paddingRight: 0,
  })
);

export const TextButtonStyled = styled(TextButton)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  borderRadius: 0,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));
