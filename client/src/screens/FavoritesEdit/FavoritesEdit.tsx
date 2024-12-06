import { Add, ArrowBack, Close as CloseIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  styled,
  Toolbar,
  Typography,
  Theme,
  Grid2 as Grid,
  ButtonBase,
  Fab,
} from "@mui/material";
import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/assets";
import DialogSelectedItem from "./components/Additem/AddItem";

const Span = styled("span")<HTMLAttributes<HTMLSpanElement>>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.grey[500],
  ...theme.typography.body1,
}));

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

type FavoritesEditProps = {};
const FavoritesEdit: React.FC<FavoritesEditProps> = (props) => {
  const {} = props;

  const [isOpenDialog, setIsOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setIsOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  return (
    <Box sx={() => ({ display: "flex", flexDirection: "column", height: "100dvh" })}>
      <AppBar color="success" position="static" elevation={0} sx={(theme) => ({})}>
        <Toolbar sx={(theme) => ({})}>
          <IconButton
            component={Link}
            to="../.."
            relative="path"
            sx={(theme) => ({ marginLeft: `-${theme.spacing(1)}` })}
          >
            <ArrowBack sx={(theme) => ({ color: theme.palette.common.white })} />
          </IconButton>
          <Box sx={(theme) => ({ flexGrow: 1, paddingLeft: theme.spacing(3) })}>
            <Typography component={"h6"} variant="h6">
              Edit favorites
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={(theme) => ({ padding: theme.spacing(2), bgcolor: theme.palette.grey[100] })}>
        <Button
          color="success"
          variant="contained"
          size="large"
          disableElevation
          fullWidth
          sx={(theme) => ({ borderRadius: 0 })}
        >
          SAVE
        </Button>
      </Box>
      <Box
        sx={(theme) => ({
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`,
          padding: theme.spacing(2),
        })}
      >
        <Typography component={"div"} variant="body1" sx={(theme) => ({})}>
          Favorites <Span>(added 2 of 30)</Span>
        </Typography>
      </Box>
      <Box sx={(theme) => ({ padding: theme.spacing(1), overflowY: "auto" })}>
        <Grid container spacing={1}>
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
                  // xs: 1.5,
                  // sm: 2.4,
                  // md: 2,
                  // lg: 1.714285714285714,
                }}
              >
                <Box sx={(theme) => ({ position: "relative" })}>
                  <IconButton
                    edge={"start"}
                    size="small"
                    sx={(theme) => ({
                      position: "absolute",
                      left: `-${theme.spacing(0.5)}`,
                      top: `-${theme.spacing(0.5)}`,
                      boxShadow: theme.shadows[1],
                      bgcolor: theme.palette.grey[100],
                      padding: theme.spacing(0.5),
                      ":hover": {
                        bgcolor: theme.palette.grey[100],
                      },
                      zIndex: 1,
                    })}
                  >
                    <CloseIcon sx={(theme) => ({ fontSize: theme.spacing(2) })} />
                  </IconButton>
                  <ButtonBase
                    sx={(theme) => ({ width: "100%", height: "100%", position: "relative" })}
                  >
                    <img
                      src={representationImage}
                      draggable={false}
                      alt={item.itemName}
                      style={{ height: "100%", width: "100%", objectFit: "cover" }}
                    />
                    <Box
                      sx={(theme) => ({
                        position: "absolute",
                        padding: theme.spacing(1),
                      })}
                    >
                      <Typography
                        component={"div"}
                        sx={(theme) => ({
                          wordBreak: "break-all",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          WebkitLineClamp: 2,
                          textOverflow: "ellipsis",
                          zIndex: 1,
                        })}
                      >
                        {item.itemName}
                      </Typography>
                    </Box>
                  </ButtonBase>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Fab
        size="large"
        color="success"
        aria-label="add"
        onClick={handleOpenDialog}
        sx={(theme) => ({
          position: "fixed",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
        })}
      >
        <Add />
      </Fab>

      <DialogSelectedItem isOpenDialog={isOpenDialog} onCloseDialog={handleCloseDialog} />
    </Box>
  );
};

export default FavoritesEdit;
