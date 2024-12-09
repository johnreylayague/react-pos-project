import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { DividerStyled, Label, Amount } from "./TotalSummaryListStyles";

type TotalSummaryListProps = {
  label: string;
  amount: number;
};
const TotalSummaryList: React.FC<TotalSummaryListProps> = (props) => {
  const { amount, label } = props;

  return (
    <List disablePadding>
      <DividerStyled component={"li"} />
      <ListItem>
        <Label>{label}</Label>
        <Amount>₱{amount}</Amount>
      </ListItem>
    </List>
  );
};

export default TotalSummaryList;
