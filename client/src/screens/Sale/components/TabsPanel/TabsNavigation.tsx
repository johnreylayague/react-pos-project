import React from "react";
import {
  WindowSharp as WindowSharpIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";
import { TabStyled, TabsStyled } from "./TabNavigationStyles";
import { pageDataProps } from "../../../../store/sale-slice";

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

  const nextTabIndex = pageData.length + 1;

  return (
    <TabsStyled
      variant="scrollable"
      scrollButtons={"auto"}
      allowScrollButtonsMobile
      value={tabIndex}
      onChange={onChangeTab}
      aria-label="basic tabs example"
    >
      <TabStyled label={"Favorite"} id={`simple-tab-${0}`} aria-controls={`simple-tab-${0}`} />

      {pageData.map((page) => {
        return (
          <TabStyled
            key={page.id}
            label={page.pageName}
            id={`simple-tab-${page.tabId}`}
            aria-controls={`simple-tab-${page.tabId}`}
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
      />
    </TabsStyled>
  );
};

export default TabNavigation;
