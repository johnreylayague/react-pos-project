import {
  Paper,
  List,
  styled,
  Theme,
  Grid2,
  Grid2Props,
  ListProps,
  PaperProps,
  CSSObject,
} from "@mui/material";
import React from "react";
import ReceiptHeader from "../ReceiptHeader/ReceiptHeader";
import TotalAmount from "../TotalAmount/TotalAmount";
import ItemListItem from "../ItemListItem/ItemListItem";
import { itemListProps } from "../../../../store/refund-slice";

const ListStyled = styled(List)<ListProps>(({}: { theme: Theme }) => ({ overflowY: "auto" }));

const PaperStyled = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  height: `calc(100vh - 112px)`,
  minHeight: "350px",
  display: "flex",
  flexDirection: "column",
}));

type ReceiptProps = {
  gridProps: Grid2Props;
  onOpenDialog: (event: React.MouseEvent<HTMLDivElement>) => void;
  itemData: itemListProps[];
};

const Receipt: React.FC<ReceiptProps> = (props) => {
  const { gridProps = {}, onOpenDialog, itemData } = props;

  return (
    <Grid2 {...gridProps}>
      <PaperStyled elevation={3}>
        <ReceiptHeader title="Receipt #9-1004" instruction="Tap item to refund" />

        {itemData.length > 0 && (
          <ListStyled disablePadding>
            {itemData.map((item, index, array) => {
              const currentCount = index + 1;
              const isShowDivider = array.length !== currentCount;

              const contentRefundCount = item.refundedCount
                ? { refundCount: item.refundedCount }
                : {};

              return (
                <ItemListItem
                  key={item.id}
                  data-item-id={item.id}
                  data-item-name={item.itemName}
                  data-item-count={item.itemCount}
                  onClick={onOpenDialog}
                  isShowDivider={isShowDivider}
                  itemCount={item.itemCount}
                  itemName={item.itemName}
                  itemPrice={item.itemPrice}
                  {...contentRefundCount}
                />
              );
            })}
          </ListStyled>
        )}

        <TotalAmount
          isShowDivider={itemData.length > 0}
          primaryText="Total"
          secondaryText="₱999,999.99"
        />
      </PaperStyled>
    </Grid2>
  );
};

export default Receipt;
