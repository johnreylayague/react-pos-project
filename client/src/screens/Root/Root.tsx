import { Outlet } from "react-router-dom";
import ItemDialog from "./components/ItemDialog/ItemDialog";
import SidebarDrawer from "../../components/layout/Sidebar/SidebarDrawer";
import React from "react";

type RootProps = {};

const Root: React.FC<RootProps> = () => {
  return (
    <>
      <Outlet />
      <SidebarDrawer />
      <ItemDialog />
    </>
  );
};

export default Root;
