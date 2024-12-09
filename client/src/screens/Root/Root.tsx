import { Outlet } from "react-router-dom";
import PublicFooter from "../../components/layout/Footer/PublicFooter";
import ItemDialog from "./components/ItemDialog/ItemDialog";
import PublicHeader from "../../components/layout/Header/PublicHeader";
import SidebarDrawer from "../../components/layout/Sidebar/SidebarDrawer";
import React from "react";

type RootProps = {};

const Root: React.FC<RootProps> = () => {
  return (
    <>
      <PublicHeader />
      <Outlet />
      <PublicFooter />

      <SidebarDrawer />
      <ItemDialog />
    </>
  );
};

export default Root;
