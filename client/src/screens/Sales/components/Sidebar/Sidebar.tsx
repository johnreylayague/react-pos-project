import React from "react";
import { DrawerStyled } from "./SidebarStyles.ts";
import SidebarTicket from "../SidebarTicket/SidebarTicket.tsx";
import SidebarSetupItem from "../SidebarSetupItem/SidebarSetupItem.tsx";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store/index.ts";

interface TicketSidebarState {}

const Sidebar: React.FC<TicketSidebarState> = (props) => {
  const {} = props;

  const isSetupItem = useSelector((state: storeProps) => state.item.isSetupItem);

  let content: JSX.Element | null = null;

  if (isSetupItem) {
    content = <SidebarSetupItem />;
  }

  if (!isSetupItem) {
    content = <SidebarTicket title="Ticket" />;
  }

  return (
    <>
      <DrawerStyled variant="permanent" anchor="right">
        {content}
      </DrawerStyled>
    </>
  );
};

export default Sidebar;
