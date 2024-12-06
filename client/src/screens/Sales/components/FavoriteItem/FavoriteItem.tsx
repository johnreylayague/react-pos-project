import React, { useEffect, useRef, useState } from "react";
import {
  ButtonDefaultStyled,
  ButtonStyled,
  AddIconStyled,
  ButtonShapeStyled,
  TypographyStyled,
  CloseIconStyled,
  IconButtonStyled,
  ButtonImageStyled,
  BoxStyled,
  TypographyImageStyled,
  BoxTwoStyled,
  ButtonFavoriteStyled,
} from "./FavoriteItemStyles.ts";
import { Grid2 as Grid } from "@mui/material";
import assets from "../../../../assets/assets";
import { itemActions } from "../../../../store/item-slice.ts";
import { storeProps } from "../../../../store/index.ts";
import { useSelector, useDispatch } from "react-redux";
import { favoriteDialogActions } from "../../../../store/favoriteDialog-slice";

type itemList = {
  id: number;
  productName: string;
  backgroundImage: string;
  color: string;
  shape: string;
};

type FavoriteItemProps = {
  itemData: itemList;
};

const colorsAndShapes = [
  { id: 1, color: "Apple", shape: "Circle", image: assets.images.colorsAndShapes.Apple.Circle },
  { id: 2, color: "Apple", shape: "Octagon", image: assets.images.colorsAndShapes.Apple.Octagon },
  {
    id: 3,
    color: "Apple",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.Apple.Hexadecagon,
  },
  {
    id: 4,
    color: "ButtonBlue",
    shape: "Circle",
    image: assets.images.colorsAndShapes.ButtonBlue.Circle,
  },
  {
    id: 5,
    color: "ButtonBlue",
    shape: "Octagon",
    image: assets.images.colorsAndShapes.ButtonBlue.Octagon,
  },
  {
    id: 6,
    color: "ButtonBlue",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.ButtonBlue.Hexadecagon,
  },
  {
    id: 7,
    color: "CoralRedCircle",
    shape: "Circle",
    image: assets.images.colorsAndShapes.CoralRedCircle.Circle,
  },
  {
    id: 8,
    color: "CoralRedCircle",
    shape: "Octagon",
    image: assets.images.colorsAndShapes.CoralRedCircle.Octagon,
  },
  {
    id: 9,
    color: "CoralRedCircle",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.CoralRedCircle.Hexadecagon,
  },
  {
    id: 10,
    color: "Razzmatazz",
    shape: "Circle",
    image: assets.images.colorsAndShapes.Razzmatazz.Circle,
  },
  {
    id: 11,
    color: "Razzmatazz",
    shape: "Octagon",
    image: assets.images.colorsAndShapes.Razzmatazz.Octagon,
  },
  {
    id: 12,
    color: "Razzmatazz",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.Razzmatazz.Hexadecagon,
  },
  {
    id: 13,
    color: "Pear",
    shape: "Circle",
    image: assets.images.colorsAndShapes.Pear.Circle,
  },
  {
    id: 14,
    color: "Pear",
    shape: "Octagon",
    image: assets.images.colorsAndShapes.Pear.Octagon,
  },
  {
    id: 15,
    color: "Pear",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.Pear.Hexadecagon,
  },
  {
    id: 16,
    color: "DarkOrchid",
    shape: "Circle",
    image: assets.images.colorsAndShapes.DarkOrchid.Circle,
  },
  {
    id: 17,
    color: "DarkOrchid",
    shape: "Octagon",
    image: assets.images.colorsAndShapes.DarkOrchid.Octagon,
  },
  {
    id: 18,
    color: "DarkOrchid",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.DarkOrchid.Hexadecagon,
  },
  {
    id: 19,
    color: "SoftPeach",
    shape: "Color",
    image: assets.images.colorsAndShapes.SoftPeach.Hexadecagon,
  },
  {
    id: 20,
    color: "SoftPeach",
    shape: "Octagon",
    image: assets.images.colorsAndShapes.SoftPeach.Hexadecagon,
  },
  {
    id: 21,
    color: "SoftPeach",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.SoftPeach.Hexadecagon,
  },
];

