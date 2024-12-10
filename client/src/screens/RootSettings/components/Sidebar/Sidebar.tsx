import { ListItemIcon, Divider } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  EmailDisplay,
  SidebarContainer,
  SignOutButton,
  SidebarActionsContainer,
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
  const setting = useSelector((state: storeProps) => state.setting);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <SidebarContainer>
        <ListStyled>
          {setting.menuData.map((menu) => {
            const isSelected =
              location.pathname === "/settings" &&
              menu.link === "/settings/general" &&
              !isMobileView;

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

        <SidebarActionsContainer spacing={2}>
          <EmailDisplay component="span">sample123@gmail.com</EmailDisplay>
          <SignOutButton component={Link} to="/" relative="path">
            SIGN OUT
          </SignOutButton>
        </SidebarActionsContainer>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
