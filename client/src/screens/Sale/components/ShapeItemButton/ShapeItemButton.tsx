import { ButtonBase, Box, Typography, Avatar, AvatarProps, Theme, styled } from "@mui/material";
import React from "react";
import { isMobile } from "react-device-detect";

const AvatarStyled = styled(Avatar)<AvatarProps>(({}: { theme: Theme }) => ({
  "& .MuiAvatar-img": {
    pointerEvents: "none",
  },
}));

type ShapeItemButtonProps = {
  itemName?: string;
  itemId?: number;
  itemImage: string | undefined;
  sequenceId?: number;
  onAddItem?: (sequenceId: number) => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onMouseLeave?: () => void;
  onAddTicketItem?: (itemId: number) => void;
};

const ShapeItemButton: React.FC<ShapeItemButtonProps> = (props) => {
  const {
    itemName,
    itemImage,
    sequenceId,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onAddItem,
    onAddTicketItem,
    itemId,
  } = props;

  const interactionHandlers = isMobile
    ? {
        onTouchStart: onMouseDown,
        onTouchEnd: onMouseUp,
        onTouchCancel: onMouseUp,
      }
    : {
        onMouseDown: () => {
          onMouseDown?.();

          if (!sequenceId) {
            console.log("sequence id is missing");
            return;
          }

          if (itemId) {
            onAddTicketItem?.(itemId);
          }

          onAddItem?.(sequenceId);
        },
        onMouseUp: onMouseUp,
        onMouseLeave: onMouseLeave,
      };

  return (
    <>
      <ButtonBase
        data-sequence-id={sequenceId}
        {...interactionHandlers}
        sx={() => ({ width: "100%", height: "100%" })}
      >
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
    </>
  );
};

export default ShapeItemButton;
