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
  MenuItemProps,
  Theme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ArrowDropDown as ArrowDropDownIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";

import { Link, LinkProps } from "react-router-dom";
import { useMenu } from "../../../../hooks/material-ui/useMenu/useMenu";
import { useDispatch, useSelector } from "react-redux";
import { drawerActions } from "../../../../store/drawer-slice";
import { saleActions } from "../../../../store/sale-slice";
import { storeProps } from "../../../../store";

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
  display: "flex",
  alignItems: "center",
}));

export const MenuItemStyled = styled(MenuItem)<MenuItemProps>(({ theme }: { theme: Theme }) => ({
  paddingRight: theme.spacing(4),
}));

type HeaderFilterItemProps = {
  onChangeMenu: (event: React.MouseEvent<HTMLLIElement>) => void;
};

const HeaderFilterItem: React.FC<HeaderFilterItemProps> = (props) => {
  const { onChangeMenu } = props;

  const dispatch = useDispatch();
  const categoryList = useSelector((state: storeProps) => state.category.categoryList);
  const selectedMenu = useSelector((state: storeProps) => state.sale.selectedMenu);
  const itemList = useSelector((state: storeProps) => state.item.itemList);
  const pageData = useSelector((state: storeProps) => state.sale.pageData);
  const tabIndex = useSelector((state: storeProps) => state.sale.tabIndex);
  const [text, setText] = useState<string>("");

  const {
    anchorEl: anchorElMenuListItem,
    handleCloseMenu: onCloseMenuListItem,
    handleOpenMenu: onOpenMenuListItem,
    isOpen: isOpenMenuListItem,
  } = useMenu();

  useEffect(() => {
    const updatePageData = [
      ...pageData,
      { id: Math.random(), pageId: 1, pageName: "Favorite", tabId: 0 },
    ];
    const findPageById = updatePageData.find((page) => page.tabId === tabIndex);

    if (!findPageById) {
      setText("");
      return;
    }

    setText(findPageById.pageName);
    return () => {};
  }, [tabIndex]);

  const handleOnOpenDrawer = () => {
    dispatch(drawerActions.handleOpenDrawer());
  };

  const handleOnOpenSearch = () => {
    dispatch(saleActions.handleOnOpenSearch());
  };

  const filterItemByCategoryId = itemList
    .filter((item) => item.categoryId)
    .map((item) => item.categoryId);

  return (
    <AppBar elevation={0} position="static" color="success">
      <Toolbar>
        <MenuButton onClick={handleOnOpenDrawer}>
          <MenuIconStyled />
        </MenuButton>

        <MenuContainer>
          {text && (
            <Typography component={"h6"} variant="h6">
              {text}
            </Typography>
          )}
          {!text && (
            <>
              <TicketButton component={Link} to="/ticket" relative="path">
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
                {selectedMenu.text}
                <ArrowDropDownIcon />
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
                <MenuItem
                  selected={selectedMenu.id === ""}
                  data-id={""}
                  data-category-name={""}
                  onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                    onChangeMenu(event);
                    onCloseMenuListItem();
                  }}
                >
                  All Items
                </MenuItem>
                {categoryList
                  .filter((category) => filterItemByCategoryId.includes(category.id))
                  .map((category) => {
                    return (
                      <MenuItemStyled
                        key={category.id}
                        selected={selectedMenu.id === category.id}
                        data-id={category.id}
                        data-category-name={category.name}
                        onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                          onChangeMenu(event);
                          onCloseMenuListItem();
                        }}
                      >
                        {category.name}
                      </MenuItemStyled>
                    );
                  })}
              </MenuStyled>
            </>
          )}
        </MenuContainer>

        <SearchButton onClick={handleOnOpenSearch}>
          <SearchIconStyled />
        </SearchButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderFilterItem;
