import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogProps,
  IconButton,
  IconButtonProps,
  IconProps,
  Stack,
  StackProps,
  styled,
  Toolbar,
  ToolbarProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export const DialogStyled = styled(Dialog)<DialogProps>(({}) => ({
  "& .MuiDialog-paper": {
    borderRadius: 0,
  },
}));

export const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

export const CloseIcon = styled(Close)<IconProps>(({}) => ({}));

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginLeft: theme.spacing(3),
  flexGrow: 1,
}));

export const StackStyled = styled(Stack)<StackProps>(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));
