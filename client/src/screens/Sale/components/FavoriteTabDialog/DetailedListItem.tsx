import React from "react";
import { ListItem, ListItemAvatar, Avatar, Divider } from "@mui/material";
import { ListItemButtonStyled, Detail, Label } from "./DetailedListItemStyles";

type DetailedListItemProps = {
  label: string;
  alt: string;
  imageSrc: string;
  itemPrice?: string;
  categoryCount?: number;
};

const DetailedListItem: React.FC<DetailedListItemProps> = (props) => {
  const { categoryCount, itemPrice, label, alt, imageSrc } = props;

  const formattedCategoryCount =
    categoryCount?.toString() && categoryCount > 1
      ? `${categoryCount} items`
      : `${categoryCount} item`;

  return (
    <>
      <ListItem disablePadding>
        <ListItemButtonStyled>
          <ListItemAvatar>
            <Avatar alt={alt} src={imageSrc} />
          </ListItemAvatar>

          <Label>{label}</Label>

          <Detail>
            {itemPrice && <>₱{itemPrice}</>}
            {categoryCount?.toString() && formattedCategoryCount}
          </Detail>
        </ListItemButtonStyled>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default DetailedListItem;
