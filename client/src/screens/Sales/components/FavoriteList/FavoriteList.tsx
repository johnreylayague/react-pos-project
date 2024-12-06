import React from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import FavoriteDialog from "../FavoriteDialog/FavoriteDialog";

const itemListData = [
  {
    id: 1,
    productName: "Item 1",
    backgroundImage: "",
    color: "Razzmatazz",
    shape: "Octagon",
  },

  { id: 4, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 5, productName: "", backgroundImage: "", color: "", shape: "" },
  {
    id: 2,
    productName: "Item 2",
    backgroundImage: "",
    color: "",
    shape: "",
  },
  { id: 6, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 7, productName: "", backgroundImage: "", color: "", shape: "" },
  {
    id: 3,
    productName: "Item 3",
    backgroundImage: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    color: "",
    shape: "",
  },
  { id: 8, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 9, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 10, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 11, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 12, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 13, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 14, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 15, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 16, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 17, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 18, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 19, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 20, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 21, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 22, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 23, productName: "", backgroundImage: "", color: "", shape: "" },
  { id: 24, productName: "", backgroundImage: "", color: "", shape: "" },
];

interface FavoriteListProps {}

const FavoriteList: React.FC<FavoriteListProps> = (props) => {
  const {} = props;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {itemListData.map((item) => {
            return <FavoriteItem key={item.id} itemData={item} />;
          })}
        </Grid>
      </Box>
      <FavoriteDialog />
    </>
  );
};

export default FavoriteList;
