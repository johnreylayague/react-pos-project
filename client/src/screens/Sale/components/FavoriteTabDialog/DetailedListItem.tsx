import React from "react";
import { ListItem, ListItemAvatar, Avatar, Divider } from "@mui/material";
import { ListItemButtonStyled, Detail, Label } from "./DetailedListItemStyles";
import { formatToPesos } from "../../../../utils/format";
import { convertToNumber } from "../../../../utils/typescriptHelpers";

type DetailedListItemProps = {
  onSelectedItem: (event: React.MouseEvent<HTMLDivElement>) => void;
  itemId: number;
  itemName: string;
  itemPrice: string;
  itemImageSrc: string;
  itemColorAndShapeImage: string;
  itemRepresentation: "image" | "colorAndShape";
};

const DetailedListItem: React.FC<DetailedListItemProps> = (props) => {
  const {
    itemPrice,
    itemName,
    itemImageSrc,
    itemRepresentation,
    itemColorAndShapeImage,
    onSelectedItem,
    itemId,
  } = props;

  const convertItemPrice = convertToNumber("string", itemPrice);

  const formattedPrice = formatToPesos(convertItemPrice);

  const image = itemRepresentation === "colorAndShape" ? itemColorAndShapeImage : itemImageSrc;

  return (
    <>
      <ListItem disablePadding>
        <ListItemButtonStyled onClick={onSelectedItem} data-id={itemId}>
          <ListItemAvatar>
            <Avatar alt={itemName} src={image} />
          </ListItemAvatar>

          <Label>{itemName}</Label>

          <Detail>{formattedPrice}</Detail>
        </ListItemButtonStyled>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default DetailedListItem;
