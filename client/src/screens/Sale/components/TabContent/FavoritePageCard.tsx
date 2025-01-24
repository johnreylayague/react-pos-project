import React from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import { CloseButton, Wrapper } from "./FavoritePageCardStyles";
import ShapeItemButton from "../ShapeItemButton/ShapeItemButton";
import { Grid2 as Grid } from "@mui/material";
import assets from "../../../../assets/assets";

type pageData = {
  id: number;
  pageId: number;
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

type FavoritePageCardProps = {
  pageData: pageData[];
  onOpenDialogAddItemAndCategory: (event: React.MouseEvent<HTMLButtonElement>) => void;
  colorAndShapesData: colorAndShapesData[];
  index: number;
  pageId: number;
};
const FavoritePageCard: React.FC<FavoritePageCardProps> = (props) => {
  const { pageData, colorAndShapesData, index, pageId, onOpenDialogAddItemAndCategory } = props;

  const item = pageData.find(
    (jsonPageData) => jsonPageData.pageId === pageId && jsonPageData.sequenceId === index
  );

  const representationImage = colorAndShapesData.find(
    (colorAndShape) => colorAndShape.id === item?.representationId
  )?.image;

  let updatedButtonContent;

  if (representationImage && item) {
    updatedButtonContent = (
      <Wrapper>
        <CloseButton edge={"start"} size={"small"}>
          <CloseIcon />
        </CloseButton>
        <ShapeItemButton itemImage={representationImage} itemName={item.itemName} />
      </Wrapper>
    );
  }

  if (!representationImage && !item) {
    updatedButtonContent = (
      <ShapeItemButton
        onOpenDialogAddItemAndCategory={onOpenDialogAddItemAndCategory}
        itemImage={assets.images.colorsAndShapes.SoftPeach.BorderSquare3}
      />
    );
  }

  return (
    <Grid
      key={index}
      size={{
        xs: 4,
        sm: 2.4,
        md: 2,
        lg: 1.5,
      }}
    >
      {updatedButtonContent}
    </Grid>
  );
};

export default FavoritePageCard;
