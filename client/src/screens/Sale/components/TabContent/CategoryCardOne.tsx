import React from "react";
import {
  Avatar,
  AvatarProps,
  Box,
  ButtonBase,
  Grid2 as Grid,
  styled,
  Theme,
  Typography,
} from "@mui/material";
import ShapeItemButton from "../ShapeItemButton/ShapeItemButton";
import assets from "../../../../assets/assets";
import { ContentCopy } from "@mui/icons-material";
import { isMobile } from "react-device-detect";
import { useInteractionHandler } from "../../../../hooks/Sale/useInteractionHandler";

const AvatarStyled = styled(Avatar)<AvatarProps>(({}: { theme: Theme }) => ({
  "& .MuiAvatar-img": {
    pointerEvents: "none",
  },
}));

type CategoryCardOneProps = {
  sequenceId: number;
  categoryId: number;
  itemName: string;
  itemColorAndShapeImage: string;
  itemImage: string | undefined;
  itemRepresentation: string;
  onCategory: (selectedCategoryId: number) => void;
  // onCategory: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // onCategory: (
  //   event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLAnchorElement>
  // ) => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onMouseLeave?: () => void;
  onInteractionHandlers?: {
    onTouchStart?: () => void;
    onTouchEnd?: () => void;
    onTouchCancel?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseLeave?: () => void;
  };
};

const CategoryCardOne: React.FC<CategoryCardOneProps> = (props) => {
  const {
    itemName,
    itemRepresentation,
    itemColorAndShapeImage,
    itemImage,
    sequenceId,
    categoryId,
    onCategory,
    onInteractionHandlers,
    onMouseDown: handleOnMouseDown,
    onMouseLeave: handleOnMouseLeave,
    onMouseUp: handleOnMouseUp,
  } = props;

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
        <ButtonBase
          {...(isMobile
            ? {
                onTouchStart: handleOnMouseDown,
                onTouchEnd: () => {
                  handleOnMouseUp?.();
                  onCategory(categoryId);
                },
                onTouchCancel: handleOnMouseUp,
              }
            : {
                onMouseDown: handleOnMouseDown,
                onMouseUp: () => {
                  handleOnMouseUp?.();
                  onCategory(categoryId);
                },
                onMouseLeave: handleOnMouseLeave,
              })}
          data-sequence-id={sequenceId}
          data-category-id={categoryId}
          sx={() => ({ width: "100%", height: "100%" })}
        >
          <Box
            sx={(theme) => ({
              position: "absolute",
              right: theme.spacing(1),
              top: theme.spacing(1),
              zIndex: 1,
            })}
          >
            <ContentCopy
              sx={(theme) => ({ transform: "scaleX(-1)", color: theme.palette.action.active })}
            />
          </Box>
          <AvatarStyled
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
            variant="square"
            imgProps={{
              draggable: false,
            }}
            src={itemImage}
          />
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
        </ButtonBase>
      </Grid>
    </>
  );
};

export default CategoryCardOne;
