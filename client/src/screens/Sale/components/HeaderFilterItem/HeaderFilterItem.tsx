import {
  AppBar,
  Box,
  IconButton,
  MenuItem,
  Toolbar,
  Menu,
  ButtonBase,
  styled,
  IconButtonProps,
  IconProps,
  ButtonBaseProps,
  MenuProps,
  BoxProps,
  CSSObject,
  Typography,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ArrowDropDown as ArrowDropDownIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
} from "@mui/icons-material";
import React from "react";

import { Link, LinkProps } from "react-router-dom";
import { useMenu } from "../../../../hooks/material-ui/useMenu/useMenu";
import { useDispatch } from "react-redux";
import { drawerActions } from "../../../../store/drawer-slice";

const MenuButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

const MenuIconStyled = styled(MenuIcon)<IconProps>(({ theme }) => ({
  color: theme.palette.common.white,
}));

const SearchButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  marginRight: `-${theme.spacing(1)}`,
}));

const SearchIconStyled = styled(SearchIcon)<IconProps>(({ theme }) => ({
  color: theme.palette.common.white,
}));

const MenuStyled = styled(Menu)<MenuProps>(({}) => ({
  "& .MuiMenu-paper	": {
    borderRadius: 0,
  },
}));

const TicketButton = styled(ButtonBase)<ButtonBaseProps & LinkProps>(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  } as CSSObject,
  minHeight: "inherit",
  padding: `
  ${theme.spacing(1)} 
  ${theme.spacing(2)} 
  ${theme.spacing(1)} 
  ${theme.spacing(2)} `,
  gap: theme.spacing(1),
}));

const FilterButton = styled(ButtonBase)<ButtonBaseProps>(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  } as CSSObject,
  ...theme.typography.h6,
  minHeight: "inherit",
}));

const MenuContainer = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(1),
  } as CSSObject,
  minHeight: "inherit",
  paddingLeft: theme.spacing(3),
  flexGrow: 1,
}));

type HeaderFilterItemProps = {
  onOpenSearch: () => void;
};

const HeaderFilterItem: React.FC<HeaderFilterItemProps> = (props) => {
  const { onOpenSearch } = props;

  const dispatch = useDispatch();

  const {
    anchorEl: anchorElMenuListItem,
    handleCloseMenu: onCloseMenuListItem,
    handleOpenMenu: onOpenMenuListItem,
    isOpen: isOpenMenuListItem,
  } = useMenu();

  const handleOnOpenDrawer = () => {
    dispatch(drawerActions.handleOpenDrawer());
  };

  return (
    <AppBar elevation={0} position="static" color="success">
      <Toolbar>
        <MenuButton onClick={handleOnOpenDrawer}>
          <MenuIconStyled />
        </MenuButton>

        <MenuContainer>
          <TicketButton component={Link} to="ticket/list" relative="path">
            <Typography component={"h6"} variant="h6">
              Ticket
            </Typography>
            <Badge badgeContent={4} showZero color="error">
              <ConfirmationNumberIcon />
            </Badge>
          </TicketButton>

          <FilterButton
            id="basic-button"
            aria-controls={isOpenMenuListItem ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isOpenMenuListItem ? "true" : undefined}
            onClick={onOpenMenuListItem}
          >
            All Items <ArrowDropDownIcon />
          </FilterButton>

          <MenuStyled
            id="basic-menu"
            anchorEl={anchorElMenuListItem}
            open={isOpenMenuListItem}
            onClose={onCloseMenuListItem}
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
            <MenuItem onClick={onCloseMenuListItem}>All Items</MenuItem>
            <MenuItem onClick={onCloseMenuListItem}>CATEGORY 1</MenuItem>
            <MenuItem onClick={onCloseMenuListItem}>CATEGORY 2</MenuItem>
          </MenuStyled>
        </MenuContainer>

        <SearchButton onClick={onOpenSearch}>
          <SearchIconStyled />
        </SearchButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderFilterItem;
