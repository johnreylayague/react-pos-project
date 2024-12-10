import {
  ListItem,
  ListItemProps,
  ListItemText,
  ListItemTextProps,
  CSSObject,
  Avatar,
  AvatarProps,
  ListItemButton,
  ListItemButtonProps,
  ListItemAvatarProps,
  ListItemAvatar,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const ListItemStyled = styled(ListItem)<ListItemProps>(({}: { theme?: Theme }) => ({
  padding: 0,
}));

export const ListItemTitle = styled(ListItemText)<ListItemTextProps>(
  ({ theme }: { theme: Theme }) => ({
    "& .MuiListItemText-primary	": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      paddingRight: theme.spacing(3),
    } as CSSObject,
  })
);

export const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps>(
  ({}: { theme: Theme }) => ({
    "&.Mui-selected, &.Mui-selected:hover ": {
      backgroundColor: "#f1f8e9",
    },
  })
);

export const ListItemStock = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  "& .MuiListItemText-primary	": {
    textAlign: "right",
    wordBreak: "keep-all",
  } as CSSObject,
  flexShrink: 0,
}));

export const AvatarStyled = styled(Avatar)<AvatarProps>(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.success.main,
  position: "absolute",
  left: 0,
  top: 0,
}));

export const ListItemAvatarStyled = styled(ListItemAvatar)<ListItemAvatarProps>(
  ({ theme }: { theme: Theme }) => ({
    position: "relative",
  })
);
