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
  ArrowDropDownIcon,
} from "./HeaderSearchAndFilterToolbarStyles";
import { useMenu } from "../../../../hooks/material-ui/useMenu/useMenu";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../../../../store/item-slice";
import { storeProps } from "../../../../store";

type HeaderSearchAndFilterToolbarProps = {
  selectedMenu: { id: number | string; text: string };
  openSearch: () => void;
  onChangeMenu: (event: React.MouseEvent<HTMLLIElement>) => void;
};

const HeaderSearchAndFilterToolbar: React.FC<HeaderSearchAndFilterToolbarProps> = (props) => {
  const { openSearch, selectedMenu, onChangeMenu } = props;

  const dispatch = useDispatch();
  const categoryList = useSelector((state: storeProps) => state.category.categoryList);

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
            {selectedMenu.text}
            <ArrowDropDownIcon />
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
            <MenuItemStyled
              selected={selectedMenu.id === ""}
              data-id={""}
              data-category-name={"All items"}
              onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                onChangeMenu(event);
                handleCloseMenu();
              }}
            >
              All items
            </MenuItemStyled>
            {categoryList.map((category) => {
              return (
                <MenuItemStyled
                  key={category.id}
                  selected={selectedMenu.id === category.id}
                  data-id={category.id}
                  data-category-name={category.name}
                  onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                    onChangeMenu(event);
                    handleCloseMenu();
                  }}
                >
                  {category.name}
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
