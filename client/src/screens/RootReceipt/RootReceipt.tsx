import React, { useState } from "react";
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
  ResultMessage,
  CloseIcon,
  CloseButton,
} from "./RootReceiptStyles.ts";

const RootReceipt = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const receiptList = useSelector((state: storeProps) => state.sale.receipt);
  const shiftList = useSelector((state: storeProps) => state.shift.shiftList);
  const isShowSideBar = useSelector((state: storeProps) => state.receipt.isShowSideBar);

  const [inputSearchValue, setInputSearchValue] = useState("");

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

  const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputSearchValue(value);
  };

  const handleOnCloseButton = () => {
    setInputSearchValue("");
  };

  const updatedReceiptNumber = receiptList.map((receipt) => {
    const findShift = shiftList.find((shift) => shift.id === receipt.shiftId);
    const updatedReceiptNumber: string = findShift
      ? `${findShift.shiftNumber}-${receipt.receiptNumber}`
      : "";

    return { ...receipt, receiptNumber: updatedReceiptNumber };
  });

  const isReceiptMatch = (receiptNumber: string) =>
    inputSearchValue ? receiptNumber === inputSearchValue : true;

  const filteredReceipt = updatedReceiptNumber.filter((receipt) =>
    isReceiptMatch(receipt.receiptNumber)
  );

  const transactionDateKey = Object.values(
    filteredReceipt.reduce((acc, receipt) => {
      const datePart = new Date(receipt.transactionDate).toISOString().split("T")[0];

      if (!acc[datePart]) {
        const generatedId = Math.floor(Math.random() * 10000000);

        const findShiftListById = shiftList.find((shift) => shift.id === receipt.shiftId);

        const shiftNumber = findShiftListById?.shiftNumber ? findShiftListById.shiftNumber : 0;

        acc[datePart] = {
          id: generatedId,
          userId: 1,
          shiftNumber: shiftNumber,
          receiptAndShiftNumber: `${shiftNumber}-${receipt.receiptNumber}`,
          transactionDate: receipt.transactionDate,
        };
      }
      return acc;
    }, {} as { [key: string]: { id: number; userId: number; shiftNumber: number; receiptAndShiftNumber: string; transactionDate: string } })
  );

  return (
    <>
      <RootContainer>
        <SidebarContainer data-show-sidebar={isShowSideBar}>
          <Header onToggleNavigation={handleOnToggleDrawer} />

          <InputSearch
            placeholder="Search"
            startAdornment={<SearchIcon />}
            value={inputSearchValue}
            onChange={handleOnChangeSearch}
            endAdornment={
              <CloseButton data-is-show={!!!inputSearchValue} onClick={handleOnCloseButton}>
                <CloseIcon />
              </CloseButton>
            }
          />

          {transactionDateKey.length === 0 && <ResultMessage>No search results</ResultMessage>}
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
                    {updatedReceiptNumber
                      .filter(
                        (receiptList) =>
                          new Date(receiptList.transactionDate).toISOString().split("T")[0] ===
                          new Date(transactionReceipt.transactionDate).toISOString().split("T")[0]
                      )
                      .filter((receipt) => isReceiptMatch(receipt.receiptNumber))
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

                        const refundtransactionNumber = receipt.refunded
                          ? {
                              refundtransactionNumber: `${receipt.receiptNumber}`,
                            }
                          : {};

                        return (
                          <React.Fragment key={receipt.id}>
                            <ReceiptListItem
                              link={`${receipt.id}`}
                              paymentAmount={receipt.totalAmount}
                              receiptTransactionNumber={`${receipt.receiptNumber}`}
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
