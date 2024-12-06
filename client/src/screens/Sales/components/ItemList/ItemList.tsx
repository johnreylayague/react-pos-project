import React from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import Item from "../Item/Item";
import assets from "../../../../assets/assets";

type ImageListProps = {};

const ImageList: React.FC<ImageListProps> = (props) => {
  const {} = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {assets.json.itemList.map((item) => {
          return (
            <Item
              key={item.id}
              productName={item.productName}
              backgroundImage={item.backgroundImage}
              color={item.color}
              shape={item.shape}
            />
          );
        })}
      </Grid>
    </Box>
  );
};
export default ImageList;
