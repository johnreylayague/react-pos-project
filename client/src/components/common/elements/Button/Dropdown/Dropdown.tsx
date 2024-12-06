import { ButtonBase, Menu, MenuItem, Slide, Typography } from "@mui/material";
import React from "react";
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Close as CloseIcon,
  Delete as DeleteIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";

type DropdownProps = {};

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {} = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openAnchorEl = Boolean(anchorEl);

  const handleAnchorElClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAnchorElClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonBase
        disableRipple
        aria-controls={openAnchorEl ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openAnchorEl ? "true" : undefined}
        onClick={handleAnchorElClick}
        sx={(theme) => ({
          ...theme.typography.h6,
          fontWeight: "bold",
          textTransform: "capitalize",
        })}
      >
        All Items
        <ArrowDropDownIcon sx={() => ({ ml: 1 })} />
      </ButtonBase>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openAnchorEl}
        onClose={handleAnchorElClose}
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
        disableScrollLock
        TransitionComponent={Slide}
        sx={(_theme) => ({ ".MuiMenu-paper": { top: "0!important", borderRadius: 0 } })}
      >
        {["Item 1", "Item 2", "Item 3"].map((item, index) => {
          return (
            <MenuItem
              key={index}
              sx={(theme) => ({
                paddingLeft: theme.spacing(3),
                paddingRight: theme.spacing(5),
                paddingTop: theme.spacing(2),
                paddingBottom: theme.spacing(2),
                "&.Mui-selected": {
                  backgroundColor: "#f0f0f0",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#f0f0f0",
                },
              })}
              onClick={handleAnchorElClose}
            >
              <Typography variant="h6" component="span">
                {item}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default Dropdown;
