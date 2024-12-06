import { ArrowBack as ArrowBackIcon, Check as CheckIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const Charge = () => {
  return (
    <>
      <AppBar color="success" position="static">
        <Toolbar>
          <IconButton component={Link} to=".." relative={"path"}>
            <ArrowBackIcon sx={(theme) => ({ color: theme.palette.common.white })} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={(theme) => ({ paddingTop: theme.spacing(3) })}>
        <Stack
          spacing={5}
          direction={"row"}
          divider={<Divider orientation="vertical" flexItem />}
          sx={(theme) => ({ justifyContent: "center" })}
        >
          <Box>
            <ListItemText
              secondary={"Total paid"}
              sx={(theme) => ({
                textAlign: "center",
                "& .MuiListItemText-primary": { ...theme.typography.h4 },
                "& .MuiListItemText-secondary": { ...theme.typography.body1 },
              })}
            >
              ₱0.02
            </ListItemText>
          </Box>
          <Box>
            <ListItemText
              secondary={"Change"}
              sx={(theme) => ({
                textAlign: "center",
                "& .MuiListItemText-primary": { ...theme.typography.h4 },
                "& .MuiListItemText-secondary": { ...theme.typography.body1 },
              })}
            >
              ₱0.02
            </ListItemText>
          </Box>
        </Stack>

        <Button
          color="success"
          variant="contained"
          size="large"
          fullWidth
          disableElevation
          startIcon={<CheckIcon />}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              marginTop: "calc(100dvh - 220px)",
            },
            marginTop: theme.spacing(3),
          })}
        >
          NEW SALE
        </Button>
      </Container>
    </>
  );
};

export default Charge;
// import React from "react";
// import { Box, Stack, Typography, Container, Divider, Button } from "@mui/material";
// import { Check as CheckIcon } from "@mui/icons-material";

// type ChargeProps = {};

// const Charge: React.FC<ChargeProps> = (props) => {
//   const {} = props;

//   return (
//     <>
//       <Box sx={(theme) => ({ flex: `1 0 auto` })}>
//         <Container maxWidth={"xl"}>
//           <Stack
//             sx={{ flexDirection: "row", gap: 5, justifyContent: "center", mt: 5 }}
//             divider={<Divider orientation="vertical" flexItem />}
//           >
//             <Box sx={(theme) => ({ textAlign: "right" })}>
//               <Typography component={"div"} sx={(theme) => ({ ...theme.typography.h3 })}>
//                 ₱100.01
//               </Typography>
//               <Typography
//                 component={"div"}
//                 sx={(theme) => ({ ...theme.typography.h6, color: "#878787" })}
//               >
//                 Total paid
//               </Typography>
//             </Box>
//             <Box sx={(theme) => ({ textAlign: "left" })}>
//               <Typography component={"div"} sx={(theme) => ({ ...theme.typography.h3 })}>
//                 ₱0.00
//               </Typography>
//               <Typography
//                 component={"div"}
//                 sx={(theme) => ({ ...theme.typography.h6, color: "#878787" })}
//               >
//                 Change
//               </Typography>
//             </Box>
//           </Stack>
//           <Button
//             color="success"
//             variant="contained"
//             disableElevation
//             startIcon={
//               <CheckIcon
//                 sx={(theme) => ({
//                   "&.MuiSvgIcon-root": {
//                     fontSize: theme.typography.h4.fontSize,
//                   },
//                 })}
//               />
//             }
//             fullWidth
//             sx={(theme) => ({
//               ...theme.typography.h6,
//               mt: 10,
//               py: 2,
//               color: theme.palette.common.white,
//             })}
//           >
//             NEW SALE
//           </Button>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default Charge;
