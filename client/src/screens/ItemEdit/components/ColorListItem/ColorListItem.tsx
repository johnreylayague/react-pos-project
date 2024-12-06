import React from "react";
import { ColorDataProps } from "../../../../store/item-slice";
import { Grid2 as Grid, ButtonBase, Avatar, Zoom, IconProps, AvatarProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { Check } from "@mui/icons-material";

const AvatarStyled = styled(Avatar)<AvatarProps>(({ theme }: { theme: Theme }) => ({
  height: "100%",
  width: "100%",
}));

const CheckIconStyled = styled(Check)<IconProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1.5),
  },
  position: "absolute",
  color: "#fff",
  padding: theme.spacing(2),
  height: "100%",
  width: "100%",
}));

type ColorListItemProps = {
  colorData: ColorDataProps;
  onChangeColor: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ColorListItem: React.FC<ColorListItemProps> = (props) => {
  const { colorData, onChangeColor } = props;

  return (
    <Grid key={colorData.id} size={{ xs: 3, sm: 1.5 }}>
      <ButtonBase
        disableRipple
        key={colorData.id}
        data-color-id={colorData.id}
        onClick={onChangeColor}
      >
        <AvatarStyled
          imgProps={{ draggable: false }}
          variant="rounded"
          alt={colorData.imgAlt}
          src={colorData.imageSrc}
        />
        <Zoom in={colorData.selected}>
          <CheckIconStyled />
        </Zoom>
      </ButtonBase>
    </Grid>
  );
};

export default ColorListItem;
