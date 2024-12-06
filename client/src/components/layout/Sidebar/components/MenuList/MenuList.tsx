import { List, ListItem, ListItemIcon } from "@mui/material";
import React from "react";
import { ListItemButtonStyled, IconStyled, ListItemTextStyled } from "./MenuListStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { drawerActions } from "../../../../../store/drawer-slice";
import { storeProps } from "../../../../../store";

type NavigationDrawerProps = {};

const MenuList: React.FC<NavigationDrawerProps> = (props) => {
  const {} = props;

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const drawer = useSelector((state: storeProps) => state.drawer);

  const handleNavigate = (link: string) => () => {
    navigate(link);
    dispatch(drawerActions.handleToggleDrawer(false));
  };

  return (
    <nav>
      <List>
        {drawer.menuData.map((menu) => {
          const basePath = location.pathname.split("/").slice(0, 2).join("/");

          return (
            <ListItem key={menu.id} disablePadding>
              <ListItemButtonStyled
                onClick={handleNavigate(menu.link)}
                selected={basePath === menu.link}
              >
                <ListItemIcon>
                  <IconStyled selected={basePath === menu.link}>{menu.icon}</IconStyled>
                </ListItemIcon>
                <ListItemTextStyled selected={basePath === menu.link}>
                  {menu.name}
                </ListItemTextStyled>
              </ListItemButtonStyled>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};

export default MenuList;
