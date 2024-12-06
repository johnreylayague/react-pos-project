import { Collapse, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import React from "react";
import { CustomizedList, CustomizedTypography } from "./ItemListStyles.ts";
import { useDispatch } from "react-redux";
import { dialogActions } from "../../../../store/dialog-slice.ts";

type ItemListProps = {};

const listItemData = [
  { id: 1, name: "Candy", quantity: 1, price: "₱1.00" },
  { id: 2, name: "Fish", quantity: 2, price: "₱2.00" },
  { id: 3, name: "Meat ball", quantity: 1, price: "₱3.00" },
  { id: 4, name: "Candy", quantity: 1, price: "₱1.00" },
  { id: 5, name: "Fish", quantity: 2, price: "₱2.00" },
  // { id: 6, name: "Meat ball", quantity: 1, price: "₱3.00" },
  // { id: 7, name: "Candy", quantity: 1, price: "₱1.00" },
  // { id: 8, name: "Fish", quantity: 2, price: "₱2.00" },
  // { id: 9, name: "Meat ball", quantity: 1, price: "₱3.00" },
  // { id: 10, name: "Candy", quantity: 1, price: "₱1.00" },
  // { id: 11, name: "Fish", quantity: 2, price: "₱2.00" },
  // { id: 12, name: "Meat ball", quantity: 1, price: "₱3.00" },
  // { id: 13, name: "Candy", quantity: 1, price: "₱1.00" },
  // { id: 14, name: "Fish", quantity: 2, price: "₱2.00" },
  // { id: 15, name: "Meat ball", quantity: 1, price: "₱3.00" },
  // { id: 16, name: "Candy", quantity: 1, price: "₱1.00" },
  // { id: 17, name: "Fish", quantity: 2, price: "₱2.00" },
];

const ItemList: React.FC<ItemListProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();

  const handleOpenDialog = () => {
    dispatch(dialogActions.openDialog());
  };

  return (
    <>
      <CustomizedList>
        <TransitionGroup>
          {listItemData.map((item) => {
            return (
              <Collapse key={item.id}>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleOpenDialog}>
                    <ListItemText
                      primary={
                        <>
                          {item.name}{" "}
                          <CustomizedTypography variant="h6" component="span">
                            x {item.quantity}
                          </CustomizedTypography>
                        </>
                      }
                      primaryTypographyProps={{
                        sx: () => ({
                          typography: "h6",
                        }),
                      }}
                      secondary={item.price}
                      secondaryTypographyProps={{
                        sx: () => ({
                          typography: "h6",
                          color: "inherit",
                        }),
                        component: "span",
                      }}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Collapse>
            );
          })}
        </TransitionGroup>
      </CustomizedList>
    </>
  );
};

export default ItemList;
