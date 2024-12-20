import {
  ListItem,
  Avatar,
  styled,
  Theme,
  IconProps,
  AvatarProps,
  ListItemProps,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";

export const AccessTimeIcon = styled(AccessTime)<IconProps>(({}: { theme: Theme }) => ({
  color: "#a1a1a1",
}));

export const AvatarStyled = styled(Avatar)<AvatarProps>(({}: { theme: Theme }) => ({
  background: "#eeeeee",
}));

export const ListItemStyled = styled(ListItem)<ListItemProps>(({}: { theme: Theme }) => ({
  alignItems: "flex-start",
}));
