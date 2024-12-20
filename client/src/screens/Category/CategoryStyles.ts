import {
  ListItem,
  ListItemProps,
  Avatar,
  AvatarProps,
  ListItemButtonProps,
  ListItemButton,
  ListItemAvatar,
  ListItemAvatarProps,
  Typography,
  TypographyProps,
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

export const ListItemAvatarStyled = styled(ListItemAvatar)<ListItemAvatarProps>(
  ({}: { theme: Theme }) => ({
    position: "relative",
  })
);

export const ResultMessage = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(3),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));
