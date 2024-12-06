import React from "react";
import Header from "./components/Header/Header.tsx";
import MenuList from "./components/MenuList/MenuList.tsx";
import { SidebarSwipeableDrawer } from "./SidebarDrawerStyles.ts";
import { drawerActions } from "../../../store/drawer-slice.ts";
import { storeProps } from "../../../store/index.ts";
import { useDispatch, useSelector } from "react-redux";
import { drawerBleeding } from "../../../utils/componentStyles.ts";

type SidebarProps = {};

const SidebarDrawer: React.FC<SidebarProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state: storeProps) => state.drawer.isDrawerOpen);

  const handleDrawerOnClose = () => {
    dispatch(drawerActions.handleToggleDrawer(false));
  };

  const handleDrawerOnOpen = () => {
    dispatch(drawerActions.handleToggleDrawer(true));
  };

  return (
    <SidebarSwipeableDrawer
      open={isDrawerOpen}
      swipeAreaWidth={drawerBleeding}
      anchor="left"
      onClose={handleDrawerOnClose}
      onOpen={handleDrawerOnOpen}
      disableSwipeToOpen={true}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Header userName="JR" role="OWNER" location="POS 3" />
      <MenuList />
    </SidebarSwipeableDrawer>
  );
};

export default SidebarDrawer;
