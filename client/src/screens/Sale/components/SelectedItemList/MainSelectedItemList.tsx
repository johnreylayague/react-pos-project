import { List, ListItem } from "@mui/material";
import React from "react";
import { DividerStyled, Label, ListStyled, TotalPrice } from "./MainSelectedItemListStyles";
import DetailListItem from "./DetailListItem";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import { formatToPesos } from "../../../../utils/format";
import { ticket } from "../../../../store/sale-slice";

type MainSelectedItemListProps = {
  onOpenDialog: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const MainSelectedItemList: React.FC<MainSelectedItemListProps> = (props) => {
  const { onOpenDialog } = props;

  const ticket = useSelector((state: storeProps) => state.sale.ticket);
  const itemList = useSelector((state: storeProps) => state.item.itemList);

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
    <>
      <ListStyled>
        {updatedTicket.map((ticket) => {
          
          return (
            <DetailListItem
              key={ticket.id}
              itemId={ticket.id}
              itemName={ticket.name}
              itemInstock={ticket.instock}
              itemTrackStock={ticket.trackstock}
              itemCount={ticket.count}
              itemPrice={ticket.accumulatedPrice}
              onOpenDialog={onOpenDialog}
            />
          );
        })}
      </ListStyled>

      {ticket.length !== 0 && (
        <List disablePadding>
          <DividerStyled component={"li"} />
          <ListItem>
            <Label>Total</Label>
            <TotalPrice>{formattedTotalPrice}</TotalPrice>
          </ListItem>
        </List>
      )}
    </>
  );
};

export default MainSelectedItemList;
