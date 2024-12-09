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
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = (props) => {
  const {} = props;

  const location = useLocation();
  const item = useSelector((state: storeProps) => state.item);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <SidebarContainer>
        <ListStyled>
          {item.menuData.map((menu) => {
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
