import {
  Grid2 as Grid,
  Box,
  IconButton,
  styled,
  ListItem,
  ListItemProps,
  Theme,
  IconButtonProps,
  BoxProps,
} from "@mui/material";
import React from "react";
import { Close } from "@mui/icons-material";
import assets from "../../../../assets/assets";
import FavoriteTabDialog from "../FavoriteTabDialog/FavoriteTabDialog";
import ShapeItemButton from "../ShapeItemButton/ShapeItemButton";

const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  position: "absolute",
  left: `-${theme.spacing(1)}`,
  top: `-${theme.spacing(1)}`,
  zIndex: 1,
  boxShadow: theme.shadows[1],
  backgroundColor: "#fff",
  ":hover": {
    backgroundColor: "#fff",
  },
}));

const Wrapper = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  position: "relative",
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
      {/* {value === index && <Box sx={{ p: 2 }}>{children}</Box>} */}
    </div>
  );
}

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
  {
    id: 29,
    color: "SoftPeach",
    shape: "BorderSquare2",
    image: assets.images.colorsAndShapes.SoftPeach.BorderSquare2,
  },
  {
    id: 30,
    color: "SoftPeach",
    shape: "BorderSquare3",
    image: assets.images.colorsAndShapes.SoftPeach.BorderSquare3,
  },
];

const itemListFavorite = [
  { id: 1, itemName: "", representationId: "" },
  { id: 2, itemName: "", representationId: "" },
  { id: 3, itemName: "", representationId: "" },
  { id: 4, itemName: "", representationId: "" },
  { id: 5, itemName: "", representationId: "" },
  { id: 6, itemName: "", representationId: "" },
  { id: 7, itemName: "", representationId: "" },
  { id: 8, itemName: "Item 8", representationId: 14 },
  { id: 9, itemName: "", representationId: "" },
  { id: 10, itemName: "", representationId: "" },
  { id: 11, itemName: "", representationId: "" },
  { id: 12, itemName: "", representationId: "" },
  { id: 13, itemName: "", representationId: "" },
  { id: 14, itemName: "", representationId: "" },
  { id: 15, itemName: "", representationId: "" },
  { id: 16, itemName: "", representationId: "" },
  { id: 17, itemName: "Item 17", representationId: 6 },
  { id: 18, itemName: "", representationId: "" },
  { id: 19, itemName: "", representationId: "" },
  { id: 20, itemName: "Item 20", representationId: 11 },
  { id: 21, itemName: "", representationId: "" },
  { id: 22, itemName: "", representationId: "" },
  { id: 23, itemName: "", representationId: "" },
  { id: 24, itemName: "", representationId: "" },
  { id: 25, itemName: "", representationId: "" },
  { id: 26, itemName: "", representationId: "" },
  { id: 27, itemName: "", representationId: "" },
  { id: 28, itemName: "", representationId: "" },
  { id: 29, itemName: "", representationId: "" },
  { id: 30, itemName: "", representationId: "" },
  { id: 31, itemName: "", representationId: "" },
  { id: 32, itemName: "", representationId: "" },
  { id: 33, itemName: "", representationId: "" },
  { id: 34, itemName: "", representationId: "" },
  { id: 35, itemName: "", representationId: "" },
  { id: 36, itemName: "", representationId: "" },
  { id: 37, itemName: "", representationId: "" },
  { id: 38, itemName: "", representationId: "" },
  { id: 39, itemName: "", representationId: "" },
  { id: 40, itemName: "", representationId: "" },
];

type FavoriteTabProps = {
  value: number;
  index: number;
  isEditMode: boolean;
  onOpenDialogAddItemAndCategory: () => void;
  onInteractionHandlers: {
    onTouchStart?: () => void;
    onTouchEnd?: () => void;
    onTouchCancel?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseLeave?: () => void;
  };
};

const FavoriteTab: React.FC<FavoriteTabProps> = (props) => {
  const { value, index, isEditMode, onInteractionHandlers, onOpenDialogAddItemAndCategory } = props;

  const [isOpenDialog, setIsOpenDialog] = React.useState(false);

  const handleClose = () => {
    setIsOpenDialog(false);
  };

  return (
    <>
      <CustomTabPanel value={value} index={index}>
        <Grid container spacing={2}>
          {itemListFavorite.map((item) => {
            const representationImage = colorsAndShapes.find(
              (colorAndShape) => colorAndShape.id === item.representationId
            )?.image;

            const image = representationImage
              ? representationImage
              : assets.images.colorsAndShapes.SoftPeach.BorderSquare2;

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
                <ShapeItemButton
                  onInteractionHandlers={onInteractionHandlers}
                  itemImage={image}
                  itemName={item.itemName}
                />
              </Grid>
            );
          })}
        </Grid>

        {/* <Box
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: {
              display: "none",
            },
            marginTop: theme.spacing(5),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <ButtonBase
            component={Link}
            to="favorite/edit"
            relative={"path"}
            sx={(theme) => ({
              ...theme.typography.body1,
              padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
            })}
          >
            <CreateIcon
              sx={(theme) => ({
                marginRight: theme.spacing(2),
              })}
            />
            EDIT FAVORITES
          </ButtonBase>
        </Box> */}
      </CustomTabPanel>

      <FavoriteTabDialog onCloseDialog={handleClose} isOpenDialog={isOpenDialog} />
    </>
  );
};

export default FavoriteTab;
