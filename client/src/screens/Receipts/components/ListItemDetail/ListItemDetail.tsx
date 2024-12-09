import { ListItem, ListItemText, ListItemTextProps, styled, Theme } from "@mui/material";
import React from "react";

const ListItemTextStyled = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  textAlign: "right",
  alignSelf: "start",
}));

type ListItemDetailProps = {
  itemName: string;
  itemAmount: string;
  itemCount: string;
};

const ListItemDetail: React.FC<ListItemDetailProps> = (props) => {
  const { itemAmount, itemName, itemCount } = props;

  return (
    <ListItem disablePadding>
      <ListItemText secondary={<>{itemCount}</>}>{itemName}</ListItemText>
      <ListItemTextStyled>{itemAmount}</ListItemTextStyled>
    </ListItem>
  );
};

export default ListItemDetail;
