import {
  Dialog,
  Toolbar,
  IconButton,
  Typography,
  ButtonBase,
  FormControl,
  styled,
  Theme,
  DialogProps,
  ToolbarProps,
  TypographyProps,
  ButtonBaseProps,
  IconButtonProps,
  FormControlProps,
} from "@mui/material";

export const DialogStyled = styled(Dialog)<DialogProps>(({}: { theme: Theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: 0,
  },
}));

export const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const DialogTitle = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  flexGrow: 1,
  paddingLeft: theme.spacing(3),
}));

export const SaveButton = styled(ButtonBase)<ButtonBaseProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.body2,
  [theme.breakpoints.down("sm")]: {
    marginRight: `-${theme.spacing(2)}`,
  },
  minHeight: "inherit",
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  color: theme.palette.success.main,
  marginRight: `-${theme.spacing(3)}`,
}));

export const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginRight: `-${theme.spacing(1)}`,
}));

export const FormControlStyled = styled(FormControl)<FormControlProps>(
  ({ theme }: { theme: Theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  })
);
