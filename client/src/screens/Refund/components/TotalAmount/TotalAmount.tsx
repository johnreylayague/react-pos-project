import { Divider, List } from "@mui/material";
import React from "react";
import ListItemDetailText from "../ListItemDetailText/ListItemDetailText";
import { formatToPesos } from "../../../../utils/format";

type TotalAmountProps = {
  isShowDivider: boolean;
  primaryText: string;
  secondaryText: string;
};
const TotalAmount: React.FC<TotalAmountProps> = (props) => {
  const { isShowDivider, primaryText, secondaryText } = props;

  return (
    <>
      {isShowDivider && <Divider />}

      <List>
        <ListItemDetailText
          secondary={formatToPesos(secondaryText)}
          primaryHighlight
          secondaryHighlight
        >
          {primaryText}
        </ListItemDetailText>
      </List>
    </>
  );
};

export default TotalAmount;
