import React from "react";
import { useMediaQuery, useTheme, Divider } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { receiptActions } from "../../store/receipt-slice.ts";
import { drawerActions } from "../../store/drawer-slice.ts";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store/index.ts";
import Header from "./components/Header/Header.tsx";
import ReceiptListItem from "./components/ReceiptListItem/ReceiptListItem.tsx";
import ReceiptList from "./components/ReceiptList/ReceiptList.tsx";
import {
  ContentContainer,
  InputSearch,
  ListStyled,
  RootContainer,
  SearchIcon,
  SidebarContainer,
} from "./RootReceiptStyles.ts";

const RootReceipt = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const receiptList = useSelector((state: storeProps) => state.sale.receipt);
  const shiftList = useSelector((state: storeProps) => state.shift.shiftList);
  const isShowSideBar = useSelector((state: storeProps) => state.receipt.isShowSideBar);

  React.useEffect(() => {
    if (location.pathname !== "/receipt" && isMobile) {
      dispatch(receiptActions.handleShowSideBar(false));
      return;
    }

    dispatch(receiptActions.handleShowSideBar(true));
    return () => {};
  }, [isShowSideBar, isMobile, location]);

  const handleOnToggleDrawer = () => {
    dispatch(drawerActions.handleToggleDrawer(true));
  };

  const transactionDateKey = Object.values(
    receiptList.reduce((acc, receipt) => {
      const datePart = new Date(receipt.transactionDate).toISOString().split("T")[0];

      if (!acc[datePart]) {
        const generatedId = Math.floor(Math.random() * 10000000);

        const findShiftListById = shiftList.find((shift) => shift.id === receipt.shiftId);

        const shiftNumber = findShiftListById?.shiftNumber ? findShiftListById.shiftNumber : 0;

        acc[datePart] = {
          id: generatedId,
          userId: 1,
          shiftNumber: shiftNumber,
          transactionDate: receipt.transactionDate,
        };
      }

      return acc;
    }, {} as { [key: string]: { id: number; userId: number; shiftNumber: number; transactionDate: string } })
  );

  return (
    <>
      <RootContainer>
        <SidebarContainer data-show-sidebar={isShowSideBar}>
          <Header onToggleNavigation={handleOnToggleDrawer} />
          <InputSearch placeholder="Search" startAdornment={<SearchIcon />} />
          <ListStyled subheader={<li />}>
            {transactionDateKey
              .sort(
                (a, b) =>
                  new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime()
              )
              .map((transactionReceipt) => {
                const parsedDate = new Date(transactionReceipt.transactionDate);

                const formattedDate = parsedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });

                return (
                  <ReceiptList key={transactionReceipt.id} dateHeader={formattedDate}>
                    {receiptList
                      .filter(
                        (receiptList) =>
                          new Date(receiptList.transactionDate).toISOString().split("T")[0] ===
                          new Date(transactionReceipt.transactionDate).toISOString().split("T")[0]
                      )
                      .sort(
                        (a, b) =>
                          new Date(b.transactionDate).getTime() -
                          new Date(a.transactionDate).getTime()
                      )
                      .map((receipt, index, array) => {
                        const RowCount = index + 1;

                        const parsedDate = new Date(receipt.transactionDate);

                        const formattedShiftStartDate = parsedDate.toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        });

                        const receiptTransactionNumber = receiptList.find(
                          (receiptRow) => receiptRow.id === receipt.refundedReceiptId
                        );

                        const shiftNumber = shiftList.find(
                          (shift) => shift.id === receiptTransactionNumber?.shiftId
                        );

                        const refundtransactionNumber = receipt.refunded
                          ? {
                              refundtransactionNumber: `${shiftNumber?.shiftNumber}-${receiptTransactionNumber?.receiptNumber}`,
                            }
                          : {};

                        return (
                          <React.Fragment key={receipt.id}>
                            <ReceiptListItem
                              link={`${receipt.id}`}
                              paymentAmount={receipt.totalAmount}
                              receiptTransactionNumber={`${transactionReceipt.shiftNumber}-${receipt.receiptNumber}`}
                              {...refundtransactionNumber}
                              time={formattedShiftStartDate}
                            />
                            {array.length !== RowCount && (
                              <Divider variant="inset" component="li" />
                            )}
                          </React.Fragment>
                        );
                      })}
                  </ReceiptList>
                );
              })}
          </ListStyled>
        </SidebarContainer>

        <ContentContainer data-show-sidebar={isShowSideBar}>
          <Outlet />
        </ContentContainer>
      </RootContainer>
    </>
  );
};

export default RootReceipt;
