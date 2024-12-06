import React from "react";
import {
  Container,
  List,
  styled,
  Theme,
  ContainerProps,
  Box,
  CSSObject,
  BoxProps,
  Paper,
  PaperProps,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import PriceSummary from "./components/PriceSummary/PriceSummary";
import ReceiptInfo from "./components/ReceiptInfo/ReceiptInfo";
import ListItemDetail from "./components/ListItemDetail/ListItemDetail";
import TransactionSummary from "./components/TransactionSummary/TransactionSummary";
import TransactionDetail from "./components/TransactionDetail/TransactionDetail";

const ContainerStyled = styled(Container)<ContainerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingTop: 0,
    paddingBottom: 0,
  } as CSSObject,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: `calc(100vh - 56px)`,
  } as CSSObject,
  overflowY: "auto",
  height: `calc(100vh - 64px)`,
}));

const PaperStyled = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    boxShadow: "none",
    paddingLeft: 0,
    paddingRight: 0,
  },
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
  background: theme.palette.common.white,
}));

type ReceiptProps = {};
const Receipt: React.FC<ReceiptProps> = (props) => {
  const {} = props;

  const params = useParams<{ receiptId: string }>();

  const receiptId = params.receiptId ? params.receiptId : 1;

  return (
    <>
      <Header transactionNumber={`#${receiptId}-1000`} backNavigation=".." />

      <BoxStyled>
        <ContainerStyled maxWidth="md">
          <PaperStyled>
            <List>
              <PriceSummary amount="₱1,000,101.11" label="Total" />

              <ReceiptInfo employeeName={`Owner ${receiptId}`} posId={`${receiptId}`} />

              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <ListItemDetail
                    key={index}
                    itemName="Item 1"
                    itemAmount="₱1,000,101.11"
                    itemCount="1 x ₱ 1,000,101.11"
                  />
                );
              })}

              <TransactionSummary cashAmount="₱ 1,000,101.11" totalAmount="₱ 1,000,101.11" />

              <TransactionDetail
                transactionDate="11/1/24 8:25 PM"
                receiptNumber={`#${receiptId}-1000`}
              />
            </List>
          </PaperStyled>
        </ContainerStyled>
      </BoxStyled>
    </>
  );
};

export default Receipt;
