import {
  Paper,
  List,
  styled,
  Theme,
  Button,
  Grid2,
  Grid2Props,
  Box,
  ListProps,
  BoxProps,
  ButtonProps,
  PaperProps,
} from "@mui/material";
import React from "react";
import ItemListItem from "../ItemListItem/ItemListItem";
import TotalAmount from "../TotalAmount/TotalAmount";
import ReceiptHeader from "../ReceiptHeader/ReceiptHeader";

const RefundContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  padding: `${theme.spacing(0)} ${theme.spacing(2)} ${theme.spacing(2)}`,
  marginTop: "auto",
}));

const PaperStyled = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  height: `calc(100vh - 112px)`,
  minHeight: "350px",
  display: "flex",
  flexDirection: "column",
}));

const ListStyled = styled(List)<ListProps>(({}: { theme: Theme }) => ({ overflowY: "auto" }));

const RefundButton = styled(Button)<ButtonProps>(({}: { theme: Theme }) => ({}));

type RefundReceiptProps = {
  gridProps: Grid2Props;
};

type itemProps = {
  id: number;
  itemName: string;
  itemCount: number;
  itemPrice: string;
};

const listData: itemProps[] = [
  // {
  //   id: 1,
  //   itemName: "Item 1",
  //   itemCount: 2221,
  //   itemPrice: "₱999,999.99",
  // },
  // { id: 2, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 3, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 4, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 5, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 6, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 7, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 8, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 9, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 10, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 11, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 12, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 13, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 14, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 15, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 16, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 17, itemName: "Item 2", itemCount: 5, itemPrice: "₱999,999.99" },
  // { id: 18, itemName: "Item 3", itemCount: 2, itemPrice: "₱999,999.99" },
];

const RefundReceipt: React.FC<RefundReceiptProps> = (props) => {
  const { gridProps = {} } = props;

  return (
    <Grid2 {...gridProps}>
      <PaperStyled elevation={3}>
        <ReceiptHeader title="Refund receipt" instruction="Tap item to cancel refund" />

        {listData.length > 0 && (
          <ListStyled disablePadding>
            {listData.map((item, index, array) => {
              const currentCount = index + 1;
              const isShowDivider = array.length !== currentCount;

              return (
                <ItemListItem
                  key={item.id}
                  isShowDivider={isShowDivider}
                  itemName={item.itemName}
                  itemCount={item.itemCount}
                  itemPrice={item.itemPrice}
                />
              );
            })}
          </ListStyled>
        )}

        <TotalAmount
          isShowDivider={listData.length > 0}
          primaryText="Total"
          secondaryText="₱999,999.99"
        />

        <RefundContainer>
          <RefundButton disableElevation fullWidth size="large" variant="contained" color="success">
            REFUND ₱999,999.99
          </RefundButton>
        </RefundContainer>
      </PaperStyled>
    </Grid2>
  );
};

export default RefundReceipt;
