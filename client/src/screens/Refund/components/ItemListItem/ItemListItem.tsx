import { styled, TypographyProps, Typography, Theme, ListItemButtonProps } from "@mui/material";
import React from "react";
import ListItemDetailButton from "../ListItemDetailButton/ListItemDetailButton";
import { formatToPesos } from "../../../../utils/format";

const ItemName = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({}));
const RefundText = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({
  display: "block",
}));

const ItemQuantity = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  flexShrink: 0,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

type ItemListItemProps = {
  isShowDivider: boolean;
  itemPrice: string;
  itemName: string;
  itemCount: number;
  refundCount?: number;
  refundedCount?: number;
} & ListItemButtonProps;
const ItemListItem: React.FC<ItemListItemProps> = (props) => {
  const {
    isShowDivider,
    itemCount,
    itemName,
    itemPrice,
    refundCount,
    refundedCount,
    ...otherProps
  } = props;

  const contentPrimarySecondary =
    refundCount || refundedCount
      ? {
          primarySecondary: (
            <>
              {refundedCount && (
                <RefundText component={"span"} color="error">
                  Refund x {refundedCount}
                </RefundText>
              )}
              {refundCount && (
                <RefundText component={"span"} color="warning">
                  Refund x {refundCount}
                </RefundText>
              )}
            </>
          ),
        }
      : {};

  const totalPrice = parseInt(itemPrice) * itemCount;

  return (
    <ListItemDetailButton
      {...contentPrimarySecondary}
      secondary={formatToPesos(totalPrice)}
      divider={isShowDivider}
      {...otherProps}
    >
      <ItemName component={"span"} noWrap>
        {itemName}
      </ItemName>
      <ItemQuantity component={"span"} color="textDisabled">
        x {itemCount}
      </ItemQuantity>
    </ListItemDetailButton>
  );
};

export default ItemListItem;
