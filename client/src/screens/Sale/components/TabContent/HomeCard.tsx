import React from "react";
import assets from "../../../../assets/assets";
import { Grid2 as Grid } from "@mui/material";
import ShapeItemButton from "../ShapeItemButton/ShapeItemButton";

type colorAndShapesData = {
  id: number;
  color: string;
  shape: string;
  image: string;
};

type HomeCardProps = {
  representationId: number;
  colorAndShapes: colorAndShapesData[];
  itemName: string;
};

const HomeCard: React.FC<HomeCardProps> = (props) => {
  const { colorAndShapes, representationId, itemName } = props;

  const representationImage = colorAndShapes.find(
    (colorAndShape) => colorAndShape.id === representationId
  )?.image;

  const image = representationImage
    ? representationImage
    : assets.images.colorsAndShapes.SoftPeach.BorderSquare2;

  return (
    <Grid
      size={{
        xs: 4,
        sm: 2.4,
        md: 2,
        lg: 1.5,
      }}
    >
      <ShapeItemButton itemImage={image} itemName={itemName} />
    </Grid>
  );
};

export default HomeCard;
