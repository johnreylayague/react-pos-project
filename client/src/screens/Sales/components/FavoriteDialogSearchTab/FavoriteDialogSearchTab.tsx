import React from "react";
import { List, ListItemAvatar, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import {
  ListItemButtonStyled,
  ListItemStyled,
  ListItemTextStyled,
} from "./FavoriteDialogSearchTabStyles";
import assets from "../../../../assets/assets";
import FavoriteDialogTabPanel from "../FavoriteDialogTabPanel/FavoriteDialogTabPanel";

const searchList = [
  {
    id: 1,
    type: "item",
    imageSrc: assets.images.colorsAndShapes.Apple.Circle,
    imageAlt: "avatar 1",
    primary: "Candy",
    secondary: 13.0,
  },
  {
    id: 2,
    type: "category",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1669047669250-cf840626d320?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "avatar 2",
    primary: "Canned Foods",
    secondary: 3,
  },
  {
    id: 3,
    type: "item",
    imageSrc: assets.images.colorsAndShapes.CoralRedCircle.Circle,
    imageAlt: "avatar 2",
    primary: "Fish",
    secondary: 5.0,
  },
];

type FavoriteDialogSearchTabProps = {};

const FavoriteDialogSearchTab: React.FC<FavoriteDialogSearchTabProps> = (props) => {
  const {} = props;
  const selectedTab = useSelector((state: storeProps) => state.favoriteDialog.selectedTab);

  return (
    <FavoriteDialogTabPanel value={selectedTab} index={2}>
      <List>
        {searchList.map((search) => {
          const categorySecondary = `${search.secondary} ${
            search.secondary > 1 ? "items" : "item"
          }`;
          const ss = search.type === "item" ? `₱${search.secondary}` : categorySecondary;

          return (
            <ListItemStyled key={search.id}>
              <ListItemButtonStyled>
                <ListItemAvatar>
                  <Avatar alt={search.imageAlt} src={search.imageSrc} />
                </ListItemAvatar>
                <ListItemTextStyled
                  id={`${search.id}`}
                  primary={search.primary}
                  secondary={<>{ss}</>}
                />
              </ListItemButtonStyled>
            </ListItemStyled>
          );
        })}
      </List>
    </FavoriteDialogTabPanel>
  );
};

export default FavoriteDialogSearchTab;
