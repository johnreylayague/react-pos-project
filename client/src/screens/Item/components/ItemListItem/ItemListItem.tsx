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
import { itemListProps } from "../../../../store/item-slice";
import SelectableAvatar from "../SelectableAvatar/SelectableAvatar";

type ItemListItemProps = {
  onInteractionHandlers: InteractionEventHandlers;
  itemData: itemListProps;
};

const ItemListItem: React.FC<ItemListItemProps> = (props) => {
  const { onInteractionHandlers, itemData } = props;

  const itemStock = itemData.instock && itemData.trackstock ? `${itemData.instock} in stock` : "–";

  const formattedNumber = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(Number.parseFloat(itemData.price));

  return (
    <>
      <ListItemStyled>
        <ListItemButtonStyled
          selected={itemData.isSelected}
          data-selected={itemData.isSelected}
          data-item-id={itemData.id}
          {...onInteractionHandlers}
        >
          <ListItemAvatarStyled>
            <SelectableAvatar
              imageSrc={
                itemData.representation === "colorAndShape"
                  ? itemData.colorAndShapeImage
                  : itemData.image
              }
              itemName={itemData.name}
              selected={itemData.isSelected}
              timeout={350}
              variant={itemData.representation === "colorAndShape" ? "square" : "circular"}
            />
          </ListItemAvatarStyled>
          <ListItemTitle secondary={itemStock}>{itemData.name}</ListItemTitle>
          <ListItemStock>{formattedNumber}</ListItemStock>
        </ListItemButtonStyled>
      </ListItemStyled>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ItemListItem;
