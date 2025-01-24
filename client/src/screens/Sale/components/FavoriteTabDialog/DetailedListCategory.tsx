import React from "react";
import { ListItem, ListItemAvatar, Avatar, Divider } from "@mui/material";
import { ListItemButtonStyled, Detail, Label } from "./DetailedListCategoryStyles.ts";

type DetailedListCategoryProps = {
  onAddCategory: (event: React.MouseEvent<HTMLDivElement>) => void;
  categoryName: string;
  categoryImage: string | undefined;
  categoryId: number;
  categoryItemCount: number;
};

const DetailedListCategory: React.FC<DetailedListCategoryProps> = (props) => {
  const { categoryName, categoryItemCount, onAddCategory, categoryId, categoryImage } = props;

  return (
    <>
      <ListItem disablePadding>
        <ListItemButtonStyled onClick={onAddCategory} data-category-id={categoryId}>
          <ListItemAvatar>
            <Avatar alt={categoryName} src={categoryImage} />
          </ListItemAvatar>

          <Label>{categoryName}</Label>

          <Detail>
            {categoryItemCount === 0 ? `${categoryItemCount} Item` : `${categoryItemCount} Items`}
          </Detail>
        </ListItemButtonStyled>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default DetailedListCategory;
