import React from "react";
import { List, ListItemAvatar, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import {
  ListItemButtonStyled,
  ListItemStyled,
  ListItemTextStyled,
} from "./FavoriteDialogItemTabStyles";
import assets from "../../../../assets/assets";
import FavoriteDialogTabPanel from "../FavoriteDialogTabPanel/FavoriteDialogTabPanel";

type FavoriteDialogItemTabProps = {};

const itemListChoices = [
  {
    id: 112,
    imageSrc: assets.images.colorsAndShapes.Apple.Circle,
    imageAlt: "avatar 1",
    itemName: "Line item 1",
    itemPrice: "₱11.00",
  },
  {
    id: 113,
    imageSrc: assets.images.colorsAndShapes.ButtonBlue.Circle,
    imageAlt: "avatar 2",
    itemName: "Line item 2",
    itemPrice: "₱112.00",
  },
  // {
  //   id: 3,
  //   imageSrc: assets.images.colorsAndShapes.SoftPeach.Circle,
  //   imageAlt: "avatar 1",
  //   itemName: "Line item 1",
  //   itemPrice: "₱2.00",
  // },
  // {
  //   id: 4,
  //   imageSrc:
  //     "https://plus.unsplash.com/premium_photo-1669047669250-cf840626d320?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   imageAlt: "avatar 2",
  //   itemName: "Line item 1",
  //   itemPrice: "₱12.00",
  // },
  // {
  //   id: 5,
  //   imageSrc:
  //     "https://plus.unsplash.com/premium_photo-1669047669250-cf840626d320?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   imageAlt: "avatar 2",
  //   itemName: "Line item 1",
  //   itemPrice: "₱12.00",
  // },
  // {
  //   id: 6,
  //   imageSrc:
  //     "https://plus.unsplash.com/premium_photo-1669047669250-cf840626d320?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   imageAlt: "avatar 2",
  //   itemName: "Line item 1",
  //   itemPrice: "₱12.00",
  // },
  // {
  //   id: 7,
  //   imageSrc:
  //     "https://plus.unsplash.com/premium_photo-1669047669250-cf840626d320?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   imageAlt: "avatar 2",
  //   itemName: "Line item 1",
  //   itemPrice: "₱12.00",
  // },
];

const FavoriteDialogItemTab: React.FC<FavoriteDialogItemTabProps> = (props) => {
  const {} = props;

  const selectedTab = useSelector((state: storeProps) => state.favoriteDialog.selectedTab);

  const handleDialogItemUpdate = (_event: React.MouseEvent<HTMLDivElement>) => {
    //
  };

  return (
    <FavoriteDialogTabPanel value={selectedTab} index={0}>
      <List>
        {itemListChoices.map((item) => {
          return (
            <ListItemStyled key={item.id}>
              <ListItemButtonStyled
                data-id={item.id}
                data-productname={item.itemName}
                data-imagealt={item.imageAlt}
                data-imagesrc={item.imageSrc}
                onClick={handleDialogItemUpdate}
              >
                <ListItemAvatar>
                  <Avatar alt={item.imageAlt} src={item.imageSrc} />
                </ListItemAvatar>
                <ListItemTextStyled
                  id={`${item.id}`}
                  primary={item.itemName}
                  secondary={item.itemPrice}
                />
              </ListItemButtonStyled>
            </ListItemStyled>
          );
        })}
      </List>
    </FavoriteDialogTabPanel>
  );
};

export default FavoriteDialogItemTab;
