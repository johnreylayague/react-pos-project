import { ListItem, ListItemButton } from "@mui/material";
import { Detail, ItemName, Price, Quantity } from "./DetailListItemStyles";

type DetailListItemProps = {
  onOpenDialog: () => void;
};
const DetailListItem: React.FC<DetailListItemProps> = (props) => {
  const { onOpenDialog } = props;

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={onOpenDialog}>
          <Detail>
            <ItemName component={"span"} noWrap>
              Item 1
            </ItemName>
            <Quantity>X 1</Quantity>
          </Detail>
          <Price>₱0.02</Price>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default DetailListItem;
