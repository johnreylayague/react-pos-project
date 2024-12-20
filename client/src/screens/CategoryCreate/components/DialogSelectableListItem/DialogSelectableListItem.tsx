import {
  ListItem,
  Checkbox,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import { itemListProps } from "../../../../store/item-slice";

type DialogSelectableListItemProps = {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  itemData: itemListProps;
};
const DialogSelectableListItem: React.FC<DialogSelectableListItemProps> = (props) => {
  const { itemData, onClick, onChange } = props;

  const image =
    itemData.representation === "colorAndShape" ? itemData.colorAndShapeImage : itemData.image;

  const variant = itemData.representation === "colorAndShape" ? "square" : "circular";

  return (
    <React.Fragment>
      <ListItem
        secondaryAction={
            <Checkbox
              color="success"
              inputProps={
                {
                  "data-id": itemData.id,
                } as React.HtmlHTMLAttributes<HTMLInputElement>
              }
              checked={itemData.isSelected}
              onChange={onChange}
            />
        }
        disablePadding
      >
        <ListItemButton onClick={onClick} data-id={itemData.id}>
          <ListItemAvatar>
            <Avatar variant={variant} alt={itemData.name} src={image} />
          </ListItemAvatar>
          <Typography noWrap>{itemData.name}</Typography>
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default DialogSelectableListItem;
