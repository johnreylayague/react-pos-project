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
  itemPrice: string;
  itemTrackStock: boolean;
  onOpenDialog: (event: React.MouseEvent<HTMLDivElement>) => void;
};
const DetailListItem: React.FC<DetailListItemProps> = (props) => {
  const { onOpenDialog, itemInstock, itemName, itemPrice, itemId, itemCount, itemTrackStock } =
    props;

  const converetdItemPrice = convertToNumber("string", itemPrice);

  const price = formatToPesos(converetdItemPrice);

  const isOutOfStock = itemCount > itemInstock && itemTrackStock;

  return (
    <ListItemButton alignItems="flex-start" data-item-id={itemId} onClick={onOpenDialog}>
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
