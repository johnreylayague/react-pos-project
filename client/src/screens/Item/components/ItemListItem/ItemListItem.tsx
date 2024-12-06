import React from "react";
import {
  ListItemStock,
  ListItemStyled,
  ListItemTitle,
  ListItemButtonStyled,
  ListItemAvatarStyled,
} from "./ItemListItemStyles";
import { Divider } from "@mui/material";
import { InteractionEventHandlers } from "../../../../hooks/Items/useItemInteractionHandlers";
import { itemDataListProps } from "../../../../store/item-slice";
import SelectableAvatar from "../SelectableAvatar/SelectableAvatar";

type ItemListItemProps = {
  onInteractionHandlers: InteractionEventHandlers;
  itemData: itemDataListProps;
};

const ItemListItem: React.FC<ItemListItemProps> = (props) => {
  const { onInteractionHandlers, itemData } = props;

  const itemStock = itemData.stock ? `${itemData.stock} in stock` : "–";

  return (
    <>
      <ListItemStyled>
        <ListItemButtonStyled
          selected={itemData.selected}
          data-selected={itemData.selected}
          data-item-id={itemData.id}
          {...onInteractionHandlers}
        >
          <ListItemAvatarStyled>
            <SelectableAvatar
              imageSrc={itemData.imageSrc}
              itemName={itemData.itemName}
              selected={itemData.selected}
              timeout={350}
              variant={"circular"}
            />
          </ListItemAvatarStyled>
          <ListItemTitle secondary={itemStock}>{itemData.itemName}</ListItemTitle>
          <ListItemStock>{itemData.itemPrice}</ListItemStock>
        </ListItemButtonStyled>
      </ListItemStyled>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ItemListItem;
