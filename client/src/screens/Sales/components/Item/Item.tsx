import React from "react";
import { Grid2 as Grid } from "@mui/material";
import {
  ButtonShapeStyled,
  ButtonStyled,
  ButtonImageStyled,
  TypographyStyled,
  TypographyImageStyled,
  BoxStyled,
} from "./ItemStyles.ts";
import assets from "../../../../assets/assets.ts";

type ItemProps = {
  productName: string;
  backgroundImage: string;
  color: string;
  shape: string;
};

const Item: React.FC<ItemProps> = (props) => {
  const { productName, color, shape, backgroundImage } = props;

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

  const colorList = colorsAndShapes.filter((colorAndShape) => colorAndShape.color === color);
  const findImage = colorList.find((color) => color.shape === shape)?.image || "";

  let content: JSX.Element | null = null;

  if (!findImage) {
    content = (
      <ButtonStyled variant="text" disableElevation>
        <TypographyStyled component="span">{productName}</TypographyStyled>
      </ButtonStyled>
    );
  }

  if (backgroundImage) {
    content = (
      <ButtonImageStyled backgroundimage={backgroundImage} variant="text" disableElevation>
        <BoxStyled>
          <TypographyImageStyled component="span">{productName}</TypographyImageStyled>
        </BoxStyled>
      </ButtonImageStyled>
    );
  }

  if (findImage) {
    content = (
      <ButtonShapeStyled variant="text" backgroundimage={findImage} disableElevation>
        <TypographyStyled component="span">{productName}</TypographyStyled>
      </ButtonShapeStyled>
    );
  }

  return (
    <>
      <Grid size={{ sm: 4, md: 3, lg: 2 }}>{content}</Grid>
    </>
  );
};

export default Item;
