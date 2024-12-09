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
import { categoryColorDataProps } from "../../../../store/category-slice";

type CategoryColorPickerProps = {
  colorData: categoryColorDataProps[];
  onChangeSelected: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ColorPicker: React.FC<CategoryColorPickerProps> = (props) => {
  const { colorData, onChangeSelected } = props;

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
                  alt={color.imgAlt}
                  src={color.imageSrc}
                />
                <Zoom in={color.selected}>
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
