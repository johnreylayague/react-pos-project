import { ListItemText, Divider } from "@mui/material";
import React from "react";
import { ListItemStyled, ListItemButtonStyled, ListItemAvatarStyled } from "../../CategoryStyles";
import { InteractionEventHandlers } from "../../../../hooks/Category/useListItemInteractionHandlers";
import SelectableAvatar from "../SelectableAvatar/SelectableAvatar";
import assets from "../../../../assets/assets";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import { categoryList } from "../../../../store/category-slice";

type CategoryListItemProps = {
  onInteractionHandlers: InteractionEventHandlers;
  categoryData: categoryList;
};

const CategoryListItem: React.FC<CategoryListItemProps> = (props) => {
  const { onInteractionHandlers, categoryData } = props;

  const colorData = assets.json.colorData.find((color) => color.id === categoryData.colorId);
  const itemList = useSelector((state: storeProps) => state.item.itemList);

  const itemCount = itemList.filter((item) => item.categoryId === categoryData.id).length;

  return (
    <React.Fragment>
      <ListItemStyled>
        <ListItemButtonStyled
          selected={categoryData.isSelected}
          data-selected={categoryData.isSelected}
          data-category-id={categoryData.id}
          {...onInteractionHandlers}
        >
          <ListItemAvatarStyled>
            <SelectableAvatar
              itemName={categoryData.name}
              imageSrc={colorData?.image || ""}
              selected={categoryData.isSelected}
              timeout={350}
              variant="circular"
            />
          </ListItemAvatarStyled>
          <ListItemText secondary={<>{itemCount} items</>}>{categoryData.name}</ListItemText>
        </ListItemButtonStyled>
      </ListItemStyled>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default CategoryListItem;
