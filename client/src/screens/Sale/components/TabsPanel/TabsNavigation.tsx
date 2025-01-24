import React from "react";
import {
  WindowSharp as WindowSharpIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";
import { TabStyled, TabsStyled } from "./TabNavigationStyles";
import { pageDataProps } from "../../../../store/sale-slice";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";

type TabNavigationProps = {
  tabIndex: number;
  onChangeTab: (_event: React.SyntheticEvent, value: number) => void;
  onOpenMenuListFilterIterms: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  pageData: pageDataProps[];
  isThemeMobileScreen: boolean;
};
const TabNavigation: React.FC<TabNavigationProps> = (props) => {
  const { isThemeMobileScreen, onChangeTab, onOpenMenuListFilterIterms, pageData, tabIndex } =
    props;

  const currentActiveShiftId = useSelector((state: storeProps) => state.shift.currentActiveShiftId);

  const nextTabIndex = pageData.length + 1;
  const tab = !currentActiveShiftId ? false : tabIndex;

  return (
    <TabsStyled
      variant="scrollable"
      scrollButtons={"auto"}
      allowScrollButtonsMobile
      value={tab}
      onChange={onChangeTab}
      aria-label="basic tabs example"
    >
      <TabStyled
        label={"Favorite"}
        id={`simple-tab-${0}`}
        aria-controls={`simple-tab-${0}`}
        disabled={!currentActiveShiftId}
      />

      {pageData.map((page) => {
        return (
          <TabStyled
            key={page.id}
            label={page.pageName}
            id={`simple-tab-${page.tabId}`}
            aria-controls={`simple-tab-${page.tabId}`}
            disabled={!currentActiveShiftId}
          />
        );
      })}

      <TabStyled
        label={<WindowSharpIcon />}
        {...(isThemeMobileScreen && nextTabIndex === tabIndex
          ? {
              icon: <ArrowDropDownIcon />,
              iconPosition: "end",
              onClick: onOpenMenuListFilterIterms,
            }
          : {})}
        id={`simple-tab-${nextTabIndex}`}
        aria-controls={`simple-tab-${nextTabIndex}`}
        disabled={!currentActiveShiftId}
      />
    </TabsStyled>
  );
};

export default TabNavigation;
