import {
  Tab,
  Tabs,
  TabsProps,
  styled,
  Theme,
  TabProps,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  WindowSharp as WindowSharpIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Add,
  WindowSharp,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { LinkProps } from "react-router-dom";
import { useMenu } from "../../../../hooks/material-ui/useMenu/useMenu";
import MenuListPage from "../MenuListPage/MenuListPage";
import MenuListFilterItems from "../MenuListFilterItems/MenuListFilterItems";
import { handleTabChange, tabIndex } from "../../../../hooks/material-ui/useTabs/useTabs";

const TabsStyled = styled(Tabs)<TabsProps>(({ theme }: { theme: Theme }) => ({
  "&.MuiTabs-root": { boxShadow: theme.shadows[4] },
  "& .MuiTabs-indicator": { backgroundColor: theme.palette.success.main, top: 0 },
}));

const TabStyled = styled(Tab)<TabProps | LinkProps>(({ theme }: { theme: Theme }) => ({
  "&.Mui-selected": { color: theme.palette.success.main },
  minHeight: theme.spacing(6),
  flexGrow: 1,
  maxWidth: "100%",
}));

type pageDataListProps = {
  id: number;
  pageName: string;
  tabId: number;
}[];

type TabsPanelProps = {
  json: {
    pageDataList: pageDataListProps;
  };
  isThemeMobileScreen: boolean;
  onOpenDialogRename: () => void;
  onOpenDialogDelete: () => void;
  editModeActions: {
    isOpenEditMode: boolean;
    onCloseEditMode: () => void;
  };
  tabsActions: {
    tabIndex: tabIndex;
    onChangeTab: handleTabChange;
  };
  tabActions: {
    onAddPage: () => void;
    onDone: () => void;
    onMovePage: (value: "left" | "right") => void;
  };
};

const TabsPanel: React.FC<TabsPanelProps> = (props) => {
  const {
    json: { pageDataList },
    isThemeMobileScreen,
    onOpenDialogDelete,
    onOpenDialogRename,
    editModeActions: { isOpenEditMode, onCloseEditMode },
    tabsActions: { tabIndex, onChangeTab },
    tabActions: { onDone, onAddPage, onMovePage },
  } = props;

  const {
    isOpen: isOpenMenuListPage,
    anchorEl: anchorElMenuListPage,
    handleCloseMenu: handleCloseMenuListPage,
    handleOpenMenu: handleOpenMenuListPage,
  } = useMenu();

  const {
    isOpen: isOpenMenuListFilterIterms,
    anchorEl: anchorElMenuListFilterIterms,
    handleCloseMenu: handleCloseMenuListFilterIterms,
    handleOpenMenu: handleOpenMenuListFilterIterms,
  } = useMenu();

  const isSelected = (pageId: number) => {
    return {
      ...((pageId === tabIndex
        ? {
            onClick: handleOpenMenuListPage,
            icon: <ArrowDropDownIcon fontSize="small" />,
            iconPosition: "end",
          }
        : {}) as TabProps),
    };
  };

  return (
    <Box>
      {!isOpenEditMode && (
        <TabsStyled
          variant="scrollable"
          scrollButtons={"auto"}
          allowScrollButtonsMobile
          value={tabIndex}
          onChange={onChangeTab}
          aria-label="basic tabs example"
        >
          <TabStyled
            label={"Favorite"}
            id={`simple-tab-${0}`}
            aria-controls={`simple-tab-${0}`}
            sx={(theme) => ({})}
          />

          {pageDataList.map((page) => {
            return (
              <TabStyled
                key={page.id}
                label={page.pageName}
                id={`simple-tab-${page.tabId}`}
                aria-controls={`simple-tab-${page.tabId}`}
                sx={(theme) => ({})}
              />
            );
          })}

          <TabStyled
            label={<WindowSharp />}
            {...(isThemeMobileScreen && pageDataList.length + 1 === tabIndex
              ? {
                  icon: <ArrowDropDownIcon />,
                  iconPosition: "end",
                  onClick: handleOpenMenuListFilterIterms,
                }
              : {})}
            id={`simple-tab-${pageDataList.length + 1}`}
            aria-controls={`simple-tab-${pageDataList.length + 1}`}
            sx={(theme) => ({})}
          />
        </TabsStyled>
      )}
      {isOpenEditMode && (
        <TabsStyled
          variant="scrollable"
          scrollButtons={"auto"}
          allowScrollButtonsMobile
          value={tabIndex}
          onChange={onChangeTab}
          aria-label="basic tabs example"
        >
          <TabStyled
            label={"Favorite"}
            id={`simple-tab-${0}`}
            aria-controls={`simple-tab-${0}`}
            sx={(theme) => ({})}
          />
          {pageDataList.map((page) => {
            return (
              <TabStyled
                key={page.id}
                {...isSelected(page.tabId)}
                label={page.pageName}
                id={`simple-tab-${page.tabId}`}
                aria-controls={`simple-tab-${page.tabId}`}
                sx={(theme) => ({})}
              />
            );
          })}

          {pageDataList.length < 5 && (
            <TabStyled
              onClick={onAddPage}
              label={"ADD PAGE"}
              icon={<Add fontSize="small" />}
              iconPosition="start"
              sx={(theme) => ({
                borderLeft: `1px solid ${theme.palette.divider}`,
              })}
            />
          )}
          {isOpenEditMode && isThemeMobileScreen && (
            <TabStyled
              onClick={onDone}
              label={"DONE"}
              sx={(theme) => ({
                backgroundColor: theme.palette.success.main,
                color: theme.palette.common.white,
                "&.Mui-selected": {
                  color: theme.palette.common.white,
                },
              })}
            />
          )}
        </TabsStyled>
      )}

      <MenuListFilterItems
        anchorEl={anchorElMenuListFilterIterms}
        isOpen={isOpenMenuListFilterIterms}
        onClose={handleCloseMenuListFilterIterms}
      />

      <MenuListPage
        tabIndex={tabIndex}
        pageDataList={pageDataList}
        anchorEl={anchorElMenuListPage}
        isOpen={isOpenMenuListPage}
        onClose={handleCloseMenuListPage}
        onOpenDialogDeletePage={onOpenDialogDelete}
        onOpenDialogRenamePage={onOpenDialogRename}
        onMovePage={onMovePage}
      />
    </Box>
  );
};

export default TabsPanel;
