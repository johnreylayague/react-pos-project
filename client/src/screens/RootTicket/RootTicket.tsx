import React, { HTMLAttributes } from "react";
import { List, ListItem, styled, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  RootContainer,
  ContentContainer,
  SidebarContainer,
  AppBarStyled,
  Title,
  ListStyled,
  DividerStyled,
  TotalAmount,
  TotalText,
} from "./RootTicketStyles";
import TotalListItem from "./components/TotalListItem/TotalListItem";

type RootTicketProps = {};

const RootTicket: React.FC<RootTicketProps> = (props) => {
  const {} = props;

  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isMobileScreen && location.pathname === "/ticket") {
      navigate("/sale");
      return;
    }

    return () => {};
  }, [location, isMobileScreen]);

  return (
    <RootContainer>
      <SidebarContainer>
        <AppBarStyled position="static" elevation={0}>
          <Toolbar>
            <Title component={"h6"} variant="h6">
              Ticket
            </Title>
          </Toolbar>
        </AppBarStyled>

        <ListStyled>
          {Array.from({ length: 1 }).map((_, index) => {
            return (
              <TotalListItem key={index} itemCount={1} itemName="Item Name 1" itemPrice="9.00" />
            );
          })}
        </ListStyled>

        <List disablePadding>
          <DividerStyled component={"li"} />
          <ListItem>
            <TotalText>Total</TotalText>
            <TotalAmount>₱0.02</TotalAmount>
          </ListItem>
        </List>
      </SidebarContainer>

      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </RootContainer>
  );
};

export default RootTicket;
