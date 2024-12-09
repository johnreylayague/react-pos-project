import React from "react";
import { CloseButton, Wrapper } from "./FavoriteCardStyles";
import { Close as CloseIcon } from "@mui/icons-material";
import ShapeItemButton from "../ShapeItemButton/ShapeItemButton";
import assets from "../../../../assets/assets";
import { Grid2 as Grid } from "@mui/material";

type colorAndShapesData = {
  id: number;
  color: string;
  shape: string;
  image: string;
};

type favoriteData = {
  id: number;
  sequenceId: number;
  itemName: string;
  representationId: number;
};

type FavoriteCardProps = {
  favoriteData: favoriteData[];
  onOpenDialogAddItemAndCategory: () => void;
  colorAndShapesData: colorAndShapesData[];
  index: number;
};

const FavoriteCard: React.FC<FavoriteCardProps> = (props) => {
  const { favoriteData, index, colorAndShapesData, onOpenDialogAddItemAndCategory } = props;

  const item = favoriteData.find((jsonPage) => jsonPage.sequenceId === index);

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

export default FavoriteCard;
