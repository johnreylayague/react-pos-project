import { ListItem, ListItemButton } from "@mui/material";
import React from "react";
import { Quantity, Details, Price, ItemName } from "./DetailListItemStyles";

type DetailListItemProps = {
  onOpenDialog: () => void;
  itemName: string;
  itemCount: number;
  itemPrice: number;
};
const DetailListItem: React.FC<DetailListItemProps> = (props) => {
  const { onOpenDialog, itemCount, itemName, itemPrice } = props;

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onOpenDialog}>
        <Details>
          <ItemName component={"span"} noWrap>
            {itemName}
          </ItemName>

          <Quantity>X {itemCount}</Quantity>
        </Details>

        <Price>₱{itemPrice}</Price>
      </ListItemButton>
    </ListItem>
  );
};

export default DetailListItem;
