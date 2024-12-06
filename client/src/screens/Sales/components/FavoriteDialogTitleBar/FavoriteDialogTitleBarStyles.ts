import { styled, Theme } from "@mui/material/styles";
import {
  IconButtonProps,
  Typography,
  TypographyProps,
  Box,
  BoxProps,
  IconButton,
} from "@mui/material";

export const BoxHeaderStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: `${theme.spacing(1)} ${theme.spacing(4)} ${theme.spacing(1)} ${theme.spacing(4)}`,
}));

export const IconButtonStyled = styled(IconButton)<IconButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    marginRight: theme.spacing(3),
  })
);

export const TypographyHeaderStyled = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.h5,
    fontWeight: "bold",
    flexGrow: 1,
  })
);
