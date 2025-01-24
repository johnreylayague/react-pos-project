import { Grid2 as Grid, ButtonBase, Avatar, Box, Typography } from "@mui/material";
import React from "react";

type HomeItemProps = {
  itemId: number;
  itemImage: string;
  itemColorAndShapeImage: string;
  itemName: string;
  itemRepresentation: "colorAndShape" | "image";
  onAddItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const HomeItem: React.FC<HomeItemProps> = (props) => {
  const { itemId, itemImage, itemName, onAddItem, itemColorAndShapeImage, itemRepresentation } =
    props;

  const image = itemRepresentation === "colorAndShape" ? itemColorAndShapeImage : itemImage;

  return (
    <Grid
      size={{
        xs: 4,
        sm: 2.4,
        md: 2,
        lg: 1.5,
      }}
    >
      <ButtonBase
        data-item-id={itemId}
        onClick={onAddItem}
        sx={() => ({ width: "100%", height: "100%" })}
      >
        <Avatar
          sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          variant="square"
          imgProps={{
            draggable: false,
          }}
          src={image}
        />
        {itemRepresentation === "colorAndShape" && (
          <Box
            sx={(theme) => ({
              position: "absolute",
              padding: theme.spacing(1),
            })}
          >
            <Typography
              component={"div"}
              sx={() => ({
                wordBreak: "break-all",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 2,
                textOverflow: "ellipsis",
                zIndex: 1,
              })}
            >
              {itemName}
            </Typography>
          </Box>
        )}
        {itemRepresentation === "image" && (
          <Box
            sx={(theme) => ({
              position: "absolute",
              padding: theme.spacing(1),
              bottom: 0,
              backgroundColor: theme.palette.action.active,
              width: "100%",
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
                color: theme.palette.common.white,
              })}
            >
              {itemName}
            </Typography>
          </Box>
        )}
      </ButtonBase>
    </Grid>
  );
};

export default HomeItem;
