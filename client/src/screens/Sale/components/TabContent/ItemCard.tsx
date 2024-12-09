import React from "react";
import { Grid2 as Grid } from "@mui/material";
import ShapeItemButton from "../ShapeItemButton/ShapeItemButton";
import assets from "../../../../assets/assets";

type favoriteData = {
  id: number;
  sequenceId: number;
  itemName: string;
  representationId: number;
};

type colorAndShapesData = {
  id: number;
  color: string;
  shape: string;
  image: string;
};

type ItemCardProps = {
  favoriteData: favoriteData[];
  colorAndShapesData: colorAndShapesData[];
  index: number;
  onInteractionHandlers?: {
    onTouchStart?: () => void;
    onTouchEnd?: () => void;
    onTouchCancel?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseLeave?: () => void;
  };
};
const ItemCard: React.FC<ItemCardProps> = (props) => {
  const { onInteractionHandlers, favoriteData, colorAndShapesData, index } = props;

  const item = favoriteData.find((jsonPage) => jsonPage.sequenceId === index);

  const representationImage = colorAndShapesData.find(
    (colorAndShape) => colorAndShape.id === item?.representationId
  )?.image;

  const itemImage = representationImage
    ? representationImage
    : assets.images.colorsAndShapes.SoftPeach.BorderSquare2;

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
          onInteractionHandlers={onInteractionHandlers}
          itemImage={itemImage}
          itemName={item?.itemName}
        />
      </Grid>
    </>
  );
};

export default ItemCard;
