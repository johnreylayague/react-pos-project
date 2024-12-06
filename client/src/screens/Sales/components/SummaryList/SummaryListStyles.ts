import {
  ListItemText,
  ListItem,
  ListItemProps,
  ListProps,
  List,
  ListItemTextProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomizedListItem = styled(ListItem)<ListItemProps>(({}) => ({
  paddingTop: "22px",
  paddingBottom: "22px",
}));

export const CustomizedList = styled(List)<ListProps>(({}) => ({
  padding: "0px 16px 0px 16px",
}));

export const CustomizedListItemText = styled(ListItemText)<ListItemTextProps>(({}) => ({
  display: "flex",
  justifyContent: "space-between",
}));
