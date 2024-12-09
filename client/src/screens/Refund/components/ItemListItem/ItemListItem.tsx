import { styled, TypographyProps, Typography, Theme, ListItemButtonProps } from "@mui/material";
import React from "react";
import ListItemDetailButton from "../ListItemDetailButton/ListItemDetailButton";

const ItemName = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({}));
const RefundText = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({}));

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
} & ListItemButtonProps;
const ItemListItem: React.FC<ItemListItemProps> = (props) => {
  const { isShowDivider, itemCount, itemName, itemPrice, refundCount, ...otherProps } = props;

  const contentPrimarySecondary = refundCount
    ? { primarySecondary: <RefundText color="warning">Refund x {refundCount}</RefundText> }
    : {};

  return (
    <ListItemDetailButton
      {...contentPrimarySecondary}
      secondary={itemPrice}
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
