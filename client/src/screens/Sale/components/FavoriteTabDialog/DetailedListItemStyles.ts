import {
  ListItemButton,
  styled,
  ListItemButtonProps,
  ListItemText,
  ListItemTextProps,
} from "@mui/material";

export const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps>(({ theme }) => ({
  paddingRight: theme.spacing(3),
  paddingLeft: theme.spacing(3),
}));

export const Label = styled(ListItemText)<ListItemTextProps>(({}) => ({}));

export const Detail = styled(ListItemText)<ListItemTextProps>(({}) => ({
  textAlign: "right",
}));
