import React from "react";
import { ArrowBack as ArrowBackIcon, Payments as PaymentsIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  ButtonBase,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const Ticket = () => {
  return (
    <>
      <AppBar color="success" position="static">
        <Toolbar>
          <IconButton component={Link} to=".." relative={"path"}>
            <ArrowBackIcon sx={(theme) => ({ color: theme.palette.common.white })} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Box
          sx={(theme) => ({
            marginTop: theme.spacing(3),
          })}
        >
          <ListItemText
            secondary={"Total amount due"}
            sx={(theme) => ({
              textAlign: "center",
              "& .MuiListItemText-primary": { ...theme.typography.h4 },
              "& .MuiListItemText-secondary": { ...theme.typography.body1 },
            })}
          >
            ₱0.02
          </ListItemText>
        </Box>

        <Box sx={(theme) => ({ marginTop: theme.spacing(5) })}>
          <Typography color="success" variant="body2">
            Cash received
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PaymentsIcon sx={{ color: "action.active", mr: 1 }} />
            <FormControl color="success" variant="standard" fullWidth>
              <Input
                color="success"
                id="my-input"
                aria-describedby="my-helper-text"
                value={"₱0.02"}
                sx={(theme) => ({ height: theme.spacing(6.125), ...theme.typography.h6 })}
              />
              <FormHelperText id="my-helper-text" hidden>
                We'll never share your email.
              </FormHelperText>
            </FormControl>

            <ButtonBase
              component={Link}
              to="charge"
              relative="path"
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
                marginLeft: theme.spacing(3),
                border: `1px solid ${theme.palette.divider}`,
                padding: `${theme.spacing(2)} ${theme.spacing(6)}`,
                bgcolor: "#f5f5f5",
                fontWeight: "bold",
                borderRadius: theme.spacing(0.5),
              })}
            >
              CHARGE
            </ButtonBase>
          </Box>

          <ButtonBase
            component={Link}
            to="charge"
            relative="path"
            sx={(theme) => ({
              [theme.breakpoints.up("sm")]: {
                display: "none",
              },
              marginTop: theme.spacing(3),
              width: "100%",
              border: `1px solid ${theme.palette.divider}`,
              padding: `${theme.spacing(2)} ${theme.spacing(6)}`,
              bgcolor: "#f5f5f5",
              fontWeight: "bold",
              borderRadius: theme.spacing(0.5),
            })}
          >
            <PaymentsIcon sx={{ color: "action.active", mr: 1 }} />
            CHARGE
          </ButtonBase>
        </Box>
      </Container>
    </>
  );
};

export default Ticket;
// import React from "react";
// import { Box, Stack, Typography, ButtonBase, Container, TextField } from "@mui/material";
// import { Payments as PaymentsIcon } from "@mui/icons-material";
// import { Link } from "react-router-dom";

// const Ticket = () => {
//   return (
//     <Box sx={(theme) => ({ flex: `1 0 auto` })}>
//       <Container maxWidth="md">
//         <Stack sx={{ textAlign: "center", mt: 5 }}>
//           <Typography component={"div"} sx={(theme) => ({ ...theme.typography.h3 })}>
//             ₱100.01
//           </Typography>
//           <Typography
//             component={"div"}
//             sx={(theme) => ({ ...theme.typography.h6, color: "#878787", textAlign: "center" })}
//           >
//             Total amount due
//           </Typography>
//         </Stack>

//         <Box
//           sx={(theme) => ({
//             mt: 10,
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "flex-end",
//             gap: 3,
//           })}
//         >
//           <Stack sx={(theme) => ({ gap: 1, flex: "1 0 auto" })}>
//             <Typography
//               component="span"
//               sx={(theme) => ({ ...theme.typography.h6, color: theme.palette.success.main })}
//             >
//               Cash recieved
//             </Typography>
//             <Box sx={(theme) => ({ display: "flex", alignItems: "flex-end", gap: 1 })}>
//               <PaymentsIcon sx={{ mr: 1, my: 0.5, color: "#747474", fontSize: 30 }} />
//               <TextField
//                 color="success"
//                 variant="standard"
//                 value="₱100.01"
//                 sx={(theme) => ({
//                   width: "100%",
//                   "& .MuiInput-input": {
//                     ...theme.typography.h6,
//                     pb: 1,
//                   },
//                 })}
//               />
//             </Box>
//           </Stack>
//           <ButtonBase
//             component={Link}
//             to="charge"
//             sx={(theme) => ({
//               ...theme.typography.body1,
//               borderRadius: 1,
//               py: 2,
//               px: 5,
//               bgcolor: "#f5f5f5",
//               border: `1px solid ${theme.palette.divider}`,
//               fontWeight: "bold",
//             })}
//           >
//             CHARGE
//           </ButtonBase>
//         </Box>

//         <Stack
//           sx={{
//             flexDirection: "row",
//             gap: 3,
//             mt: 3,
//             alignItems: "stretch",
//           }}
//         >
//           {["₱110.00", "₱120.00", "₱150.00", "₱200.00"].map((item, index) => {
//             return (
//               <ButtonBase
//                 key={index}
//                 sx={(theme) => ({
//                   ...theme.typography.body1,
//                   borderRadius: 1,
//                   py: 2,
//                   px: 5,
//                   bgcolor: "#f5f5f5",
//                   border: `1px solid ${theme.palette.divider}`,
//                   fontWeight: "bold",
//                   height: "100%",
//                   width: "100%",
//                 })}
//               >
//                 {item}
//               </ButtonBase>
//             );
//           })}
//         </Stack>
//       </Container>
//     </Box>
//   );
// };

// export default Ticket;
