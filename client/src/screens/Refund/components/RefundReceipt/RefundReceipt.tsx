import { Grid2, Grid2Props } from "@mui/material";
import React from "react";
import ItemListItem from "../ItemListItem/ItemListItem";
import TotalAmount from "../TotalAmount/TotalAmount";
import ReceiptHeader from "../ReceiptHeader/ReceiptHeader";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import { formatToPesos } from "../../../../utils/format";
import { PaperStyled, RefundContainer, ListStyled, RefundButton } from "./RefundReceiptStyles";

type RefundReceiptProps = {
  gridProps: Grid2Props;
  removeRefundItem: (event: React.MouseEvent<HTMLDivElement>) => void;
  onRefundItem: () => void;
};

const RefundReceipt: React.FC<RefundReceiptProps> = (props) => {
  const { gridProps = {}, removeRefundItem, onRefundItem } = props;

  const refundData = useSelector((state: storeProps) => state.refund.refundData);
  const receiptId = useSelector((state: storeProps) => state.refund.receiptId);
  const purchasedItems = useSelector((state: storeProps) => state.sale.purchasedItems);

  const totalPrice = refundData
    .filter((refund) => refund.refunded)
    .reduce((accumulator, refund) => {
      const findPurchasedItem =
        purchasedItems.find((item) => item.receiptId === receiptId && item.id === refund.itemId)
          ?.price || "0";

      const totalPrice = refund.refundCount * parseFloat(findPurchasedItem);

      accumulator = totalPrice + accumulator;
      return accumulator;
    }, 0);

  return (
    <Grid2 {...gridProps}>
      <PaperStyled elevation={3}>
        <ReceiptHeader title="Refund receipt" instruction="Tap item to cancel refund" />

        {refundData.length > 0 && (
          <ListStyled disablePadding>
            {refundData
              .filter((refund) => refund.refunded)
              .map((refund, index, array) => {
                const currentCount = index + 1;
                const isShowDivider = array.length !== currentCount;

                const findPurchasedItem = purchasedItems.find(
                  (item) => item.receiptId === receiptId && item.id === refund.itemId
                );

                return (
                  <ItemListItem
                    key={refund.itemId}
                    isShowDivider={isShowDivider}
                    data-item-id={refund.itemId}
                    itemName={findPurchasedItem?.name || ""}
                    itemCount={refund.refundCount}
                    itemPrice={findPurchasedItem?.price || ""}
                    onClick={removeRefundItem}
                  />
                );
              })}
          </ListStyled>
        )}

        <TotalAmount
          isShowDivider={refundData.filter((refund) => refund.refunded).length > 0}
          primaryText="Total"
          secondaryText={totalPrice.toString()}
        />

        <RefundContainer>
          <RefundButton
            disabled={refundData.filter((refund) => refund.refunded).length <= 0}
            onClick={onRefundItem}
            disableElevation
            fullWidth
            size="large"
            variant="contained"
            color="success"
          >
            REFUND {formatToPesos(totalPrice)}
          </RefundButton>
        </RefundContainer>
      </PaperStyled>
    </Grid2>
  );
};

export default RefundReceipt;
