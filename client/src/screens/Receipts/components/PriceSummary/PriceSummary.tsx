import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

type PriceSummaryProps = { label: string; amount: string };

const PriceSummary: React.FC<PriceSummaryProps> = (props) => {
  const { amount, label } = props;

  return (
    <ListItem disablePadding>
      <ListItemText
        secondary={
          <Typography
            component={"div"}
            noWrap
            sx={(theme) => ({ textAlign: "center", color: "#959595", ...theme.typography.h6 })}
          >
            {label}
          </Typography>
        }
      >
        <Typography
          component={"div"}
          noWrap
          sx={(theme) => ({ textAlign: "center", ...theme.typography.h4 })}
        >
          {amount}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export default PriceSummary;
