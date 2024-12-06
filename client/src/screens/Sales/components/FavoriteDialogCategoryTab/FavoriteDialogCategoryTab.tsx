import {
  ListItemButtonStyled,
  ListItemStyled,
  ListItemTextStyled,
} from "./FavoriteDialogCategoryTabStyles";
import { List, ListItemAvatar, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import assets from "../../../../assets/assets";
import FavoriteDialogTabPanel from "../FavoriteDialogTabPanel/FavoriteDialogTabPanel";

const categoriesList = [
  {
    id: 1,
    imageSrc: assets.images.colorsAndShapes.Apple.Circle,
    imageAlt: "avatar 1",
    categoryName: "Candy",
    totalCategory: 1,
  },
  {
    id: 2,
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1669047669250-cf840626d320?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "avatar 2",
    categoryName: "Canned Goods",
    totalCategory: 3,
  },
];

type FavoriteDialogCategoryTabProps = {};

const FavoriteDialogCategoryTab: React.FC<FavoriteDialogCategoryTabProps> = (props) => {
  const {} = props;
  const selectedTab = useSelector((state: storeProps) => state.favoriteDialog.selectedTab);

  return (
    <FavoriteDialogTabPanel value={selectedTab} index={1}>
      <List>
        {categoriesList.map((category) => {
          return (
            <ListItemStyled key={category.id}>
              <ListItemButtonStyled>
                <ListItemAvatar>
                  <Avatar alt={category.imageAlt} src={category.imageSrc} />
                </ListItemAvatar>
                <ListItemTextStyled
                  id={`${category.id}`}
                  primary={category.categoryName}
                  secondary={
                    <>
                      {category.totalCategory > 1
                        ? `${category.totalCategory} items`
                        : `${category.totalCategory} item`}
                    </>
                  }
                />
              </ListItemButtonStyled>
            </ListItemStyled>
          );
        })}
      </List>
    </FavoriteDialogTabPanel>
  );
};

export default FavoriteDialogCategoryTab;
