import React from "react";
import { Grid2 as Grid, ButtonBase, Avatar, Zoom, IconProps, AvatarProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { Check } from "@mui/icons-material";
import { ColorDataProps } from "../../../../assets/assets";

const AvatarStyled = styled(Avatar)<AvatarProps>(({}: { theme: Theme }) => ({
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
  selected: boolean;
  onChangeColor: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ColorListItem: React.FC<ColorListItemProps> = (props) => {
  const { colorData, onChangeColor, selected } = props;

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
          alt={colorData.color}
          src={colorData.image}
        />
        <Zoom in={selected}>
          <CheckIconStyled />
        </Zoom>
      </ButtonBase>
    </Grid>
  );
};

export default ColorListItem;
