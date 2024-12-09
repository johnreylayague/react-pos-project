import React from "react";
import { Grid2 as Grid } from "@mui/material";
import ShapeItemButton from "../ShapeItemButton/ShapeItemButton";
import assets from "../../../../assets/assets";
import { pageDataProps } from "../../../../store/sale-slice";

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

type pageData = {
  id: number;
  pageId: number;
  sequenceId: number;
  itemName: string;
  representationId: number;
};

type PageCardProps = {
  pageData: pageData[];
  colorAndShapesData: colorAndShapesData[];
  index: number;
  pageId: number;
  onInteractionHandlers?: {
    onTouchStart?: () => void;
    onTouchEnd?: () => void;
    onTouchCancel?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseLeave?: () => void;
  };
};
const PageCard: React.FC<PageCardProps> = (props) => {
  const { onInteractionHandlers, pageData, colorAndShapesData, index, pageId } = props;

  const item = pageData.find((page) => page.sequenceId === index && page.pageId === pageId);

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

export default PageCard;