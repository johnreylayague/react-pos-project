import {
  IconProps,
  IconButtonProps,
  IconButton,
  styled,
  Theme,
  InputBaseProps,
  InputBase,
} from "@mui/material";
import { Close, ArrowBack } from "@mui/icons-material";

export const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const CloseIcon = styled(Close)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const ArrowBackIcon = styled(ArrowBack)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const SearchInput = styled(InputBase)<InputBaseProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  flexGrow: 1,
  color: theme.palette.common.white,
}));
