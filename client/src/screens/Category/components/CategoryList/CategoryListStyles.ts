import {
  ListItem,
  ListItemProps,
  Avatar,
  AvatarProps,
  ListItemButtonProps,
  ListItemButton,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const ListItemStyled = styled(ListItem)<ListItemProps>(({}: { theme?: Theme }) => ({
  padding: 0,
}));

export const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps>(
  ({}: { theme: Theme }) => ({
    "&.Mui-selected, &.Mui-selected:hover ": {
      backgroundColor: "#f1f8e9",
    },
  })
);

export const AvatarStyled = styled(Avatar)<AvatarProps>(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.success.main,
  position: "absolute",
  left: 0,
  top: 0,
}));
