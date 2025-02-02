import { Check } from "@mui/icons-material";
import { Avatar, AvatarProps, IconProps, styled, Theme } from "@mui/material";

export const AvatarStyled = styled(Avatar)<AvatarProps>(({}: { theme: Theme }) => ({
  height: "100%",
  width: "100%",
}));

export const CheckIconStyled = styled(Check)<IconProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1.5),
  },
  position: "absolute",
  color: "#fff",
  padding: theme.spacing(2),
  height: "100%",
  width: "100%",
}));
