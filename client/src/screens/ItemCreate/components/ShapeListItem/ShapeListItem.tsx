import React from "react";
import { Grid2 as Grid, ButtonBase, Avatar, Zoom, AvatarProps, IconProps } from "@mui/material";
import { Check } from "@mui/icons-material";
import { styled, Theme } from "@mui/material/styles";
import { ShapesDataProps } from "../../../../store/item-slice";

const AvatarStyled = styled(Avatar)<AvatarProps>(({}: { theme: Theme }) => ({
  height: "100%",
  width: "100%",
}));

const CheckIconStyled = styled(Check)<IconProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1.5),
  },
  position: "absolute",
  color: "#757575",
  padding: theme.spacing(2),
  height: "100%",
  width: "100%",
}));

type ShapeListProps = {
  shapeData: ShapesDataProps;
  selected: boolean;
  onChangeShape: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ShapeListItem: React.FC<ShapeListProps> = (props) => {
  const { shapeData, onChangeShape, selected } = props;

  return (
    <Grid key={shapeData.id} size={{ xs: 3, sm: 1.5 }}>
      <ButtonBase
        disableRipple
        key={shapeData.id}
        data-shape-id={shapeData.id}
        onClick={onChangeShape}
      >
        <AvatarStyled
          imgProps={{ draggable: false }}
          variant="rounded"
          alt={shapeData.imgAlt}
          src={shapeData.imageSrc}
        />
        <Zoom in={selected}>
          <CheckIconStyled />
        </Zoom>
      </ButtonBase>
    </Grid>
  );
};

export default ShapeListItem;
