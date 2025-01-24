import React, { useEffect } from "react";
import { List, ListItem, Toolbar, useMediaQuery, useTheme } from "@mui/material";
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
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import { ticket } from "../../store/sale-slice";
import DetailListItem from "./components/DetailListItem/DetailListItem";
import { formatToPesos } from "../../utils/format";

type RootTicketProps = {};

const RootTicket: React.FC<RootTicketProps> = (props) => {
  const {} = props;

  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const navigate = useNavigate();

  const ticket = useSelector((state: storeProps) => state.sale.ticket);
  const itemList = useSelector((state: storeProps) => state.item.itemList);

  useEffect(() => {
    if (!isMobileScreen && location.pathname === "/ticket") {
      navigate("/sale");
      return;
    }

    return () => {};
  }, [location, isMobileScreen]);

  const updatedTicket = ticket.map((ticket) => {
    const findItemById = itemList.find((item) => item.id === ticket.id);
    return {
      ...findItemById,
      count: ticket.count,
      accumulatedPrice: ticket.accumulatedPrice,
      comment: ticket.comment,
      ticketId: ticket.id,
    } as ticket;
  });

  const totalPrice = ticket.reduce((accumulator, ticket) => {
    accumulator = parseFloat(ticket.accumulatedPrice) + accumulator;
    return accumulator;
  }, 0);

  const formattedTotalPrice = formatToPesos(totalPrice);

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
          {updatedTicket.map((ticket) => {
            return (
              <DetailListItem
                key={ticket.id}
                itemId={ticket.id}
                itemName={ticket.name}
                itemTrackStock={ticket.trackstock}
                itemInstock={ticket.instock}
                itemCount={ticket.count}
                itemPrice={ticket.accumulatedPrice}
              />
            );
          })}
        </ListStyled>

        {ticket.length !== 0 && (
          <List disablePadding>
            <DividerStyled component={"li"} />
            <ListItem>
              <TotalText>Total</TotalText>
              <TotalAmount>{formattedTotalPrice}</TotalAmount>
            </ListItem>
          </List>
        )}
      </SidebarContainer>

      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </RootContainer>
  );
};

export default RootTicket;
