import { ArrowBack } from "@mui/icons-material";
import {
  IconButton,
  Typography,
  ButtonBase,
  styled,
  Theme,
  IconProps,
  IconButtonProps,
  ButtonBaseProps,
  TypographyProps,
} from "@mui/material";
import { LinkProps } from "react-router-dom";

export const BackButton = styled(IconButton)<IconButtonProps & LinkProps>(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    marginRight: theme.spacing(2),
    marginLeft: `-${theme.spacing(1)}`,
  })
);

export const ArrowBackIcon = styled(ArrowBack)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const TransactionNumber = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({
  flexGrow: 1,
}));

export const RefundButton = styled(ButtonBase)<ButtonBaseProps & LinkProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.body1,
    minHeight: "inherit",
    padding: theme.spacing(2),
  })
);
