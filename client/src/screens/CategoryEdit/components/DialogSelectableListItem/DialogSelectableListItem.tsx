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
import { categoryProps } from "../../../../store/category-slice";

type DialogSelectableListItemProps = {
  categoryData: categoryProps;
};
const DialogSelectableListItem: React.FC<DialogSelectableListItemProps> = (props) => {
  const { categoryData } = props;

  return (
    <React.Fragment>
      <ListItem secondaryAction={<Checkbox color="success" />} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar variant="square" alt={categoryData.title} src={categoryData.img} />
          </ListItemAvatar>
          <Typography noWrap>{categoryData.title}</Typography>
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default DialogSelectableListItem;
