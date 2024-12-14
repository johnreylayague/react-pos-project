import { AppBar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  SearchIcon,
  SearchButton,
  BackButton,
  ArrowBackIcon,
  ToolbarStyled,
  ButtonBaseStyled,
  MenuStyled,
  MenuItemStyled,
} from "./HeaderSearchAndFilterToolbarStyles";
import { ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";
import { useMenu } from "../../../../hooks/material-ui/useMenu/useMenu";
import assets from "../../../../assets/assets";
import { useDispatch } from "react-redux";
import { itemActions } from "../../../../store/item-slice";

const categoryDataList = assets.json.categoryDataList;

type HeaderSearchAndFilterToolbarProps = {
  openSearch: () => void;
};

const HeaderSearchAndFilterToolbar: React.FC<HeaderSearchAndFilterToolbarProps> = (props) => {
  const { openSearch } = props;

  const dispatch = useDispatch();

  const { isOpen, anchorEl, handleCloseMenu, handleOpenMenu } = useMenu();

  const handleOnBackButton = () => {
    dispatch(itemActions.onChangeSearchInputValue(""));
    openSearch();
  };

  return (
    <AppBar component="div" elevation={0} position="static" color="success">
      <ToolbarStyled>
        <BackButton component={Link} to=".." relative="path">
          <ArrowBackIcon />
        </BackButton>

        <div>
          <ButtonBaseStyled
            id="button"
            disableRipple
            aria-controls={isOpen ? "menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : undefined}
            onClick={handleOpenMenu}
          >
            All Items
            <ArrowDropDownIcon sx={() => ({ marginLeft: 1 })} />
          </ButtonBaseStyled>
          <MenuStyled
            id="menu"
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItemStyled onClick={handleCloseMenu}>All items</MenuItemStyled>
            {categoryDataList.map((category) => {
              return (
                <MenuItemStyled key={category.id} onClick={handleCloseMenu}>
                  {category.categoryName}
                </MenuItemStyled>
              );
            })}
          </MenuStyled>
        </div>

        <SearchButton onClick={handleOnBackButton}>
          <SearchIcon />
        </SearchButton>
      </ToolbarStyled>
    </AppBar>
  );
};

export default HeaderSearchAndFilterToolbar;
