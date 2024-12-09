import { List, Divider, ListItem, Typography, ListItemText } from "@mui/material";
import React from "react";

type MobileTotalAmountProps = {
  primary: string;
  secondary: string;
};
const MobileTotalAmount: React.FC<MobileTotalAmountProps> = (props) => {
  const { primary, secondary } = props;

  return (
    <List
      disablePadding
      sx={(theme) => ({
        marginLeft: `-${theme.spacing(2)}`,
        marginRight: `-${theme.spacing(2)}`,
      })}
    >
      <Divider component={"li"} />
      <ListItem>
        <Typography
          noWrap
          sx={(theme) => ({
            fontWeight: "bold",
          })}
        >
          {primary}
        </Typography>
        <ListItemText
          sx={(theme) => ({
            "& .MuiListItemText-primary": { fontWeight: "bold" },
            textAlign: "right",
            paddingLeft: theme.spacing(2),
            flexShrink: 0,
          })}
        >
          {secondary}
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default MobileTotalAmount;
