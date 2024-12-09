import React from "react";
import { TabsStyled, TabStyled, TabAddPage, TabDone } from "./EditableTabsNavigationStyles";
import { pageDataProps } from "../../../../store/sale-slice";
import { TabProps } from "@mui/material";
import { Add as AddIcon, ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";

type EditableTabsNavigationProps = {
  tabIndex: number;
  onChangeTab: (_event: React.SyntheticEvent, value: number) => void;
  pageData: pageDataProps[];
  onOpenMenuListFilterIterms: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  onAddPage: () => void;
  onDone: () => void;
  isThemeMobileScreen: boolean;
  isEdit: boolean;
};
const EditableTabsNavigation: React.FC<EditableTabsNavigationProps> = (props) => {
  const {
    isThemeMobileScreen,
    onChangeTab,
    pageData,
    tabIndex,
    onOpenMenuListFilterIterms,
    onAddPage,
    isEdit,
    onDone,
  } = props;

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
            {...((page.tabId === tabIndex
              ? {
                  onClick: onOpenMenuListFilterIterms,
                  icon: <ArrowDropDownIcon fontSize="small" />,
                  iconPosition: "end",
                }
              : {}) as TabProps)}
            label={page.pageName}
            id={`simple-tab-${page.tabId}`}
            aria-controls={`simple-tab-${page.tabId}`}
          />
        );
      })}

      {pageData.length < 5 && (
        <TabAddPage
          onClick={onAddPage}
          label={"ADD PAGE"}
          icon={<AddIcon fontSize="small" />}
          iconPosition="start"
        />
      )}

      {isEdit && isThemeMobileScreen && <TabDone onClick={onDone} label={"DONE"} />}
    </TabsStyled>
  );
};

export default EditableTabsNavigation;
