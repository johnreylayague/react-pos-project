import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { RootContainer, SidebarContainer, ContentContainer } from "./RootItemStyles";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import { itemActions } from "../../store/item-slice";

type RootItemProps = {};

const RootItem: React.FC<RootItemProps> = (props) => {
  const {} = props;

  const location = useLocation();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const isShowSideBar = useSelector((state: storeProps) => state.item.isShowSideBar);

  useEffect(() => {
    if (location.pathname !== "/item" && isMobileView) {
      dispatch(itemActions.toggleSideBar(false));
      return;
    }

    dispatch(itemActions.toggleSideBar(true));
    return () => {};
  }, [isShowSideBar, isMobileView, location]);

  return (
    <>
      <RootContainer>
        <SidebarContainer data-show-sidebar={isShowSideBar}>
          <Header title="Items" />
          <Sidebar isMobileView={isMobileView} />
        </SidebarContainer>

        <ContentContainer data-show-sidebar={isShowSideBar}>
          <Outlet />
        </ContentContainer>
      </RootContainer>
    </>
  );
};

export default RootItem;
