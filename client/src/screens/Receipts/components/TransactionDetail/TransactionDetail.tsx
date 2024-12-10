import {
  ListItem,
  ListItemProps,
  ListItemText,
  ListItemTextProps,
  Theme,
  styled,
} from "@mui/material";
import React from "react";

const Date = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  color: "#959595",
}));

const ReceiptNumber = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  textAlign: "right",
  color: "#959595",
}));

const ListItemStyled = styled(ListItem)<ListItemProps>(({}: { theme: Theme }) => ({
  paddingBottom: 0,
}));

type TransactionDetailProps = {
  transactionDate: string;
  receiptNumber: string;
};

const TransactionDetail: React.FC<TransactionDetailProps> = (props) => {
  const { transactionDate, receiptNumber } = props;

  return (
    <ListItemStyled disablePadding>
      <Date>{transactionDate}</Date>
      <ReceiptNumber>{receiptNumber}</ReceiptNumber>
    </ListItemStyled>
  );
};

export default TransactionDetail;
