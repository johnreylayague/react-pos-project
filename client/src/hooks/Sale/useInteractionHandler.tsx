import React from "react";
import { isMobile } from "react-device-detect";

export const useInteractionHandler = (onOpenEditMode: () => void, isOpenEditMode: boolean) => {
  const holdTimeout = React.useRef<number | null>(null);

  const clearHoldTimeout = () => {
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
      holdTimeout.current = null;
    }
  };

  const handleOnMouseDown = () => {
    holdTimeout.current = setTimeout(() => {
      onOpenEditMode();
    }, 1000);
  };

  const handleOnMouseUp = () => {
    clearHoldTimeout();
  };

  const handleOnMouseLeave = () => {
    clearHoldTimeout();
  };

  const interactionHandlers = isMobile
    ? {
        onTouchStart: handleOnMouseDown,
        onTouchEnd: handleOnMouseUp,
        onTouchCancel: handleOnMouseUp,
      }
    : {
        onMouseDown: handleOnMouseDown,
        onMouseUp: handleOnMouseUp,
        onMouseLeave: handleOnMouseLeave,
      };

  return { interactionHandlers };
};
