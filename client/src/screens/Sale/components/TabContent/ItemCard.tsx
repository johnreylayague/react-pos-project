import React from "react";
import { Grid2 as Grid } from "@mui/material";
import ShapeItemButton from "../ShapeItemButton/ShapeItemButton";
import assets from "../../../../assets/assets";
import { ContentCopy } from "@mui/icons-material";

type ItemCardProps = {
  sequenceId: number;
  itemName: string;
  itemColorAndShapeImage: string;
  itemImage: string;
  itemRepresentation: string;
  itemId?: number;
  onInteractionHandlers?: {
    onTouchStart?: () => void;
    onTouchEnd?: () => void;
    onTouchCancel?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseLeave?: () => void;
  };
  onAddTicketItem?: (itemId: number) => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onMouseLeave?: () => void;
};
const ItemCard: React.FC<ItemCardProps> = (props) => {
  const {
    onInteractionHandlers,
    itemName,
    itemRepresentation,
    itemColorAndShapeImage,
    itemImage,
    sequenceId,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onAddTicketItem,
    itemId,
  } = props;

  const representationImage =
    itemRepresentation === "colorAndShape" ? itemColorAndShapeImage : itemImage;

  const image = !itemName
    ? assets.images.colorsAndShapes.SoftPeach.BorderSquare2
    : representationImage;

  return (
    <>
      <Grid
        size={{
          xs: 4,
          sm: 2.4,
          md: 2,
          lg: 1.5,
        }}
      >
        <ShapeItemButton
          sequenceId={sequenceId}
          itemImage={image}
          itemName={itemName}
          onAddTicketItem={onAddTicketItem}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          itemId={itemId}
        />
      </Grid>
    </>
  );
};

export default ItemCard;
