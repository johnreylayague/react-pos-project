import { ArrowBack, Close } from "@mui/icons-material";
import { IconProps, InputBase, InputBaseProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const ArrowBackIconStyled = styled(ArrowBack)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const CloseIconStyled = styled(Close)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const SearchInputField = styled(InputBase)<InputBaseProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  flexGrow: 1,
  color: theme.palette.common.white,
}));
