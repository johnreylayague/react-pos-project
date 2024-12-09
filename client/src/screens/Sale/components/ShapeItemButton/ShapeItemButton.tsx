import { ButtonBase, Box, Typography, Avatar, AvatarProps, Theme, styled } from "@mui/material";
import React from "react";

const AvatarStyled = styled(Avatar)<AvatarProps>(({ theme }: { theme: Theme }) => ({
  "& .MuiAvatar-img": {
    pointerEvents: "none",
  },
}));

type ShapeItemButtonProps = {
  itemName?: string;
  itemImage: string;
  onOpenDialogAddItemAndCategory?: () => void;
  onInteractionHandlers?: {
    onTouchStart?: () => void;
    onTouchEnd?: () => void;
    onTouchCancel?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseLeave?: () => void;
  };
};

const ShapeItemButton: React.FC<ShapeItemButtonProps> = (props) => {
  const { itemName, itemImage, onInteractionHandlers, onOpenDialogAddItemAndCategory } = props;

  const aa = onInteractionHandlers ? { ...onInteractionHandlers } : {};
  const bb = onOpenDialogAddItemAndCategory ? { onMouseDown: onOpenDialogAddItemAndCategory } : {};

  return (
    <>
      <ButtonBase {...aa} {...bb} sx={(theme) => ({ width: "100%", height: "100%" })}>
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
            {itemName}
          </Typography>
        </Box>
      </ButtonBase>
    </>
  );
};

export default ShapeItemButton;
