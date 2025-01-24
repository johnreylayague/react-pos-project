import { Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { isMobile } from "react-device-detect";
import { saleActions } from "../../store/sale-slice";

export const useInteractionHandler = (dispatch: Dispatch) => {
  const holdTimeout = React.useRef<number | null>(null);

  const clearHoldTimeout = () => {
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
      holdTimeout.current = null;
    }
  };

  const handleOnMouseDown = () => {
    holdTimeout.current = setTimeout(() => {
      dispatch(saleActions.handleOnOpenEdit());
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

  return {
    interactionHandlers,
    handleOnMouseDown: handleOnMouseDown,
    handleOnMouseUp: handleOnMouseUp,
    handleOnMouseLeave: handleOnMouseLeave,
  };
};
