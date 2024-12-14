import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeProps } from "../../store";
import { itemActions } from "../../store/item-slice";
import { isMobile } from "react-device-detect";

type InteractionEvent = React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>;

export type InteractionEventHandlers = {
  onTouchStart?: (event: InteractionEvent) => void;
  onTouchEnd?: (event: InteractionEvent) => void;
  onTouchCancel?: (event: InteractionEvent) => void;
  onMouseDown?: (event: InteractionEvent) => void;
  onMouseUp?: (event: InteractionEvent) => void;
  onMouseLeave?: (event: InteractionEvent) => void;
};

export const useItemInteractionHandlers = () => {
  const isSelectionMode = useSelector((state: storeProps) => state.item.isSelectionMode);

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

    if (isSelectionMode && itemId && isSelected) {
      const parsedItemId = Number.parseInt(itemId);
      const parsedIsSelected = JSON.parse(isSelected);

      dispatch(itemActions.selectionMode({ itemId: parsedItemId, isSelected: parsedIsSelected }));

      return;
    }
  };

  const handleOnMouseDownAndTouchStart = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const itemId = event.currentTarget.getAttribute("data-item-id");
    const isSelected = event.currentTarget.getAttribute("data-selected");

    const isLeftClickOrTouchEnd =
      ("button" in event && event.button === 0) || event.type === "touchstart";

    const isValidSelectionCondition =
      !isSelectionMode && typeof itemId === "string" && typeof isSelected === "string";

    if (isValidSelectionCondition && isLeftClickOrTouchEnd) {
      const parsedItemId = Number.parseInt(itemId);
      const parsedSelected = JSON.parse(isSelected);

      holdTimeout.current = setTimeout(() => {
        dispatch(
          itemActions.toggleSelection({
            itemId: parsedItemId,
            isSelected: !parsedSelected,
          })
        );
      }, 1000);
    }
  };

  const handleOnMouseUpAndTouchEnd = (
    event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    const itemId = event.currentTarget.getAttribute("data-item-id");
    const isSelected = event.currentTarget.getAttribute("data-selected");

    clearHoldTimeout();

    const isLeftClickOrTouchEnd =
      ("button" in event && event.button === 0) || event.type === "touchend";

    const isValidSelectionCondition =
      isSelectionMode && typeof itemId === "string" && typeof isSelected === "string";

    if (isValidSelectionCondition && isLeftClickOrTouchEnd) {
      const parsedItemId = Number.parseInt(itemId);
      const parsedIsSelected = JSON.parse(isSelected);

      dispatch(itemActions.selectionMode({ itemId: parsedItemId, isSelected: !parsedIsSelected }));

      return;
    }

    if (!isValidSelectionCondition && isLeftClickOrTouchEnd) {
      navigate(`/item/edit/${itemId}`);
      return;
    }
  };

  const interactionHandlers: InteractionEventHandlers = isMobile
    ? {
        onTouchStart: handleOnMouseDownAndTouchStart,
        onTouchEnd: handleOnMouseUpAndTouchEnd,
        onTouchCancel: handleOnMouseUpAndTouchEnd,
      }
    : {
        onMouseDown: handleOnMouseDownAndTouchStart,
        onMouseUp: handleOnMouseUpAndTouchEnd,
        onMouseLeave: handleOnMouseLeave,
      };

  return {
    interactionHandlers,
  };
};
