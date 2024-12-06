import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { IconButton, IconButtonProps, IconProps, InputBase, InputBaseProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const ArrowBackIconStyled = styled(ArrowBackIcon)<IconProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.common.white,
  })
);

export const IconButtonStyled = styled(IconButton)<IconButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    marginRight: theme.spacing(4),
  })
);

export const InputBaseStyled = styled(InputBase)<InputBaseProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h5,
  color: theme.palette.common.white,
  width: "100%",
}));
