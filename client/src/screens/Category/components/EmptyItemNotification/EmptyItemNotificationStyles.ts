import {
  IconProps,
  Stack,
  StackProps,
  Avatar,
  AvatarProps,
  styled,
  Theme,
  Typography,
  TypographyProps,
  Box,
  BoxProps,
} from "@mui/material";
import { List } from "@mui/icons-material";

export const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "calc(100dvh - 65px)",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  height: "calc(100dvh - 64px)",
}));

export const EmptyItemNotification = styled(Stack)<StackProps>(({}: { theme: Theme }) => ({
  alignItems: "center",
}));

export const AvatarStyled = styled(Avatar)<AvatarProps>(({}: { theme: Theme }) => ({
  backgroundColor: "#f5f5f5",
  height: 100,
  width: 100,
}));

export const ListIcon = styled(List)<IconProps>(({}: { theme: Theme }) => ({
  color: "#9e9e9e",
  fontSize: 65,
  transform: "scaleX(-1)",
}));

export const MainMessage = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.action.active,
}));

export const SubMessage = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.action.active,
}));
