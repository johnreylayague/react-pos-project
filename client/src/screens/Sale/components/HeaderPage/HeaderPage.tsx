import { ArrowBack, NavigateNext, Search } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton, Breadcrumbs, ButtonBase, Typography } from "@mui/material";
import React from "react";

type HeaderPageProps = {
  onClearCategory: () => void;
};
const HeaderPage: React.FC<HeaderPageProps> = (props) => {
  const { onClearCategory } = props;

  return (
    <AppBar elevation={0} position="static" color="success">
      <Toolbar>
        <IconButton
          onClick={onClearCategory}
          sx={(theme) => ({ marginLeft: `-${theme.spacing(1)}` })}
        >
          <ArrowBack sx={(theme) => ({ color: theme.palette.common.white })} />
        </IconButton>

        <Breadcrumbs
          sx={(theme) => ({
            flexGrow: 1,
            paddingLeft: theme.spacing(3),
          })}
          component={"div"}
          aria-label="breadcrumb"
          separator={
            <NavigateNext
              fontSize="medium"
              sx={(theme) => ({ color: theme.palette.common.white })}
            />
          }
        >
          <ButtonBase
            disableRipple
            onClick={onClearCategory}
            sx={(theme) => ({
              ...theme.typography.h6,
              color: theme.palette.common.white,
              hover: { backgroundColor: "unset" },
              ":active": { backgroundColor: "unset" },
            })}
          >
            Favorite
          </ButtonBase>
          <Typography
            component={"div"}
            variant="h6"
            sx={(theme) => ({ color: theme.palette.common.white })}
          >
            646
          </Typography>
        </Breadcrumbs>

        <IconButton>
          <Search sx={(theme) => ({ color: theme.palette.common.white })} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderPage;
