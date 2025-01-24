import { Divider, List } from "@mui/material";
import React from "react";
import OutlinedButton from "../../../../components/common/elements/Button/OutlinedButton/OutlinedButton";
import ListItemDetail from "../ListItemDetail/ListItemDetail";
import { Link } from "react-router-dom";
import { formatDateTime, formatToPesos } from "../../../../utils/format";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import {
  BoxStyled,
  ContainerStyled,
  DividerStyled,
  ListStyled,
  ListSubheaderStyled,
  PaperStyled,
} from "./ShiftManagementPanelStyles";
import { computeFieldTotal, computeTotalFromMultiplication } from "../../../../utils/computeUtils";

type ShiftManagementPanelProps = {
  onCloseShift: () => void;
};

const ShiftManagementPanel: React.FC<ShiftManagementPanelProps> = (props) => {
  const { onCloseShift } = props;

  const currentActiveShiftId = useSelector((state: storeProps) => state.shift.currentActiveShiftId);
  const shiftList = useSelector((state: storeProps) => state.shift.shiftList);
  const purchasedItems = useSelector((state: storeProps) => state.sale.purchasedItems);
  const receipt = useSelector((state: storeProps) => state.sale.receipt);
  const cashManagementList = useSelector((state: storeProps) => state.shift.cashManagementList);

  const filterByPayTypeAndShift = (payType: "PayIn" | "PayOut") =>
    cashManagementList.filter(
      (cashManagement) =>
        cashManagement.shiftId === currentActiveShiftId && cashManagement.payType === payType
    );

  const filterByIsRefunded = (refunded: boolean) =>
    receipt.filter(
      (receipt) => receipt.shiftId === currentActiveShiftId && receipt.refunded === refunded
    );

  const totalPayInForActiveShift = computeFieldTotal(
    filterByPayTypeAndShift("PayIn"),
    "cashPayment"
  );

  const totalPayOutForActiveShift = computeFieldTotal(
    filterByPayTypeAndShift("PayOut"),
    "cashPayment"
  );

  const filteredReceiptByActiveShiftAndNotRefunded = receipt
    .filter((receipt) => receipt.shiftId === currentActiveShiftId && !receipt.refunded)
    .map((receipt) => receipt.id);

  const filteredItems = purchasedItems.filter((item) =>
    filteredReceiptByActiveShiftAndNotRefunded.includes(item.receiptId)
  );

  const accumulatedGrossSales = computeTotalFromMultiplication(filteredItems, "price", "count");

  const accumulatedCashRefunds = computeFieldTotal(filterByIsRefunded(true), "totalAmount");

  const activeShift = shiftList.find(
    (shift) => shift.id === currentActiveShiftId && !shift.isShiftClosed
  );

  const activeShiftStartingCashAmount = activeShift ? activeShift.startingCashAmount : "0";

  const shiftStartingCashAmount = parseFloat(activeShiftStartingCashAmount) || 0;

  const accumulatedNetSales = accumulatedGrossSales - accumulatedCashRefunds;

  const totalCashInOut = totalPayInForActiveShift - totalPayOutForActiveShift;

  const accumulatedExpectedCashAmount =
    shiftStartingCashAmount + accumulatedNetSales + totalCashInOut;

  const shiftNumber = activeShift ? activeShift.shiftNumber : 0;
  const openedBy = activeShift ? activeShift.openedBy : "";
  const openedAt = activeShift ? activeShift.openedAt : "";

  const shiftStartDateTime = formatDateTime(openedAt);
  const startingCashAmount = formatToPesos(shiftStartingCashAmount);
  const totalCashPayments = formatToPesos(accumulatedGrossSales);
  const totalCashRefunds = formatToPesos(accumulatedCashRefunds);
  const totalPaidIn = formatToPesos(totalPayInForActiveShift);
  const totalPaidOut = formatToPesos(totalPayOutForActiveShift);
  const actualCashBalance = formatToPesos(accumulatedExpectedCashAmount);
  const totalGrossSales = formatToPesos(accumulatedGrossSales);
  const totalNetSales = formatToPesos(accumulatedNetSales);

  return (
    <ContainerStyled maxWidth="md">
      <PaperStyled>
        {/* Action Buttons */}
        <BoxStyled>
          <OutlinedButton component={Link} to={"cash-management"} relative="path">
            CASH MANAGEMENT
          </OutlinedButton>
          <OutlinedButton onClick={onCloseShift}>CLOSE SHIFT</OutlinedButton>
        </BoxStyled>

        {/* Shift Info */}
        <ListStyled>
          <ListItemDetail>Shift number: {shiftNumber}</ListItemDetail>
          <ListItemDetail secondary={shiftStartDateTime}>Shift opened: {openedBy}</ListItemDetail>
        </ListStyled>

        <DividerStyled />

        {/* Cash drawer */}
        <List subheader={<ListSubheaderStyled disableGutters>Cash drawer</ListSubheaderStyled>}>
          <ListItemDetail secondary={startingCashAmount}>Starting cash</ListItemDetail>
          <ListItemDetail secondary={totalCashPayments}>Cash payments</ListItemDetail>
          <ListItemDetail secondary={totalCashRefunds}>Cash refunds</ListItemDetail>
          <ListItemDetail secondary={totalPaidIn}>Paid in</ListItemDetail>
          <ListItemDetail secondary={totalPaidOut}>Paid out</ListItemDetail>
          <ListItemDetail secondary={actualCashBalance} primaryHighlight secondaryHighlight>
            Expected cash amount
          </ListItemDetail>
        </List>

        <DividerStyled />

        {/* Sales summary */}
        <List subheader={<ListSubheaderStyled disableGutters>Sales summary</ListSubheaderStyled>}>
          <ListItemDetail secondary={totalGrossSales} primaryHighlight secondaryHighlight>
            Gross sales
          </ListItemDetail>
          <ListItemDetail secondary={totalCashRefunds}>Refund</ListItemDetail>
        </List>

        <Divider />

        {/* Net sales and Cash */}
        <List>
          <ListItemDetail secondary={totalNetSales} primaryHighlight>
            Net sales
          </ListItemDetail>
        </List>
      </PaperStyled>
    </ContainerStyled>
  );
};

export default ShiftManagementPanel;
