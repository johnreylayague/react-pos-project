import { ListItemButton, Stack } from "@mui/material";
import {
  AlertNotification,
  Detail,
  ItemName,
  Price,
  Quantity,
  WarningIcon,
} from "./DetailListItemStyles";
import { formatToPesos } from "../../../../utils/format";
import { convertToNumber } from "../../../../utils/typescriptHelpers";

type DetailListItemProps = {
  itemName: string;
  itemInstock: number;
  itemCount: number;
  itemId: number;
  itemTrackStock: boolean;
  itemPrice: string;
};
const DetailListItem: React.FC<DetailListItemProps> = (props) => {
  const { itemInstock, itemName, itemPrice, itemId, itemCount, itemTrackStock } = props;

  const converetdPrice = convertToNumber("string", itemPrice);

  const price = formatToPesos(converetdPrice);

  const isOutOfStock = itemCount > itemInstock && itemTrackStock;

  return (
    <ListItemButton alignItems="flex-start" data-item-id={itemId}>
      <Detail
        {...(isOutOfStock
          ? {
              secondary: (
                <Stack component={"span"} direction={"row"} spacing={1}>
                  <WarningIcon fontSize="small" />
                  <AlertNotification component={"span"} variant="body1">
                    {itemInstock <= 0 ? `Out of stock` : `Only ${itemInstock} in stock`}
                  </AlertNotification>
                </Stack>
              ),
            }
          : {})}
      >
        <ItemName component={"span"} noWrap>
          {itemName}
        </ItemName>
        {<Quantity>X {itemCount}</Quantity>}
      </Detail>
      <Price>{price}</Price>
    </ListItemButton>
  );
};

export default DetailListItem;
