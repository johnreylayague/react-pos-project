import React, { useEffect, useState } from "react";
import { List, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import PriceSummary from "./components/PriceSummary/PriceSummary";
import ReceiptInfo from "./components/ReceiptInfo/ReceiptInfo";
import ListItemDetail from "./components/ListItemDetail/ListItemDetail";
import TransactionSummary from "./components/TransactionSummary/TransactionSummary";
import TransactionDetail from "./components/TransactionDetail/TransactionDetail";
import { storeProps } from "../../store";
import { useSelector } from "react-redux";
import { formatToPesos } from "../../utils/format";
import { BoxStyled, ContainerStyled, PaperStyled } from "./ReceiptStyles";

type ReceiptProps = {};
const Receipt: React.FC<ReceiptProps> = (props) => {
  const {} = props;

  const receipt = useSelector((state: storeProps) => state.sale.receipt);
  const shiftList = useSelector((state: storeProps) => state.shift.shiftList);
  const purchasedItems = useSelector((state: storeProps) => state.sale.purchasedItems);

  const params = useParams<{ receiptId: string }>();
  const [receiptField, setReceiptField] = useState<{
    id: number | string;
    shiftId: number | string;
    receiptNumber: number | string;
    shiftNumber: number | string;
    salesDevice: string;
    openedBy: string;
    totalAmount: string;
    cashReceived: string;
    changeGiven: string;
    transactionDate: string;
    refunded: boolean;
    refundedReceiptId: string | number | undefined;
  }>({
    id: "",
    receiptNumber: "",
    shiftNumber: "",
    salesDevice: "",
    openedBy: "",
    cashReceived: "",
    changeGiven: "",
    shiftId: "",
    totalAmount: "",
    transactionDate: "",
    refunded: false,
    refundedReceiptId: "",
  });

  useEffect(() => {
    const receiptId = params.receiptId ? parseInt(params.receiptId) : receipt[0].id;

    const findReceiptById = receipt.find((receipt) => receipt.id === receiptId);
    const findShiftById = shiftList.find((shift) => shift.id === findReceiptById?.shiftId);

    if (!findReceiptById) {
      console.log("findReceiptById connot be found.");
      return;
    }

    if (!findShiftById) {
      console.log("findShiftById connot be found.");
      return;
    }

    const findRefundReceiptById = receipt.find(
      (receipt) => receipt.id === findReceiptById.refundedReceiptId
    );

    setReceiptField(() => {
      const parsedDate = new Date(findReceiptById.transactionDate);

      const formattedDate = parsedDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
      });

      const formattedTime = parsedDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      return {
        id: findReceiptById.id,
        shiftId: findReceiptById.shiftId,
        shiftNumber: findShiftById.shiftNumber,
        salesDevice: findShiftById.salesDevice,
        openedBy: findShiftById.openedBy,
        cashReceived: formatToPesos(findReceiptById.cashReceived),
        changeGiven:
          parseFloat(findReceiptById.changeGiven) !== 0
            ? formatToPesos(findReceiptById.changeGiven)
            : "",
        receiptNumber: findReceiptById.receiptNumber,
        totalAmount: formatToPesos(findReceiptById.totalAmount),
        refunded: findReceiptById.refunded,
        refundedReceiptId: findRefundReceiptById?.receiptNumber,
        transactionDate: `${formattedDate} ${formattedTime}`,
      };
    });
    return () => {};
  }, [params.receiptId, receipt, shiftList]);

  return (
    <>
      <Header
        transactionNumber={`#${receiptField.shiftNumber}-${receiptField.receiptNumber}`}
        backNavigation=".."
        goToRefundNavigation={`/receipt/${receiptField.id}/refund`}
        refunded={receiptField.refunded}
      />

      <BoxStyled>
        <ContainerStyled maxWidth="md">
          <PaperStyled>
            {receiptField.refunded && (
              <Typography color="error" textAlign={"right"}>
                Refund #{receiptField.shiftNumber}-{receiptField.refundedReceiptId}
              </Typography>
            )}
            <List>
              <PriceSummary amount={receiptField.totalAmount} label="Total" />

              <ReceiptInfo
                employeeName={`${receiptField.openedBy}`}
                posId={`${receiptField.salesDevice}`}
              />

              {purchasedItems
                .filter((item) => item.receiptId === receiptField.id)
                .map((item) => {
                  return (
                    <ListItemDetail
                      key={item.id}
                      itemName={item.name}
                      itemAmount={formatToPesos(item.accumulatedPrice)}
                      itemCount={`${item.count} x ${formatToPesos(item.price)} `}
                    />
                  );
                })}

              <TransactionSummary
                cashAmount={receiptField.cashReceived}
                totalAmount={receiptField.totalAmount}
                change={receiptField.changeGiven}
              />

              <TransactionDetail
                transactionDate={receiptField.transactionDate}
                receiptNumber={`#${receiptField.shiftNumber}-${receiptField.receiptNumber}`}
              />
            </List>
          </PaperStyled>
        </ContainerStyled>
      </BoxStyled>
    </>
  );
};

export default Receipt;
