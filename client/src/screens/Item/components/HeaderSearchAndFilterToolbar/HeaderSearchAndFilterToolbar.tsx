import { AppBar, Toolbar, IconButton } from "@mui/material";
import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { ArrowBack as ArrowBackIcon, Search as SearchIcon } from "@mui/icons-material";

type HeaderSearchAndFilterToolbarProps = {
  openSearch: () => void;
};

const HeaderSearchAndFilterToolbar: React.FC<HeaderSearchAndFilterToolbarProps> = (props) => {
  const { openSearch } = props;

  return (
    <>
      <AppBar
        component="div"
        elevation={0}
        sx={(theme) => ({
          backgroundColor: theme.palette.success.main,
          position: "static",
        })}
      >
        <Toolbar
          sx={(theme) => ({
            justifyContent: "space-between",
            [theme.breakpoints.down("sm")]: {
              justifyContent: "unset",
            },
          })}
        >
          <IconButton
            component={Link}
            to=".."
            relative="path"
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                display: "inline-flex",
              },
              display: "none",
            })}
          >
            <ArrowBackIcon sx={(theme) => ({ color: theme.palette.common.white })} />
          </IconButton>
          <Dropdown />

          <IconButton
            onClick={openSearch}
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: {
                marginLeft: "auto",
              },
            })}
          >
            <SearchIcon sx={(theme) => ({ color: theme.palette.common.white })} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderSearchAndFilterToolbar;
