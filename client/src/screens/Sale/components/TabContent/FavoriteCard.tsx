import React from "react";
import { CloseButton, Wrapper } from "./FavoriteCardStyles";
import { Close as CloseIcon } from "@mui/icons-material";
import ShapeItemButton from "../ShapeItemButton/ShapeItemButton";
import assets from "../../../../assets/assets";
import { Grid2 as Grid } from "@mui/material";

type FavoriteCardProps = {
  itemName: string;
  itemColorAndShapeImage: string;
  itemImage: string;
  itemRepresentation: string;
  sequenceId: number;
  favoriteId?: number | undefined;
  onAddItem?: (sequenceId: number) => void;
  onOpenDialogAddItemAndCategory?: () => void;
  onRemoveItem?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const FavoriteCard: React.FC<FavoriteCardProps> = (props) => {
  const {
    onRemoveItem,
    onOpenDialogAddItemAndCategory,
    itemColorAndShapeImage,
    itemImage,
    itemName,
    itemRepresentation,
    sequenceId,
    favoriteId,
    onAddItem,
  } = props;

  let updatedButtonContent;

  const representationImage =
    itemRepresentation === "colorAndShape" ? itemColorAndShapeImage : itemImage;

  const image = !itemName
    ? assets.images.colorsAndShapes.SoftPeach.BorderSquare3
    : representationImage;

  if (itemName) {
    updatedButtonContent = (
      <Wrapper>
        <CloseButton edge={"start"} size={"small"} data-item-id={favoriteId} onClick={onRemoveItem}>
          <CloseIcon />
        </CloseButton>
        <ShapeItemButton sequenceId={sequenceId} itemImage={image} itemName={itemName} />
      </Wrapper>
    );
  }

  if (!itemName) {
    updatedButtonContent = (
      <ShapeItemButton sequenceId={sequenceId} onAddItem={onAddItem} itemImage={image} />
    );
  }

  return (
    <Grid
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
