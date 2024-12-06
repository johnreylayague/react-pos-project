import React, { useRef } from "react";
import { ListItemStyled, ListItemButtonStyled, AvatarStyled } from "./CategoryListStyles";
import { List, ListItemAvatar, Divider, ListItemText, Avatar, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import { categoryActions } from "../../../../store/category-slice";
import { isMobile } from "react-device-detect";
import { Check } from "@mui/icons-material";

type CategoryListProps = {};
const CategoryList: React.FC<CategoryListProps> = (props) => {
  const {} = props;

  const categoryState = useSelector((state: storeProps) => state.category);
  const holdTimeout = useRef<number | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearHoldTimeout = () => {
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
      holdTimeout.current = null;
    }
  };

  const handleOnMouseLeave = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const itemId = event.currentTarget.getAttribute("data-category-id");
    const isSelected = event.currentTarget.getAttribute("data-selected");

    clearHoldTimeout();

    if (categoryState.isSelectionMode && itemId && isSelected) {
      const parsedItemId = Number.parseInt(itemId);
      const parsedIsSelected = JSON.parse(isSelected);

      dispatch(
        categoryActions.selectionMode({ itemId: parsedItemId, isSelected: parsedIsSelected })
      );

      return;
    }
  };

  const handleOnMouseDownAndTouchStart = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const itemId = event.currentTarget.getAttribute("data-category-id");
    const isSelected = event.currentTarget.getAttribute("data-selected");

    const isLeftClickOrTouchEnd =
      ("button" in event && event.button === 0) || event.type === "touchstart";

    const isValidSelectionCondition =
      !categoryState.isSelectionMode &&
      typeof itemId === "string" &&
      typeof isSelected === "string";

    if (isValidSelectionCondition && isLeftClickOrTouchEnd) {
      const parsedStringItemId = Number.parseInt(itemId);
      const parsedBooleanSelected = JSON.parse(isSelected);

      holdTimeout.current = setTimeout(() => {
        dispatch(
          categoryActions.toggleSelection({
            itemId: parsedStringItemId,
            isSelected: !parsedBooleanSelected,
          })
        );
      }, 1000);
    }
  };

  const handleOnMouseUpAndTouchEnd = (
    event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    const itemId = event.currentTarget.getAttribute("data-category-id");
    const isSelected = event.currentTarget.getAttribute("data-selected");

    clearHoldTimeout();

    const isLeftClickOrTouchEnd =
      ("button" in event && event.button === 0) || event.type === "touchend";

    const isValidSelectionCondition =
      categoryState.isSelectionMode && typeof itemId === "string" && typeof isSelected === "string";

    if (isValidSelectionCondition && isLeftClickOrTouchEnd) {
      const parsedItemId = Number.parseInt(itemId);
      const parsedIsSelected = JSON.parse(isSelected);

      dispatch(
        categoryActions.selectionMode({ itemId: parsedItemId, isSelected: !parsedIsSelected })
      );

      return;
    }

    if (!isValidSelectionCondition && isLeftClickOrTouchEnd) {
      navigate(`/item/category/edit/${itemId}`);
      return;
    }
  };

  const interactionHandlers: React.DOMAttributes<HTMLDivElement> = isMobile
    ? {
        onTouchStart: handleOnMouseDownAndTouchStart,
        onTouchEnd: handleOnMouseUpAndTouchEnd,
      }
    : {
        onMouseDown: handleOnMouseDownAndTouchStart,
        onMouseUp: handleOnMouseUpAndTouchEnd,
        onMouseLeave: handleOnMouseLeave,
      };

  return (
    <List>
      {categoryState.categoryData.map((category) => {
        return (
          <React.Fragment key={category.id}>
            <ListItemStyled>
              <ListItemButtonStyled
                selected={category.selected}
                data-selected={category.selected}
                data-category-id={category.id}
                {...interactionHandlers}
              >
                <ListItemAvatar sx={(_theme) => ({ position: "relative" })}>
                  <Fade in={category.selected} timeout={350}>
                    <AvatarStyled variant="circular">
                      <Check fontSize="medium" />
                    </AvatarStyled>
                  </Fade>
                  <Fade in={!category.selected} timeout={350}>
                    <Avatar variant="circular" alt={category.title} src={category.img} />
                  </Fade>
                </ListItemAvatar>
                <ListItemText secondary={<>{category.quantity} items</>}>
                  {category.title}
                </ListItemText>
              </ListItemButtonStyled>
            </ListItemStyled>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default CategoryList;