const FavoriteItem: React.FC<FavoriteItemProps> = (props) => {
  const { itemData } = props;

  const dispatch = useDispatch();
  const isSetupItem = useSelector((state: storeProps) => state.item.isSetupItem);
  const holdTimeout = useRef<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const openDialog = () => {
    dispatch(favoriteDialogActions.openDialog());
    dispatch(favoriteDialogActions.closeSearch());
  };

  const colorList = colorsAndShapes.filter(
    (colorAndShape) => colorAndShape.color === itemData.color
  );

  const findImage = colorList.find((color) => color.shape === itemData.shape)?.image || "";

  let content: JSX.Element | null = null;

  const handleMouseDown = (_event: React.MouseEvent<HTMLButtonElement>) => {
    holdTimeout.current = setTimeout(() => {
      // dispatch(itemActions.handleToggleSetupItem());
      // dispatch(itemActions.handleToggleSetupItem());
    }, 2000);
  };

  const clearHoldTimeout = () => {
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
      holdTimeout.current = null;
    }
  };

  if (
    !isSetupItem &&
    !itemData.productName &&
    !itemData.backgroundImage &&
    !itemData.color &&
    !itemData.shape
  ) {
    content = (
      <ButtonFavoriteStyled
        ref={buttonRef}
        variant="text"
        disableElevation
        onMouseDown={handleMouseDown}
        onMouseUp={clearHoldTimeout}
        onMouseLeave={clearHoldTimeout}
      ></ButtonFavoriteStyled>
    );
  }

  if (!isSetupItem && findImage && itemData.productName) {
    content = (
      <ButtonShapeStyled variant="text" backgroundimage={findImage} disableElevation>
        <TypographyStyled component="span">{itemData.productName}</TypographyStyled>
      </ButtonShapeStyled>
    );
  }

  if (!isSetupItem && itemData.backgroundImage && itemData.productName) {
    content = (
      <ButtonImageStyled backgroundimage={itemData.backgroundImage} variant="text" disableElevation>
        <BoxStyled>
          <TypographyImageStyled component="span">{itemData.productName}</TypographyImageStyled>
        </BoxStyled>
      </ButtonImageStyled>
    );
  }

  if (
    !isSetupItem &&
    itemData.productName &&
    !itemData.backgroundImage &&
    !itemData.color &&
    !itemData.shape
  ) {
    content = (
      <ButtonStyled variant="text" disableElevation>
        <TypographyStyled component="span">{itemData.productName}</TypographyStyled>
      </ButtonStyled>
    );
  }

  // -------------------

  if (isSetupItem && !findImage && itemData.productName) {
    content = (
      <BoxTwoStyled>
        <IconButtonStyled>
          <CloseIconStyled fontSize="medium" />
        </IconButtonStyled>
        <ButtonStyled variant="text" disableElevation disableRipple>
          <TypographyStyled component="span">{itemData.productName}</TypographyStyled>
        </ButtonStyled>
      </BoxTwoStyled>
    );
  }

  if (
    isSetupItem &&
    !itemData.productName &&
    !itemData.backgroundImage &&
    !itemData.color &&
    !itemData.shape
  ) {
    content = (
      <ButtonDefaultStyled onClick={openDialog} variant="text" disableElevation disableRipple>
        <AddIconStyled fontSize="large" />
      </ButtonDefaultStyled>
    );
  }

  if (isSetupItem && itemData.backgroundImage && itemData.productName) {
    content = (
      <BoxTwoStyled>
        <IconButtonStyled>
          <CloseIconStyled fontSize="medium" />
        </IconButtonStyled>
        <ButtonImageStyled
          backgroundimage={itemData.backgroundImage}
          variant="text"
          disableElevation
          disableRipple
        >
          <BoxStyled>
            <TypographyImageStyled component="span">{itemData.productName}</TypographyImageStyled>
          </BoxStyled>
        </ButtonImageStyled>
      </BoxTwoStyled>
    );
  }

  if (isSetupItem && findImage && itemData.productName) {
    content = (
      <BoxTwoStyled>
        <IconButtonStyled>
          <CloseIconStyled fontSize="medium" />
        </IconButtonStyled>
        <ButtonShapeStyled
          variant="text"
          backgroundimage={findImage}
          disableElevation
          disableRipple
        >
          <TypographyStyled component="span">{itemData.productName}</TypographyStyled>
        </ButtonShapeStyled>
      </BoxTwoStyled>
    );
  }

  return (
    <>
      <Grid size={{ sm: 4, md: 3, lg: 2 }}>{content}</Grid>
    </>
  );
};

export default FavoriteItem;
