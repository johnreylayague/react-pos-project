import React from "react";
import { ListItemIcon, Divider } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  SidebarContainer,
  ListStyled,
  ListItemStyled,
  ListItemButtonStyled,
  ListItemTextStyled,
  IconStyled,
} from "./SidebarStyles";
import assets from "../../../../assets/assets";

const menuDataList = assets.json.menuDataList;

type SidebarProps = {
  isMobileView: boolean;
};

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { isMobileView } = props;

  const location = useLocation();

  return (
    <>
      <SidebarContainer>
        <ListStyled>
          {menuDataList.map((menu) => {
            const isSelected =
              location.pathname === "/item" && menu.link === "/item/index" && !isMobileView;
            const isCurrentRoute = location.pathname === menu.link || isSelected;

            return (
              <React.Fragment key={menu.id}>
                <ListItemStyled>
                  <ListItemButtonStyled to={menu.link} component={Link} selected={isCurrentRoute}>
                    <ListItemIcon>
                      <IconStyled selected={isCurrentRoute}>{menu.icon}</IconStyled>
                    </ListItemIcon>
                    <ListItemTextStyled selected={isCurrentRoute}>{menu.title}</ListItemTextStyled>
                  </ListItemButtonStyled>
                </ListItemStyled>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            );
          })}
        </ListStyled>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
