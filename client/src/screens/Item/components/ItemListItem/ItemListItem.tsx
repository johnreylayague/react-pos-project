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
              imageSrc={itemData.image}
              itemName={itemData.name}
              selected={itemData.isSelected}
              timeout={350}
              variant={"square"}
            />
          </ListItemAvatarStyled>
          <ListItemTitle secondary={itemStock}>{itemData.name}</ListItemTitle>
          <ListItemStock>{formattedNumber}</ListItemStock>
        </ListItemButtonStyled>
      </ListItemStyled>
      <Divider variant="inset" component="li" />
    </>
  );
  // return (
  //   <>
  //     <ListItemStyled>
  //       <ListItemButtonStyled
  //         selected={itemData.selected}
  //         data-selected={itemData.selected}
  //         data-item-id={itemData.id}
  //         {...onInteractionHandlers}
  //       >
  //         <ListItemAvatarStyled>
  //           <SelectableAvatar
  //             imageSrc={itemData.imageSrc}
  //             itemName={itemData.itemName}
  //             selected={itemData.selected}
  //             timeout={350}
  //             variant={"circular"}
  //           />
  //         </ListItemAvatarStyled>
  //         <ListItemTitle secondary={itemStock}>{itemData.itemName}</ListItemTitle>
  //         <ListItemStock>{itemData.itemPrice}</ListItemStock>
  //       </ListItemButtonStyled>
  //     </ListItemStyled>
  //     <Divider variant="inset" component="li" />
  //   </>
  // );
};

export default ItemListItem;
