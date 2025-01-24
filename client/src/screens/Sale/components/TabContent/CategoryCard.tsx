import React from "react";
import { CloseButton, Wrapper } from "./CategoryCardStyles";
import { Close as CloseIcon } from "@mui/icons-material";
import ShapeItemButton from "../ShapeItemButton/ShapeItemButton";
import { Box, Grid2 as Grid } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type FavoriteCardProps = {
  itemName: string;
  itemImage: string | undefined;
  sequenceId: number;
  favoriteId: number | undefined;
  onRemoveCategory: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const FavoriteCard: React.FC<FavoriteCardProps> = (props) => {
  const { onRemoveCategory, itemImage, itemName, sequenceId, favoriteId } = props;

  return (
    <Grid
      size={{
        xs: 4,
        sm: 2.4,
        md: 2,
        lg: 1.5,
      }}
    >
      <Wrapper>
        <CloseButton data-favorite-id={favoriteId} onClick={onRemoveCategory}>
          <CloseIcon />
        </CloseButton>
        <Box
          sx={(theme) => ({
            position: "absolute",
            right: theme.spacing(1),
            top: theme.spacing(1),
            zIndex: 1,
          })}
        >
          <ContentCopyIcon
            sx={(theme) => ({ transform: "scaleX(-1)", color: theme.palette.action.active })}
          />
        </Box>
        <ShapeItemButton sequenceId={sequenceId} itemImage={itemImage} itemName={itemName} />
      </Wrapper>
    </Grid>
  );
};

export default FavoriteCard;
