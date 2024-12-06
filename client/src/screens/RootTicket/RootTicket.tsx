import React, { HTMLAttributes } from "react";
import {
  AppBar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { drawerWidth } from "../../utils/componentStyles";
import { Outlet } from "react-router-dom";

const Quantity = styled("span")<HTMLAttributes<HTMLSpanElement>>(({ theme }) => ({
  color: "red",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(3),
  flexShrink: 0,
}));

type RootTicketProps = {};

const sideBarWidth = {
  xs: "100%",
  sm: "100%",
  md: 490,
  lg: 490,
};

const RootTicket: React.FC<RootTicketProps> = (props) => {
  const {} = props;

  return (
    <>
      <Box sx={(theme) => ({ display: "flex", height: "100vh" })}>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
            flex: 1,
            display: "flex",
            flexDirection: "column",
            maxWidth: sideBarWidth.md,
            borderRight: `1px solid ${theme.palette.divider}`,
          })}
        >
          <AppBar
            color="success"
            position="static"
            elevation={0}
            sx={(theme) => ({
              bgcolor: theme.palette.common.white,
              borderBottom: `1px solid ${theme.palette.divider}`,
            })}
          >
            <Toolbar>
              <Typography
                component={"h6"}
                variant="h6"
                sx={(theme) => ({ color: theme.palette.common.black })}
              >
                Ticket
              </Typography>
            </Toolbar>
          </AppBar>
          <List sx={(theme) => ({ overflowY: "auto" })}>
            {Array.from({ length: 1 }).map((_, index) => {
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemText
                      sx={(theme) => ({ "& .MuiListItemText-primary": { display: "flex" } })}
                    >
                      <Typography component={"span"} noWrap>
                        Item 1
                      </Typography>
                      <Quantity>X 1</Quantity>
                    </ListItemText>
                    <ListItemText
                      sx={() => ({
                        textAlign: "right",
                        flexShrink: 0,
                      })}
                    >
                      ₱0.02
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <List disablePadding>
            <Divider
              component={"li"}
              sx={(theme) => ({ marginLeft: theme.spacing(2), marginRight: theme.spacing(2) })}
            />
            <ListItem>
              <ListItemText
                sx={(theme) => ({ "& .MuiListItemText-primary": { fontWeight: "bold" } })}
              >
                Total
              </ListItemText>
              <ListItemText
                sx={(theme) => ({
                  "& .MuiListItemText-primary": { fontWeight: "bold", textAlign: "right" },
                })}
              >
                ₱0.02
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              maxWidth: "100%",
            },

            flex: 1,
            maxWidth: `calc(100vw - ${sideBarWidth.md}px)`,
          })}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default RootTicket;
// import React from "react";
// import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
// import { drawerWidth } from "../../utils/componentStyles";
// import { Outlet } from "react-router-dom";

// const ticketList = [
//   {
//     id: 1,
//     // itemName:
//     //   "Item 1 Item 1Item 1 Item 1Item 1 Item 1Item 1 Item 1Item 1 Item 1Item 1 Item 1Item 1 Item 1Item 1 Item 1",
//     itemName:
//       "Item 1 Item 1Item 1 Item 1Item 1 Item 1Item 1 Item 1Item 1 Item 1Item 1 Item 1Item 1 Item 1Item 1 Item 1",
//     itemCount: 8,
//     itemPrice: "100.00",
//   },
//   { id: 2, itemName: "Item 2", itemCount: 11, itemPrice: "150.00" },
//   { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
//   // { id: 3, itemName: "Item 3", itemCount: 1, itemPrice: "20.00" },
// ];

// type RootTicketProps = {};

// const RootTicket: React.FC<RootTicketProps> = (props) => {
//   const {} = props;

//   return (
//     <>
//       <Box sx={(_theme) => ({ display: "flex", height: "100vh", pt: "64px", overflow: "hidden" })}>
//         <Box
//           sx={(theme) => ({
//             width: drawerWidth,
//             flex: `0 0 ${drawerWidth}px`,
//             borderRight: `1px solid ${theme.palette.divider}`,
//             display: "flex",
//             flexDirection: "column",
//           })}
//         >
//           <List sx={{ overflowY: "auto" }}>
//             {ticketList.map((item, index) => {
//               return (
//                 <ListItem key={index} disablePadding>
//                   <ListItemButton>
//                     <ListItemText
//                       sx={(theme) => ({
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                         "& .MuiListItemText-primary": {
//                           whiteSpace: "nowrap",
//                           overflow: "hidden",
//                           textOverflow: "ellipsis",
//                         },
//                         "& .MuiListItemText-secondary": {
//                           ...theme.typography.body1,
//                           ml: 0.8,
//                           mr: 2,
//                           whiteSpace: "nowrap",
//                           color: "#acacac",
//                         },
//                       })}
//                       secondary={<>x {item.itemCount}</>}
//                     >
//                       {item.itemName}
//                     </ListItemText>
//                     <ListItemText
//                       sx={(_theme) => ({
//                         textAlign: "right",
//                         flexShrink: 0,
//                       })}
//                     >
//                       ₱ {item.itemPrice}
//                     </ListItemText>
//                   </ListItemButton>
//                 </ListItem>
//               );
//             })}
//           </List>
//           <Divider />
//           <List sx={{}}>
//             <ListItem>
//               <ListItemText
//                 sx={(_theme) => ({
//                   "& .MuiListItemText-primary": {
//                     fontWeight: "bold",
//                   },
//                 })}
//               >
//                 Total
//               </ListItemText>
//               <ListItemText
//                 sx={(_theme) => ({
//                   flexGrow: 0,
//                   "& .MuiListItemText-primary": {
//                     fontWeight: "bold",
//                   },
//                 })}
//               >
//                 ₱100.01
//               </ListItemText>
//             </ListItem>
//           </List>
//         </Box>
//         <Outlet />
//       </Box>
//     </>
//   );
// };

// export default RootTicket;
