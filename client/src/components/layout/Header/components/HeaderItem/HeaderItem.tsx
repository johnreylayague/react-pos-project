import {
  IconButton,
  Toolbar,
  AppBar,
  Box,
  Typography,
  ButtonBase,
  Button,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  InputBase,
  Menu,
  MenuItem,
  Slide,
} from "@mui/material";
import { AppBarStyled, MenuIconStyled, TypographyStyled } from "./HeaderItemStyles.ts";
import { drawerActions } from "../../../../../store/drawer-slice.ts";
import { categoryActions } from "../../../../../store/category-slice.ts";
import { useDispatch, useSelector } from "react-redux";
import { drawerWidth } from "../../../../../utils/componentStyles.ts";
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Close as CloseIcon,
  Delete as DeleteIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { storeProps } from "../../../../../store/index.ts";
import { useLocation, useSearchParams } from "react-router-dom";

type HeaderItemsProps = {
  title: string;
  subTitleText: string;
  subTitleType: string;
};

const HeaderItem: React.FC<HeaderItemsProps> = (props) => {
  const { title, subTitleText, subTitleType } = props;

  const dispatch = useDispatch();
  const category = useSelector((state: storeProps) => state.category);
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openAnchorEl = Boolean(anchorEl);

  const handleAnchorElClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAnchorElClose = () => {
    setAnchorEl(null);
  };

  const handleToggleDrawer = () => {
    dispatch(drawerActions.handleToggleDrawer(true));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDeleting = () => {
    dispatch(categoryActions.closeDeleting());
  };

  const handleSearch = () => {
    dispatch(categoryActions.categoryIsSearch(true));
  };

  const handleCategorySearchBack = () => {
    dispatch(categoryActions.categoryIsSearch(false));
    dispatch(categoryActions.searchInputChange(""));
    searchParams.delete("search");
    setSearchParams(searchParams);
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    dispatch(categoryActions.searchInputChange(inputValue));
    searchParams.set("search", inputValue);
    setSearchParams(searchParams);
  };

  let content: null | JSX.Element = null;

  if (subTitleType === "dropdown") {
    content = (
      <>
        <ButtonBase
          disableRipple
          aria-controls={openAnchorEl ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openAnchorEl ? "true" : undefined}
          onClick={handleAnchorElClick}
          sx={(theme) => ({
            ...theme.typography.h5,
            textTransform: "capitalize",
          })}
        >
          {subTitleText}
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
  }

  if (subTitleType === "text") {
    content = (
      <>
        <Typography component="h5" sx={(theme) => ({ ...theme.typography.h5 })}>
          {subTitleText}
        </Typography>
      </>
    );
  }

  return (
    <>
      <AppBar
        sx={(theme) => ({
          position: "static",
          flexDirection: "row",
          backgroundColor: theme.palette.success.main,
          boxShadow: "none",
        })}
      >
        <Toolbar
          sx={(theme) => ({
            width: drawerWidth,
            borderRight: `1px solid ${theme.palette.divider}`,
          })}
        >
          <IconButton onClick={handleToggleDrawer}>
            <MenuIcon
              sx={(theme) => ({
                color: theme.palette.common.white,
              })}
            />
          </IconButton>
          <Typography component="h5" sx={(theme) => ({ ...theme.typography.h5, ml: 3 })}>
            {title}
          </Typography>
        </Toolbar>
        {!category.isDeleting && (
          <>
            <Toolbar
              sx={() => ({
                flexGrow: 1,
                justifyContent: "space-between",
                alignItems: "center",
              })}
            >
              {category.isSearch ? (
                <>
                  <IconButton onClick={handleCategorySearchBack}>
                    <ArrowBackIcon
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                      })}
                    />
                  </IconButton>
                  <InputBase
                    autoFocus
                    placeholder="Search"
                    value={category.searchValue}
                    onChange={handleSearchInput}
                    sx={(theme) => ({
                      ...theme.typography.h6,
                      marginLeft: theme.spacing(3),
                      flexGrow: 1,
                      py: 1,
                      color: theme.palette.common.white,
                      ".MuiInputBase-input": {
                        "::placeholder": {
                          color: theme.palette.grey[100],
                        },
                        "::-ms-input-placeholder": {
                          color: theme.palette.grey[100],
                        },
                      },
                    })}
                  />
                </>
              ) : (
                <>
                  {content}
                  <IconButton onClick={handleSearch}>
                    <SearchIcon
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                        fontSize: theme.typography.h4.fontSize,
                      })}
                    />
                  </IconButton>
                </>
              )}
            </Toolbar>
          </>
        )}
        {category.isDeleting && (
          <>
            <Toolbar
              sx={(theme) => ({
                flexGrow: 1,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: theme.palette.common.white,
                boxShadow: theme.shadows[3],
              })}
            >
              <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 2 }}>
                <IconButton onClick={handleCloseDeleting}>
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={(theme) => ({ ...theme.typography.h5, color: theme.palette.common.black })}
                >
                  {category.selectedCount}
                </Typography>
              </Box>
              <IconButton onClick={handleClickOpen}>
                <DeleteIcon />
              </IconButton>
            </Toolbar>
          </>
        )}
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={(theme) => ({ fontWeight: "bold" })}>
          Delete Categories
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete selected categories?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={(theme) => ({ color: theme.palette.success.main, borderRadius: 0 })}
          >
            CANCEL
          </Button>
          <Button
            onClick={handleClose}
            sx={(theme) => ({ color: theme.palette.success.main, borderRadius: 0 })}
          >
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HeaderItem;
