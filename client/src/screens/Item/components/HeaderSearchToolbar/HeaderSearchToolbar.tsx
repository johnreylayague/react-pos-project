import { AppBar, Toolbar, IconButton, Icon, InputBase } from "@mui/material";
import React from "react";

type HeaderSearchToolbarProps = { closeSearch: () => void };
const HeaderSearchToolbar: React.FC<HeaderSearchToolbarProps> = (props) => {
  const { closeSearch } = props;

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
        <Toolbar>
          <IconButton onClick={closeSearch}>
            <Icon sx={(theme) => ({ color: theme.palette.common.white })}>arrow_back</Icon>
          </IconButton>
          <InputBase
            autoFocus
            placeholder="Search"
            sx={(theme) => ({
              ...theme.typography.h6,
              paddingLeft: theme.spacing(3),
              paddingRight: theme.spacing(3),
              flexGrow: 1,
              color: theme.palette.common.white,
            })}
          />
          <IconButton onClick={() => {}}>
            <Icon sx={(theme) => ({ color: theme.palette.common.white })}>close</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderSearchToolbar;
