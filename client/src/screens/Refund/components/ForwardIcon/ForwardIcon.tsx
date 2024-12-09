import { Forward } from "@mui/icons-material";
import { Grid2, Grid2Props } from "@mui/material";
import React from "react";

type ForwardIconProps = { gridProps: Grid2Props };
const ForwardIcon: React.FC<ForwardIconProps> = (props) => {
  const { gridProps = {} } = props;

  return (
    <Grid2
      {...gridProps}
      sx={(theme) => ({ display: "flex", alignItems: "center", justifyContent: "center" })}
    >
      <Forward
        sx={(theme) => ({
          fontSize: theme.spacing(8),
          color: "#a6a6a6",
        })}
      />
    </Grid2>
  );
};

export default ForwardIcon;
