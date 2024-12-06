import { Box } from "@mui/material";
import React from "react";

type CustomTabPanelState = {
  children?: React.ReactNode;
  value: number;
  index: number;
};

function CustomTabPanel(props: CustomTabPanelState) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default CustomTabPanel;
