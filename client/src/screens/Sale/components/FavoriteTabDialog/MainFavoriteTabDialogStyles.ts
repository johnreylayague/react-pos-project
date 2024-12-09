import {
  Dialog,
  IconButton,
  Box,
  Typography,
  styled,
  DialogProps,
  IconButtonProps,
  TypographyProps,
  BoxProps,
} from "@mui/material";

export const DialogStyled = styled(Dialog)<DialogProps>(({}) => ({
  "& .MuiPaper-root": { borderRadius: 0, height: "100%" },
}));
export const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));
export const DialogTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  flexGrow: 1,
  paddingLeft: theme.spacing(2),
}));

export const TabsContainer = styled(Box)<BoxProps>(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  position: "relative",
}));
