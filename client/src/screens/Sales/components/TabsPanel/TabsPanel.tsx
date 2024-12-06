import { Tabs } from "@mui/material";
import { WindowSharp as WindowSharpIcon } from "@mui/icons-material";
import React from "react";
import { CustomizedBox, CustomizedTabChar, CustomizedTabIcon } from "./TabsPanelStyles";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import { tabPanelActions } from "../../../../store/tabPanel-slice";

type TabsPanelState = {};

const TabsPanel: React.FC<TabsPanelState> = (props) => {
  const {} = props;

  const dispatch = useDispatch();
  const selectedTab = useSelector((state: storeProps) => state.tabPanel.selectedTab);
  const isSetupItem = useSelector((state: storeProps) => state.item.isSetupItem);

  const handleChangeTab = (_event: React.SyntheticEvent, selectedTab: number) => {
    dispatch(tabPanelActions.handleChangeTab(selectedTab));
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const isStatus = isSetupItem ? { disabled: true } : {};

  return (
    <CustomizedBox>
      <Tabs
        variant="fullWidth"
        centered
        value={selectedTab}
        onChange={handleChangeTab}
        TabIndicatorProps={{ sx: { bgcolor: "success.main", top: 0 } }}
        aria-label="basic tabs example"
      >
        <CustomizedTabChar label="Favorite" {...a11yProps(0)} />
        <CustomizedTabIcon
          icon={<WindowSharpIcon fontSize="large" />}
          aria-label="WindowSharp"
          {...a11yProps(1)}
          {...isStatus}
        />
      </Tabs>
    </CustomizedBox>
  );
};

export default TabsPanel;
