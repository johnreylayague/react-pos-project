import { ListItem, ListItemButton } from "@mui/material";
import { ItemDetails, Quantity, ItemPrice, ItemName } from "./TotalListItemStyles";

type TotalListItemProps = {
  itemName: string;
  itemCount: number;
  itemPrice: string;
};
const TotalListItem: React.FC<TotalListItemProps> = (props) => {
  const { itemName, itemPrice, itemCount } = props;

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ItemDetails>
          <ItemName component={"span"} noWrap>
            {itemName}
          </ItemName>
          <Quantity>X {itemCount}</Quantity>
        </ItemDetails>
        <ItemPrice>₱{itemPrice}</ItemPrice>
      </ListItemButton>
    </ListItem>
  );
};

export default TotalListItem;
