import { Typography, IconButton, Slide, MenuItem } from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  Delete as DeleteIcon,
  Loop as LoopIcon,
} from "@mui/icons-material";
import React from "react";
import { CustomizedListItemIcon, CustomizedMenu, CustomizedToolbar } from "./MenuListStyles";

const menuList = [
  { id: 1, name: "Clear Ticket", icon: <DeleteIcon fontSize="medium" /> },
  { id: 2, name: "Sync", icon: <LoopIcon fontSize="medium" /> },
];

type MenuListProps = {
  title: string;
};

const MenuList: React.FC<MenuListProps> = (props) => {
  const { title } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CustomizedToolbar>
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon fontSize="large" />
      </IconButton>
      <CustomizedMenu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        MenuListProps={{
          "aria-labelledby": "slide-button",
          style: { padding: 0 },
        }}
        open={open}
        disableScrollLock
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        TransitionComponent={Slide}
      >
        {menuList.map((item) => (
          <MenuItem key={item.id} onClick={handleClose} sx={{ px: 3, py: 2 }}>
            <CustomizedListItemIcon>{item.icon}</CustomizedListItemIcon>
            <Typography variant="h6" component="span">
              {item.name}
            </Typography>
          </MenuItem>
        ))}
      </CustomizedMenu>
    </CustomizedToolbar>
  );
};

export default MenuList;
