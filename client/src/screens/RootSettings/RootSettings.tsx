import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import { RootContainer, SidebarContainer, ContentContainer } from "./RootSettingsStyles.ts";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store/index.ts";
import { settingActions } from "../../store/setting-slice.ts";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type RootSettingsProps = {};

const RootSettings: React.FC<RootSettingsProps> = (props) => {
  const {} = props;

  const location = useLocation();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const setting = useSelector((state: storeProps) => state.setting);

  useEffect(() => {
    if (location.pathname !== "/settings" && isMobileView) {
      dispatch(settingActions.toggleSideBar("hidden"));
      return;
    }

    dispatch(settingActions.toggleSideBar("show"));
    return () => {};
  }, [setting, isMobileView, location]);

  return (
    <>
      <RootContainer>
        <SidebarContainer isshowsidebar={setting.isShowSidebar}>
          <Header />
          <Sidebar />
        </SidebarContainer>

        <ContentContainer isshowsidebar={setting.isShowSidebar}>
          <Outlet />
        </ContentContainer>
      </RootContainer>
    </>
  );
};

export default RootSettings;
