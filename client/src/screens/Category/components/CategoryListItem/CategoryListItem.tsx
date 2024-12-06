import { Check } from "@mui/icons-material";
import { ListItemAvatar, Fade, Avatar, ListItemText, Divider } from "@mui/material";
import React from "react";
import {
  ListItemStyled,
  ListItemButtonStyled,
  AvatarStyled,
  ListItemAvatarStyled,
} from "../../CategoryStyles";
import { categoryProps } from "../../../../store/category-slice";
import { InteractionEventHandlers } from "../../../../hooks/Category/useCategoryInteractionHandlers";
import SelectableAvatar from "../SelectableAvatar/SelectableAvatar";

type CategoryListItemProps = {
  onInteractionHandlers: InteractionEventHandlers;
  categoryData: categoryProps;
};

const CategoryListItem: React.FC<CategoryListItemProps> = (props) => {
  const { onInteractionHandlers, categoryData } = props;

  return (
    <React.Fragment>
      <ListItemStyled>
        <ListItemButtonStyled
          selected={categoryData.selected}
          data-selected={categoryData.selected}
          data-category-id={categoryData.id}
          {...onInteractionHandlers}
        >
          <ListItemAvatarStyled>
            <SelectableAvatar
              itemName={categoryData.title}
              imageSrc={categoryData.img}
              selected={categoryData.selected}
              timeout={350}
              variant="circular"
            />
          </ListItemAvatarStyled>
          <ListItemText secondary={<>{categoryData.quantity} items</>}>
            {categoryData.title}
          </ListItemText>
        </ListItemButtonStyled>
      </ListItemStyled>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default CategoryListItem;
