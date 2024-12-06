import React from "react";
import MenuList from "../MenuList/MenuList.tsx";
import ItemList from "../TicketList/ItemList.tsx";
import SummaryList from "../SummaryList/SummaryList.tsx";
import { CustomizedButton } from "./SidebarTicketStyles.ts";
import { Link } from "react-router-dom";

interface SidebarTicketProps {
  title: string;
}

const SidebarTicket: React.FC<SidebarTicketProps> = (props) => {
  const { title } = props;

  return (
    <>
      <MenuList title={title} />
      <ItemList />
      <SummaryList />
      <CustomizedButton
        component={Link}
        to="/sales/ticket"
        variant="contained"
        color="success"
        size="large"
      >
        CHARGE
      </CustomizedButton>
    </>
  );
};

export default SidebarTicket;
