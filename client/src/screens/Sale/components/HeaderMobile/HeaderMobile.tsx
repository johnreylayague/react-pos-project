import {
  AppBar,
  Box,
  IconButton,
  MenuItem,
  Toolbar,
  Menu,
  ButtonBase,
  Button,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";
import React from "react";
import {
  MoreVert as MoreVertIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
} from "@mui/icons-material";

type HeaderMobileProps = { onOpenDrawer: () => void; onOpenSearchItem: () => void };

const HeaderMobile: React.FC<HeaderMobileProps> = (props) => {
  const { onOpenDrawer, onOpenSearchItem } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar elevation={0} position="static" color="success" sx={() => ({})}>
      <Toolbar sx={() => ({})}>
        <IconButton sx={() => ({})} onClick={onOpenDrawer}>
          <MenuIcon sx={(theme) => ({ color: theme.palette.common.white })} />
        </IconButton>

        <Box
          sx={(theme) => ({
            flexGrow: 1,
            paddingLeft: theme.spacing(3),
          })}
        >
          <Box
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: { display: "none" },
            })}
          >
            <ButtonBase
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={(theme) => ({ ...theme.typography.h6 })}
            >
              All Items <ArrowDropDownIcon />
            </ButtonBase>
            <Menu
              sx={(theme) => ({
                "& .MuiMenu-paper	": {
                  borderRadius: 0,
                },
              })}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>All Items</MenuItem>
              <MenuItem onClick={handleClose}>CATEGORY 1</MenuItem>
              <MenuItem onClick={handleClose}>CATEGORY 2</MenuItem>
            </Menu>
          </Box>
          <ButtonBase
            sx={(theme) => ({
              [theme.breakpoints.up("sm")]: { display: "none" },
              ...theme.typography.h6,
            })}
          >
            Ticket
            <Badge
              color="error"
              badgeContent={1}
              sx={(theme) => ({ marginLeft: theme.spacing(1) })}
            >
              <ConfirmationNumberIcon />
            </Badge>
          </ButtonBase>
        </Box>

        <IconButton
          onClick={onOpenSearchItem}
          sx={(theme) => ({ [theme.breakpoints.down("sm")]: { display: "none" } })}
        >
          <SearchIcon sx={(theme) => ({ color: theme.palette.common.white })} />
        </IconButton>

        <IconButton sx={(theme) => ({ [theme.breakpoints.up("sm")]: { display: "none" } })}>
          <MoreVertIcon sx={(theme) => ({ color: theme.palette.common.white })} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMobile;
