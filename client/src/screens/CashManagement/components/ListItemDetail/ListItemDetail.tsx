import { ListItem, ListItemText, styled, ListItemTextProps, Theme } from "@mui/material";
import React from "react";

const ListItemTextSecondary = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  textAlign: "right",
}));

type ListItemDetailProps = {
  children: React.ReactNode;
  secondary?: React.ReactNode;
};
const ListItemDetail: React.FC<ListItemDetailProps> = (props) => {
  const { children, secondary } = props;

  return (
    <ListItem disableGutters divider>
      <ListItemText>{children}</ListItemText>
      <ListItemTextSecondary>{secondary}</ListItemTextSecondary>
    </ListItem>
  );
};

export default ListItemDetail;
