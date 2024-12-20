import {
  styled,
  Dialog,
  DialogProps,
  Theme,
  IconButton,
  Typography,
  IconButtonProps,
  TypographyProps,
} from "@mui/material";

export const DialogStyled = styled(Dialog)<DialogProps>(({}: { theme: Theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
    my: 0,
  },
  "& .MuiDialog-paper": {
    height: "100%",
  },
}));

export const ButtonClose = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

export const DialogTitleText = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    marginLeft: theme.spacing(3),
  })
);
