import { Box, BoxProps, styled, Theme, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import TicketHeader from "./components/TicketHeader/TicketHeader";
import TabsPanel from "./components/TabsPanel/TabsPanel";
import SelectedItemList from "./components/SelectedItemList/SelectedItemList";
import TabContent from "./components/TabContent/TabContent";
import { DialogSelectedItem } from "./components/DialogSelectedItem/DialogSelectedItem";
import FavoriteSidebar from "./components/FavoriteSidebar/FavoriteSidebar";
import HeaderFilterItem from "./components/HeaderFilterItem/HeaderFilterItem";
import HeaderSearchItem from "./components/HeaderSearchItem/HeaderSearchItem";
import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog";
import DialgoRenamePage from "./components/DialogRenamePage/DialgoRenamePage";
import FavoriteTabDialog from "./components/FavoriteTabDialog/FavoriteTabDialog";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog";
import { useTabs } from "../../hooks/material-ui/useTabs/useTabs";
import { useToggle } from "../../hooks/components/useToggle/useToggle";
import { useInteractionHandler } from "../../hooks/Sale/useInteractionHandler";

const sideBarWidth = {
  xs: "100%",
  sm: "100%",
  md: 270,
  lg: 490,
  xl: 490,
};

const RootContainer = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  display: "flex",
  height: "100dvh",
}));

const ContentContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    maxWidth: `calc(100vw - 380px)`,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: `calc(100vw - ${sideBarWidth.md}px)`,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: sideBarWidth.sm,
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: sideBarWidth.sm,
  },
  width: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  maxWidth: `calc(100vw - ${sideBarWidth.lg}px)`,
  overflowX: "hidden",
}));

const SidebarContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: { maxWidth: 380 },
  [theme.breakpoints.down("md")]: {
    maxWidth: sideBarWidth.md,
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("xs")]: {},
  flex: 1,
  maxWidth: sideBarWidth.lg,
  display: "flex",
  flexDirection: "column",
  borderLeft: `1px solid ${theme.palette.divider}`,
}));

type SaleProps = {};
export type pageDataProps = {
  id: number;
  pageName: string;
  tabId: number;
  pageId: number;
};

