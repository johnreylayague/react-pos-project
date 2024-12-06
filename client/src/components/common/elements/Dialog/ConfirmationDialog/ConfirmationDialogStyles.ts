import {
  DialogTitleProps,
  DialogTitle,
  DialogActions,
  DialogActionsProps,
  ButtonProps,
  DialogContent,
  DialogContentProps,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import TextButton from "../../Button/TextButton/TextButton";

export const DialogTitleStyled = styled(DialogTitle)<DialogTitleProps>(
  ({ theme }: { theme: Theme }) => ({
    fontWeight: "bold",
  })
);

export const DialogContentStyled = styled(DialogContent)<DialogContentProps>(
  ({ theme }: { theme: Theme }) => ({
    paddingBottom: 0,
  })
);

export const DialogActionsStyled = styled(DialogActions)<DialogActionsProps>(
  ({ theme }: { theme: Theme }) => ({
    paddingBottom: 0,
    paddingRight: theme.spacing(3),
  })
);

export const TextButtonStyled = styled(TextButton)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  borderRadius: 0,
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
}));
