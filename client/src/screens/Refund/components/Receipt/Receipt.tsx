import { Grid2, Grid2Props } from "@mui/material";
import React from "react";
import ReceiptHeader from "../ReceiptHeader/ReceiptHeader";
import TotalAmount from "../TotalAmount/TotalAmount";
import ItemListItem from "../ItemListItem/ItemListItem";
import { ListStyled, PaperStyled } from "./ReceiptStyles";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";

type ReceiptProps = {
  gridProps: Grid2Props;
  onOpenDialog: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const Receipt: React.FC<ReceiptProps> = (props) => {
  const { gridProps = {}, onOpenDialog } = props;

  const refundData = useSelector((state: storeProps) => state.refund.refundData);
  const refundedData = useSelector((state: storeProps) => state.refund.refundedData);
  const receiptId = useSelector((state: storeProps) => state.refund.receiptId);
  const purchasedItems = useSelector((state: storeProps) => state.sale.purchasedItems);

  const totalPrice = refundData.reduce((accumulator, refund) => {
    const findPurchasedItem = purchasedItems.find((item) => item.id === refund.itemId);
    accumulator = parseFloat(findPurchasedItem?.accumulatedPrice || "0") + accumulator;
    return accumulator;
  }, 0);

  return (
    <Grid2 {...gridProps}>
      <PaperStyled elevation={3}>
        <ReceiptHeader title="Receipt #9-1004" instruction="Tap item to refund" />

        {refundData.length > 0 && (
          <ListStyled disablePadding>
            {refundData.map((refund, index, array) => {
              const currentCount = index + 1;
              const isShowDivider = array.length !== currentCount;

              const findPurchasedItem = purchasedItems.find(
                (item) => item.receiptId === receiptId && item.id === refund.itemId
              );

              const contentRefundCount = refund.refundCount
                ? { refundCount: refund.refundCount }
                : {};

              const totalRefundedCount = refundedData
                .filter(
                  (refunded) =>
                    refunded.itemId === refund.itemId && refunded.receiptId === receiptId
                )
                .reduce((accumulator, refunded) => {
                  accumulator = refunded.refundCount + accumulator;
                  return accumulator;
                }, 0);

              const contentRefundedCount = totalRefundedCount
                ? { refundedCount: totalRefundedCount }
                : {};

              return (
                <ItemListItem
                  key={refund.itemId}
                  data-item-id={refund.itemId}
                  data-item-name={findPurchasedItem?.name || ""}
                  data-item-count={findPurchasedItem?.count || 0}
                  onClick={onOpenDialog}
                  isShowDivider={isShowDivider}
                  itemCount={findPurchasedItem?.count || 0}
                  itemName={findPurchasedItem?.name || ""}
                  itemPrice={findPurchasedItem?.price || ""}
                  disabled={totalRefundedCount === findPurchasedItem?.count}
                  {...contentRefundCount}
                  {...contentRefundedCount}
                />
              );
            })}
          </ListStyled>
        )}

        <TotalAmount
          isShowDivider={refundData.length > 0}
          primaryText="Total"
          secondaryText={totalPrice.toString()}
        />
      </PaperStyled>
    </Grid2>
  );
};

export default Receipt;