const Sale: React.FC<SaleProps> = (props) => {
  const {} = props;

  const theme = useTheme();
  const isThemeMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [pageList, setPageList] = React.useState<pageDataProps[]>([]);

  const [pageRename, setPageRename] = React.useState({ pageRename: "" });

  const {
    isOpenDialog: isOpenDialogSelectedItem,
    handleCloseDialog: onCloseDialogSelectedItem,
    handleOpenDialog: onOpenDialogSelectedItem,
  } = useDialog();

  const {
    isOpenDialog: isOpenDialogAddItemAndCategory,
    handleCloseDialog: onCloseDialogAddItemAndCategory,
    handleOpenDialog: onOpenDialogAddItemAndCategory,
  } = useDialog();

  const {
    isOpenDialog: isOpenDialogDelete,
    handleCloseDialog: onCloseDialogDelete,
    handleOpenDialog: onOpenDialogDelete,
  } = useDialog();

  const {
    isOpenDialog: isOpenDialogRename,
    handleCloseDialog: onCloseDialogRename,
    handleOpenDialog: onOpenDialogRename,
  } = useDialog();

  const {
    isOpenToggle: isOpenEditMode,
    handleCloseToggle: onCloseEditMode,
    handleOpenToggle: onOpenEditMode,
  } = useToggle();

  const {
    isOpenToggle: isOpenSearch,
    handleOpenToggle: onOpenSearch,
    handleCloseToggle: onCloseSearch,
  } = useToggle();

  const { tabIndex, handleTabChange: onTabChange } = useTabs();

  const { interactionHandlers } = useInteractionHandler(onOpenEditMode, isOpenEditMode);

  const handleOnUpdatePageName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPageRename((prevState) => {
      return { ...prevState, pageRename: value };
    });
  };

  const handleOnUpdatePageNameASD = (value: string) => {
    setPageRename((prevState) => {
      return { ...prevState, pageRename: value };
    });
  };

  const handleAddPage = () => {
    setPageList((prevState) => {
      const nextTabIndex = prevState.length + 1;

      const existingPageIds = prevState.map((page) => page.pageId);

      const availablePageIds = Array.from({ length: 5 }, (_, index) => index + 2).filter(
        (pageId) => !existingPageIds.includes(pageId)
      );

      const smallestAvailablePageId = Math.min(...availablePageIds);

      const newPage = {
        id: Math.random(),
        pageName: `Page ${smallestAvailablePageId}`,
        pageId: smallestAvailablePageId,
        tabId: nextTabIndex,
      };

      const updatedPageList = [...prevState, newPage];

      return [...updatedPageList];
    });
  };

  const handleDeletePage = () => {
    if (isOpenDialogDelete) {
      setPageList((prevState) => {
        const deletedItemIndex = prevState.findIndex((page) => page.tabId === tabIndex);
        const filteredPage = prevState.filter((page) => page.tabId !== tabIndex);
        const updatedState = filteredPage.map((page, index) => {
          const rowCount = index + 1;
          return { ...page, tabId: rowCount };
        });

        const finalIndex = Math.max(deletedItemIndex, 0);

        onTabChange(null, finalIndex);

        return [...updatedState];
      });
    }
    onCloseDialogDelete();
  };

  const handleOnDone = () => {
    onTabChange(null, 0);
    onCloseEditMode();
  };

  const handleOnCloseEditMode = () => {
    onTabChange(null, 0);
    onCloseEditMode();
  };

  const handleOnSaveDialogRenamePage = () => {
    setPageList((prevState) => {
      const updatedPageList = prevState.map((page) => {
        if (tabIndex === page.tabId) {
          return { ...page, pageName: pageRename.pageRename };
        }
        return { ...page };
      });

      return [...updatedPageList];
    });
    onCloseDialogRename();
  };

  const handleOnMovePage = (value: "left" | "right") => {
    setPageList((prevState) => {
      const findTabIndex = prevState.findIndex((page) => page.tabId === tabIndex);
      const RowIndex = prevState.find((page) => page.tabId === tabIndex);
      let filteredTabIndex = prevState.filter((page) => tabIndex !== page.tabId);

      if (!RowIndex) {
        console.log("connot find index");
      }

      if (RowIndex) {
        const startIndex = value === "left" ? findTabIndex - 1 : findTabIndex + 1;
        filteredTabIndex.splice(startIndex, 0, RowIndex);
      }

      const updatedState = filteredTabIndex.map((page, index) => {
        return { ...page, tabId: index + 1 };
      });

      const updatedTabIndex = value === "left" ? findTabIndex : findTabIndex + 2;

      onTabChange(null, updatedTabIndex);

      return [...updatedState];
    });
  };

  return (
    <>
      <RootContainer>
        <ContentContainer>
          {!isOpenSearch && <HeaderFilterItem onOpenSearch={onOpenSearch} />}
          {isOpenSearch && <HeaderSearchItem onCloseSearch={onCloseSearch} />}

          <TabContent
            json={{ pageDataList: pageList }}
            tabIndex={tabIndex}
            onInteractionHandlers={interactionHandlers}
            isOpenEditMode={isOpenEditMode}
            onOpenDialogAddItemAndCategory={onOpenDialogAddItemAndCategory}
          />
          <TabsPanel
            json={{ pageDataList: pageList }}
            editModeActions={{
              isOpenEditMode: isOpenEditMode,
              onCloseEditMode: onCloseEditMode,
            }}
            tabsActions={{
              tabIndex: tabIndex,
              onChangeTab: onTabChange,
            }}
            tabActions={{
              onAddPage: handleAddPage,
              onDone: handleOnDone,
              onMovePage: handleOnMovePage,
            }}
            onOpenDialogDelete={onOpenDialogDelete}
            onOpenDialogRename={onOpenDialogRename}
            isThemeMobileScreen={isThemeMobileScreen}
          />
        </ContentContainer>

        <SidebarContainer>
          {!isOpenEditMode && (
            <React.Fragment>
              <TicketHeader />
              <SelectedItemList onOpenDialog={onOpenDialogSelectedItem} />
            </React.Fragment>
          )}
          {isOpenEditMode && <FavoriteSidebar onCloseEditMode={handleOnCloseEditMode} />}
        </SidebarContainer>
      </RootContainer>

      <DialogSelectedItem
        isOpenDialog={isOpenDialogSelectedItem}
        onCloseDialog={onCloseDialogSelectedItem}
      />

      <ConfirmationDialog
        description="Are you sure you want to delete the page?"
        onClose={onCloseDialogDelete}
        onDelete={handleDeletePage}
        open={isOpenDialogDelete}
        title="Delete page"
      />

      <DialgoRenamePage
        json={{ data: pageRename, pageList: pageList }}
        tabs={{ tabIndex: tabIndex }}
        inputActions={{
          onUpdatePageName: handleOnUpdatePageName,
          onUpdatePageNameASD: handleOnUpdatePageNameASD,
        }}
        buttonActions={{ onSaveDialogRenamePage: handleOnSaveDialogRenamePage }}
        title="Edit page name"
        isOpenDialog={isOpenDialogRename}
        onClose={onCloseDialogRename}
      />

      <FavoriteTabDialog
        onCloseDialog={onCloseDialogAddItemAndCategory}
        isOpenDialog={isOpenDialogAddItemAndCategory}
      />
    </>
  );
};

export default Sale;
