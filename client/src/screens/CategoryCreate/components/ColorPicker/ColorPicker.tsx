import React from "react";
import {
  ButtonBase,
  Grid2 as Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Zoom,
} from "@mui/material";
import { CheckIconStyled, AvatarStyled } from "./ColorPickerStyles";
import assets from "../../../../assets/assets";

const colorData = assets.json.colorData;

type CategoryColorPickerProps = {
  watch: any;
  onChangeSelected: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ColorPicker: React.FC<CategoryColorPickerProps> = (props) => {
  const { onChangeSelected, watch } = props;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return (
    <Stack spacing={2}>
      <Typography color="success" component="div">
        Category color
      </Typography>

      <Grid container spacing={isSmallScreen ? 2 : 3}>
        {colorData.map((color) => {
          return (
            <Grid key={color.id} size={{ xs: 3, sm: 1.5 }}>
              <ButtonBase
                disableRipple
                key={color.id}
                data-color-id={color.id}
                onClick={onChangeSelected}
              >
                <AvatarStyled
                  imgProps={{ draggable: false }}
                  variant="rounded"
                  alt={color.color}
                  src={color.image}
                />
                <Zoom in={watch("colorId") === color.id}>
                  <CheckIconStyled />
                </Zoom>
              </ButtonBase>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default ColorPicker;
