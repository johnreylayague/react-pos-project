import { Avatar, AvatarProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const AvatarStyled = styled(Avatar)<AvatarProps>(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.success.main,
  position: "absolute",
  left: 0,
  top: 0,
}));
