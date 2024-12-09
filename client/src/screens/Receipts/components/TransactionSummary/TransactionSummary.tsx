import {
  Divider,
  DividerProps,
  ListItem,
  ListItemProps,
  ListItemText,
  ListItemTextProps,
  styled,
  Theme,
} from "@mui/material";
import React from "react";

const DividerStyled = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  margin: `${theme.spacing(1)} 0`,
}));

const Label = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  "& .MuiListItemText-primary": { fontWeight: "bold" },
}));

const TotalAmount = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  textAlign: "right",
  alignSelf: "start",
  "& .MuiListItemText-primary": { fontWeight: "bold" },
}));

const CashAmount = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  textAlign: "right",
}));

const TotalWrapper = styled(ListItem)<ListItemProps>(({}: { theme: Theme }) => ({
  paddingBottom: 0,
}));

const CashWrapper = styled(ListItem)<ListItemProps>(({}: { theme: Theme }) => ({
  paddingTop: 0,
}));

type TransactionSummaryProps = {
  totalAmount: string;
  cashAmount: string;
};
const TransactionSummary: React.FC<TransactionSummaryProps> = (props) => {
  const { cashAmount, totalAmount } = props;

  return (
    <>
      <DividerStyled component={"li"} />

      <TotalWrapper disablePadding>
        <Label>Total</Label>
        <TotalAmount>{totalAmount}</TotalAmount>
      </TotalWrapper>

      <CashWrapper disablePadding>
        <ListItemText>Cash</ListItemText>
        <CashAmount>{cashAmount}</CashAmount>
      </CashWrapper>

      <DividerStyled component={"li"} />
    </>
  );
};

export default TransactionSummary;
