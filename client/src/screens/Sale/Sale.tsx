import { useTheme, useMediaQuery, Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import { saleActions } from "../../store/sale-slice";
import { ActionBox, ContentContainer, RootContainer, SidebarContainer } from "./SaleStyles.ts";
import OpenShiftRequest from "./components/OpenShiftRequest/OpenShiftRequest.tsx";
import ContainedButton from "../../components/common/elements/Button/ContainedButton/ContainedButton.tsx";
import { useNavigate } from "react-router-dom";
import DialogOpenShift from "./components/Dialog/OpenShift/OpenShift.tsx";
import { convertToNumber } from "../../utils/typescriptHelpers.ts";
import { useSnackbar } from "../../hooks/material-ui/useSnackbar/useSnackbar.ts";
import DialogAlert from "./components/DialogAlert/DialogAlert.tsx";
import { itemActions } from "../../store/item-slice.ts";
import HeaderPage from "./components/HeaderPage/HeaderPage.tsx";

type SaleProps = {};

const Sale: React.FC<SaleProps> = (props) => {
  const {} = props;

  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isThemeMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isSearch = useSelector((state: storeProps) => state.sale.isSsearch);
  const tabIndex = useSelector((state: storeProps) => state.sale.tabIndex);
  const isEdit = useSelector((state: storeProps) => state.sale.isEdit);
  const currentActiveShiftId = useSelector((state: storeProps) => state.shift.currentActiveShiftId);
  const ticket = useSelector((state: storeProps) => state.sale.ticket);
  const itemList = useSelector((state: storeProps) => state.item.itemList);
  const selectedListId = useSelector((state: storeProps) => state.sale.selectedListId);
  const pageData = useSelector((state: storeProps) => state.sale.pageData);
  const selectedCategoryId = useSelector((state: storeProps) => state.sale.selectedCategoryId);
  const [isDialogAlertText, setIsDialogAlertText] = useState<string>("");

  useEffect(() => {
    dispatch(saleActions.handleOnCloseSearch());
    dispatch(saleActions.updateSearchInputValue(""));
  }, [tabIndex]);

  const {
    isOpenDialog: isOpenDialogAlert,
    handleCloseDialog: onCloseDialogAlert,
    handleOpenDialog: onOpenDialogAlert,
  } = useDialog();

  const {
    isOpenDialog: isOpenDialogShiftRequest,
    handleCloseDialog: onCloseDialogShiftRequest,
    handleOpenDialog: onOpenDialogShiftRequest,
  } = useDialog();

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

  const { snackbar, handleOpenSnackbar, handleCloseSnackbar } = useSnackbar();

  const handleDeletePage = () => {
    if (isOpenDialogDelete) {
      dispatch(saleActions.handleOnRemoveTabPage());
    }

    onCloseDialogDelete();
  };

  const handleSelectItem = (event: React.MouseEvent<HTMLDivElement>) => {
    const itemId = event.currentTarget.getAttribute("data-item-id");

    if (!itemId) {
      handleOpenSnackbar({ message: "Item ID is missing or invalid", severity: "error" });
      return;
    }

    const convertedItemId = convertToNumber("string", itemId);

    const findItemById = itemList.find((item) => item.id === convertedItemId);

    if (!findItemById) {
      handleOpenSnackbar({ message: "Item not found", severity: "error" });
      return;
    }

    dispatch(itemActions.updatedIsSelectedTrue(convertedItemId));

    onOpenDialogSelectedItem();
  };

  const handleOnCharge = () => {
    const filteredTicketByCountAndInstock = ticket.filter(
      (ticket) => ticket.count > ticket.instock
    );

    const TicketByCountAndInstockLength = filteredTicketByCountAndInstock.length;

    if (TicketByCountAndInstockLength === 1) {
      const findTicketByCountAndInstock = filteredTicketByCountAndInstock.find(
        (ticket) => ticket.count > ticket.instock
      );

      if (!findTicketByCountAndInstock) {
        handleOpenSnackbar({ message: "No tickets exceeding stock found", severity: "error" });
        return;
      }

      setIsDialogAlertText(
        `${findTicketByCountAndInstock.name} is out of stock. Are you sure you want to continue ?`
      );

      onOpenDialogAlert();

      return;
    }

    if (TicketByCountAndInstockLength > 1) {
      setIsDialogAlertText(
        `Some items have insufficient quantities or are out of stock. Are you sure you want to continue?`
      );

      onOpenDialogAlert();
      return;
    }

    dispatch(saleActions.updateChange({ cashReceived: "0.00", totalAmountDue: "0.00" }));

    navigate("/ticket/charge");
  };

  const handleOnDialogAlertOnContinue = () => {
    navigate("/ticket/charge");
  };

  const handleOnChangeMenu = (event: React.MouseEvent<HTMLLIElement>) => {
    const menuId = event.currentTarget.getAttribute("data-id");
    const categoryName = event.currentTarget.getAttribute("data-category-name");

    if (menuId === null) {
      console.log("missing menuId Error");
      return;
    }

    if (categoryName === null) {
      console.log("missing categoryName Error");
      return;
    }

    if (menuId === "") {
      dispatch(saleActions.updateSelectedMenu({ id: "", text: "All Items" }));
      return;
    }

    const convertedMenuId = parseInt(menuId);

    dispatch(saleActions.updateSelectedMenu({ id: convertedMenuId, text: categoryName }));
  };

  const handleOnAddItem = (sequenceId: number) => {
    const convertedId = convertToNumber("string", sequenceId);

    dispatch(saleActions.updateSelectedListId(convertedId));

    onOpenDialogAddItemAndCategory();
  };

  const handleOnSelectedItem = (event: React.MouseEvent<HTMLDivElement>) => {
    const value = event.currentTarget.getAttribute("data-id");
    const pageId = pageData.find((page) => page.tabId === tabIndex)?.pageId || 0;

    const convertedSelectedListId = convertToNumber("string", selectedListId);
    const convertedValue = convertToNumber("string", value);
    const convertedPageId = convertToNumber("string", pageId);

    dispatch(
      saleActions.updateSelectedhehe({
        itemId: convertedValue,
        categoryId: "",
        sequenceId: convertedSelectedListId,
        pageId: convertedPageId,
      })
    );
    onCloseDialogAddItemAndCategory();
  };

  const handleOnAddCategory = (event: React.MouseEvent<HTMLDivElement>) => {
    const categoryId = event.currentTarget.getAttribute("data-category-id");
    const pageId = pageData.find((page) => page.tabId === tabIndex)?.pageId || 0;

    const convertedSelectedListId = convertToNumber("string", selectedListId);
    const convertedCategoryId = convertToNumber("string", categoryId);
    const convertedPageId = convertToNumber("string", pageId);

    dispatch(
      saleActions.updateSelectedhehe({
        itemId: "",
        categoryId: convertedCategoryId,
        sequenceId: convertedSelectedListId,
        pageId: convertedPageId,
      })
    );

    onCloseDialogAddItemAndCategory();
  };

  const onCategory = (selectedCategoryId: number) => {
    dispatch(saleActions.updateSelectedCategoryId(selectedCategoryId));
  };

  const handleOnClearCategory = () => {
    dispatch(saleActions.updateSelectedCategoryId(""));
  };

  return (
    <>
      <RootContainer>
        <ContentContainer>
          {!selectedCategoryId && isSearch && <HeaderSearchItem />}
          {!selectedCategoryId && !isSearch && (
            <HeaderFilterItem onChangeMenu={handleOnChangeMenu} />
          )}
          {selectedCategoryId && <HeaderPage onClearCategory={handleOnClearCategory} />}

          {currentActiveShiftId && (
            <TabContent
              onCategory={onCategory}
              onOpenDialogAddItemAndCategory={onOpenDialogAddItemAndCategory}
              onAddItem={handleOnAddItem}
            />
          )}

          {!currentActiveShiftId && <OpenShiftRequest onOpen={onOpenDialogShiftRequest} />}

          <TabsPanel
            onOpenDialogDelete={onOpenDialogDelete}
            onOpenDialogRename={onOpenDialogRename}
            isThemeMobileScreen={isThemeMobileScreen}
          />
        </ContentContainer>

        <SidebarContainer>
          {!isEdit ? (
            <React.Fragment>
              <TicketHeader />

              {currentActiveShiftId && <SelectedItemList onOpenDialog={handleSelectItem} />}

              <ActionBox>
                <ContainedButton
                  onClick={handleOnCharge}
                  disabled={!currentActiveShiftId || !!!ticket.length}
                >
                  CHARGE
                </ContainedButton>
              </ActionBox>
            </React.Fragment>
          ) : (
            <FavoriteSidebar />
          )}
        </SidebarContainer>
      </RootContainer>

      <DialogOpenShift
        isThemeMobileScreen={isThemeMobileScreen}
        isOpen={isOpenDialogShiftRequest}
        onClose={onCloseDialogShiftRequest}
      />

      <DialogSelectedItem
        onOpenSnackbar={handleOpenSnackbar}
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
        onAddCategory={handleOnAddCategory}
        onSelectedItem={handleOnSelectedItem}
        isThemeMobileScreen={isThemeMobileScreen}
        onCloseDialog={onCloseDialogAddItemAndCategory}
        isOpenDialog={isOpenDialogAddItemAndCategory}
      />

      <DialogAlert
        open={isOpenDialogAlert}
        title="Negative stock alert"
        description={isDialogAlertText}
        onContinue={handleOnDialogAlertOnContinue}
        onClose={onCloseDialogAlert}
      />

      <Snackbar
        open={snackbar.isOpenSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.alert.severity} variant="filled">
          {snackbar.alert.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Sale;
