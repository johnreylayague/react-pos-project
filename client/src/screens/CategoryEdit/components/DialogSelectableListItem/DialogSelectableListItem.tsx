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

type DialogSelectableListItemProps = {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  itemName: string;
  itemRepresentation: string;
  itemColorAndShapeImage: string;
  itemImage: string;
  itemId: number;
  itemIsSelected: boolean;
};
const DialogSelectableListItem: React.FC<DialogSelectableListItemProps> = (props) => {
  const {
    onChange,
    onClick,
    itemColorAndShapeImage,
    itemImage,
    itemName,
    itemRepresentation,
    itemId,
    itemIsSelected,
  } = props;

  const image = itemRepresentation === "colorAndShape" ? itemColorAndShapeImage : itemImage;

  const variant = itemRepresentation === "colorAndShape" ? "square" : "circular";

  return (
    <React.Fragment>
      <ListItem
        secondaryAction={
          <Checkbox
            color="success"
            inputProps={
              {
                "data-id": itemId,
              } as React.HtmlHTMLAttributes<HTMLInputElement>
            }
            checked={itemIsSelected}
            onChange={onChange}
          />
        }
        disablePadding
      >
        <ListItemButton onClick={onClick} data-id={itemId}>
          <ListItemAvatar>
            <Avatar variant={variant} alt={itemName} src={image} />
          </ListItemAvatar>
          <Typography noWrap>{itemName}</Typography>
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default DialogSelectableListItem;
