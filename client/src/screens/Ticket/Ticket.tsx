import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { DialogSelectedItem } from "./components/DialogSelectedItem/DialogSelectedItem";
import ChargeButton from "./components/ChargeButton/ChargeButton";
import TotalSummaryList from "./components/TotalSummaryList/TotalSummaryList";
import DetailListItem from "./components/DetailListItem/DetailListItem";
import { ArrowBackButton, ArrowBackIcon, ListStyled, MoreVertIcon } from "./TicketStyles";
import TicketButton from "./components/TicketButton/TicketButton";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog";

type TicketProps = {};

const Ticket: React.FC<TicketProps> = (props) => {
  const {} = props;

  const { handleCloseDialog, handleOpenDialog, isOpenDialog } = useDialog();

  return (
    <>
      <Box sx={() => ({ height: "100dvh", display: "flex", flexDirection: "column" })}>
        <AppBar position="static" color="success" elevation={0}>
          <Toolbar>
            <ArrowBackButton component={Link} to={"/sale"} relative={"path"}>
              <ArrowBackIcon />
            </ArrowBackButton>

            <TicketButton label={"Ticket"} badgeContent={4} link="/sale" />

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <ListStyled>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <DetailListItem
                key={index}
                itemName="Item 1"
                itemCount={2}
                itemPrice={12.51}
                onOpenDialog={handleOpenDialog}
              />
            );
          })}
        </ListStyled>

        <TotalSummaryList amount={2.12} label="Total" />

        <ChargeButton />
      </Box>

      <DialogSelectedItem isOpenDialog={isOpenDialog} onCloseDialog={handleCloseDialog} />
    </>
  );
};

export default Ticket;
