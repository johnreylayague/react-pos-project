import { Box, AppBar, Toolbar, IconButton, Typography, ButtonBase } from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

type HeaderAddNewItemProps = {
  title: string;
  link: string;
};

const HeaderAddNewItem: React.FC<HeaderAddNewItemProps> = (props) => {
  const { title, link } = props;

  const location = useLocation();

  const newLink = location.state?.from ? `${location.state?.from}` : link;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="success">
        <Toolbar sx={{ alignItems: "stretch" }}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <IconButton to={newLink} component={Link} sx={{ marginRight: 3 }}>
              <ArrowBackIcon
                fontSize="large"
                sx={(theme) => ({ color: theme.palette.common.white })}
              />
            </IconButton>
            <Typography sx={(theme) => ({ ...theme.typography.h5 })}>{title}</Typography>
          </Box>
          <ButtonBase
            sx={(theme) => ({
              ...theme.typography.h6,
              color: theme.palette.common.white,
              py: 1,
              px: 3,
            })}
          >
            Save
          </ButtonBase>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderAddNewItem;
