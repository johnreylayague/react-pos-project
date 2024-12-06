import React from "react";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { drawerWidth } from "../../../../../utils/componentStyles";
import { Link, Outlet } from "react-router-dom";

type TicketProps = {
  backLink: string;
};

const Ticket: React.FC<TicketProps> = (props) => {
  const { backLink } = props;

  return (
    <AppBar sx={(_theme) => ({ display: "flex", flexDirection: "row", boxShadow: "none" })}>
      <Toolbar
        sx={(theme) => ({
          width: drawerWidth,
          flex: `0 0 ${drawerWidth}px`,
          backgroundColor: theme.palette.common.white,
          boxShadow: theme.shadows[3],
        })}
      >
        <Typography
          variant="h5"
          sx={(theme) => ({
            ...theme.typography.h5,
            color: theme.palette.common.black,
          })}
        >
          Ticket
        </Typography>
      </Toolbar>
      <Toolbar
        sx={(theme) => ({
          flex: "1 0 auto",
          backgroundColor: theme.palette.success.main,
        })}
      >
        <IconButton component={Link} to={backLink}>
          <ArrowBackIcon sx={(theme) => ({ color: theme.palette.common.white })} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Ticket;
