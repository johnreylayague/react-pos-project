import React from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useMenu } from "../../../../hooks/material-ui/useMenu/useMenu";
import MenuListPage from "../MenuListPage/MenuListPage";
import MenuListFilterItems from "../MenuListFilterItems/MenuListFilterItems";
import { storeProps } from "../../../../store";
import { saleActions } from "../../../../store/sale-slice";
import TabsNavigation from "./TabsNavigation";
import EditableTabsNavigation from "./EditableTabsNavigation";

type MainTabsPanelProps = {
  isThemeMobileScreen: boolean;
  onOpenDialogRename: () => void;
  onOpenDialogDelete: () => void;
};

const MainTabsPanel: React.FC<MainTabsPanelProps> = (props) => {
  const { isThemeMobileScreen, onOpenDialogDelete, onOpenDialogRename } = props;

  const dispatch = useDispatch();
  const isEdit = useSelector((state: storeProps) => state.sale.isEdit);
  const tabIndex = useSelector((state: storeProps) => state.sale.tabIndex);
  const pageData = useSelector((state: storeProps) => state.sale.pageData);

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

  const handleOnChangeTab = (_event: React.SyntheticEvent, value: number) => {
    dispatch(saleActions.handleOnChangeTab(value));
  };

  const handleAddPage = () => {
    dispatch(saleActions.handleOnAddNewTabPage());
  };

  const handleOnDone = () => {
    dispatch(saleActions.handleOnChangeTab(0));
    dispatch(saleActions.handleOnCloseEdit());
  };

  return (
    <Box>
      {!isEdit && (
        <TabsNavigation
          isThemeMobileScreen={isThemeMobileScreen}
          onChangeTab={handleOnChangeTab}
          onOpenMenuListFilterIterms={handleOpenMenuListFilterIterms}
          pageData={pageData}
          tabIndex={tabIndex}
        />
      )}
      {isEdit && (
        <EditableTabsNavigation
          isEdit={isEdit}
          isThemeMobileScreen={isThemeMobileScreen}
          onAddPage={handleAddPage}
          onChangeTab={handleOnChangeTab}
          onDone={handleOnDone}
          onOpenMenuListFilterIterms={handleOpenMenuListPage}
          pageData={pageData}
          tabIndex={tabIndex}
        />
      )}

      <MenuListFilterItems
        anchorEl={anchorElMenuListFilterIterms}
        isOpen={isOpenMenuListFilterIterms}
        onClose={handleCloseMenuListFilterIterms}
      />

      <MenuListPage
        anchorEl={anchorElMenuListPage}
        isOpen={isOpenMenuListPage}
        onClose={handleCloseMenuListPage}
        onOpenDialogDeletePage={onOpenDialogDelete}
        onOpenDialogRenamePage={onOpenDialogRename}
      />
    </Box>
  );
};

export default MainTabsPanel;
