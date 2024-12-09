import { useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import TicketHeader from "./components/TicketHeader/TicketHeader";
import TabsPanel from "./components/TabsPanel/MainTabsPanel.tsx";
import SelectedItemList from "./components/SelectedItemList/MainSelectedItemList.tsx";
import TabContent from "./components/TabContent/MainTabContent.tsx";
import { DialogSelectedItem } from "./components/DialogSelectedItem/DialogSelectedItem";
import FavoriteSidebar from "./components/FavoriteSidebar/FavoriteSidebar";
import HeaderFilterItem from "./components/HeaderFilterItem/HeaderFilterItem";
import HeaderSearchItem from "./components/HeaderSearchItem/HeaderSearchItem";
import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog";
import DialgoRenamePage from "./components/DialogRenamePage/DialgoRenamePage";
import FavoriteTabDialog from "./components/FavoriteTabDialog/MainFavoriteTabDialog.tsx";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog";
import { useInteractionHandler } from "../../hooks/Sale/useInteractionHandler";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import { saleActions } from "../../store/sale-slice";
import { ContentContainer, RootContainer, SidebarContainer } from "./SaleStyles.ts";

type SaleProps = {};

const Sale: React.FC<SaleProps> = (props) => {
  const {} = props;

  const theme = useTheme();
  const dispatch = useDispatch();
  const isThemeMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isSearch = useSelector((state: storeProps) => state.sale.isSsearch);
  const isEdit = useSelector((state: storeProps) => state.sale.isEdit);

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

  const { interactionHandlers } = useInteractionHandler(dispatch);

  const handleDeletePage = () => {
    if (isOpenDialogDelete) {
      dispatch(saleActions.handleOnRemoveTabPage());
    }
    onCloseDialogDelete();
  };

  return (
    <>
      <RootContainer>
        <ContentContainer>
          {!isSearch && <HeaderFilterItem />}
          {isSearch && <HeaderSearchItem />}
          <TabContent
            onInteractionHandlers={interactionHandlers}
            onOpenDialogAddItemAndCategory={onOpenDialogAddItemAndCategory}
          />
          <TabsPanel
            onOpenDialogDelete={onOpenDialogDelete}
            onOpenDialogRename={onOpenDialogRename}
            isThemeMobileScreen={isThemeMobileScreen}
          />
        </ContentContainer>

        <SidebarContainer>
          {!isEdit && (
            <React.Fragment>
              <TicketHeader />
              <SelectedItemList onOpenDialog={onOpenDialogSelectedItem} />
            </React.Fragment>
          )}
          {isEdit && <FavoriteSidebar />}
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
        title="Edit page name"
        isOpenDialog={isOpenDialogRename}
        onClose={onCloseDialogRename}
      />

      <FavoriteTabDialog
        isThemeMobileScreen={isThemeMobileScreen}
        onCloseDialog={onCloseDialogAddItemAndCategory}
        isOpenDialog={isOpenDialogAddItemAndCategory}
      />
    </>
  );
};

export default Sale;
