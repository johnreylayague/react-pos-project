import {
  Grid2 as Grid,
  ButtonBase,
  Box,
  Typography,
  styled,
  TypographyProps,
  BoxProps,
  ButtonBaseProps,
} from "@mui/material";
import React, { HtmlHTMLAttributes } from "react";
import CustomTabPanel from "../../../Sales/components/TabPanel/CustomTabPanel";
import assets from "../../../../assets/assets";

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
    color: "Apple",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.Apple.Square,
  },
  {
    id: 5,
    color: "ButtonBlue",
    shape: "Circle",
    image: assets.images.colorsAndShapes.ButtonBlue.Circle,
  },
  {
    id: 6,
    color: "ButtonBlue",
    shape: "Octagon",
    image: assets.images.colorsAndShapes.ButtonBlue.Octagon,
  },
  {
    id: 7,
    color: "ButtonBlue",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.ButtonBlue.Hexadecagon,
  },
  {
    id: 8,
    color: "ButtonBlue",
    shape: "Square",
    image: assets.images.colorsAndShapes.ButtonBlue.Square,
  },
  {
    id: 9,
    color: "CoralRedCircle",
    shape: "Circle",
    image: assets.images.colorsAndShapes.CoralRedCircle.Circle,
  },
  {
    id: 10,
    color: "CoralRedCircle",
    shape: "Octagon",
    image: assets.images.colorsAndShapes.CoralRedCircle.Octagon,
  },
  {
    id: 11,
    color: "CoralRedCircle",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.CoralRedCircle.Hexadecagon,
  },
  {
    id: 12,
    color: "CoralRedCircle",
    shape: "Square",
    image: assets.images.colorsAndShapes.CoralRedCircle.Square,
  },
  {
    id: 13,
    color: "Razzmatazz",
    shape: "Circle",
    image: assets.images.colorsAndShapes.Razzmatazz.Circle,
  },
  {
    id: 14,
    color: "Razzmatazz",
    shape: "Octagon",
    image: assets.images.colorsAndShapes.Razzmatazz.Octagon,
  },
  {
    id: 15,
    color: "Razzmatazz",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.Razzmatazz.Hexadecagon,
  },
  {
    id: 16,
    color: "Razzmatazz",
    shape: "Square",
    image: assets.images.colorsAndShapes.Razzmatazz.Square,
  },
  {
    id: 17,
    color: "Pear",
    shape: "Circle",
    image: assets.images.colorsAndShapes.Pear.Circle,
  },
  {
    id: 18,
    color: "Pear",
    shape: "Octagon",
    image: assets.images.colorsAndShapes.Pear.Octagon,
  },
  {
    id: 19,
    color: "Pear",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.Pear.Hexadecagon,
  },
  {
    id: 20,
    color: "Pear",
    shape: "Square",
    image: assets.images.colorsAndShapes.Pear.Square,
  },
  {
    id: 21,
    color: "DarkOrchid",
    shape: "Circle",
    image: assets.images.colorsAndShapes.DarkOrchid.Circle,
  },
  {
    id: 22,
    color: "DarkOrchid",
    shape: "Octagon",
    image: assets.images.colorsAndShapes.DarkOrchid.Octagon,
  },
  {
    id: 23,
    color: "DarkOrchid",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.DarkOrchid.Hexadecagon,
  },
  {
    id: 24,
    color: "DarkOrchid",
    shape: "Square",
    image: assets.images.colorsAndShapes.DarkOrchid.Square,
  },
  {
    id: 25,
    color: "SoftPeach",
    shape: "Circle",
    image: assets.images.colorsAndShapes.SoftPeach.Circle,
  },
  {
    id: 26,
    color: "SoftPeach",
    shape: "Octagon",
    image: assets.images.colorsAndShapes.SoftPeach.Hexadecagon,
  },
  {
    id: 27,
    color: "SoftPeach",
    shape: "Hexadecagon",
    image: assets.images.colorsAndShapes.SoftPeach.Hexadecagon,
  },
  {
    id: 28,
    color: "SoftPeach",
    shape: "Square",
    image: assets.images.colorsAndShapes.SoftPeach.Square,
  },
];

const itemList = [
  {
    id: 1,
    itemName: "Ite mIte mItemI temI temItemI tem 1Ite m 1Ite m 1Item 1Item 1",
    representationId: 1,
  },
  { id: 2, itemName: "Item 22 3", representationId: 19 },
  { id: 3, itemName: "Item 3", representationId: 5 },
  { id: 4, itemName: "Earphone Wireless Bluetooth", representationId: 12 },
  { id: 5, itemName: "Item 5", representationId: 24 },
  { id: 6, itemName: "Item 6", representationId: 14 },
  { id: 7, itemName: "Item 7", representationId: 21 },
  {
    id: 8,
    itemName: "Item 8Item 8Item 8Item 8Item 8Item 8Item 8Item 8",
    representationId: 18,
  },
  { id: 9, itemName: "Item 9", representationId: 21 },
];

const ItemTitle = styled(Typography)<TypographyProps>(({}) => ({
  wordBreak: "break-all",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: 2,
  textOverflow: "ellipsis",
  zIndex: 1,
}));

const Overlay = styled(Box)<BoxProps>(({ theme }) => ({
  position: "absolute",
  padding: theme.spacing(1),
}));

const Img = styled("img")<HtmlHTMLAttributes<HTMLElement>>(({}) => ({
  height: "100%",
  width: "100%",
  objectFit: "cover",
}));

const ItemButton = styled(ButtonBase)<ButtonBaseProps>(({}) => ({
  width: "100%",
  height: "100%",
}));

type ItemListTabProps = {
  value: number;
  index: number;
};

const ItemListTab: React.FC<ItemListTabProps> = (props) => {
  const { value, index } = props;

  return (
    <>
      <CustomTabPanel value={value} index={index}>
        <Grid container spacing={2}>
          {itemList.map((item) => {
            const representationImage = colorsAndShapes.find(
              (colorAndShape) => colorAndShape.id === item.representationId
            )?.image;

            return (
              <Grid
                key={item.id}
                size={{
                  xs: 4,
                  sm: 2.4,
                  md: 2,
                  lg: 1.5,
                }}
              >
                <ItemButton>
                  <Img src={representationImage} draggable={false} alt={item.itemName} />
                  <Overlay>
                    <ItemTitle component={"div"}>{item.itemName}</ItemTitle>
                  </Overlay>
                </ItemButton>
              </Grid>
            );
          })}
        </Grid>
      </CustomTabPanel>
    </>
  );
};

export default ItemListTab;
