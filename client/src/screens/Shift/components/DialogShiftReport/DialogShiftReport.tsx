import React from "react";
import { List, Divider } from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import ListItemDetail from "../ListItemDetail/ListItemDetail";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import { formatDateTime, formatToPesos } from "../../../../utils/format";
import {
  ButtonClose,
  ContainerStyled,
  DialogTitleText,
  DividerStyled,
  ListSubheaderStyled,
  ToolbarStyled,
} from "./DialogShiftReportStyles";

type DialogShiftReportProps = { title: string; onClose: () => void };
const DialogShiftReport: React.FC<DialogShiftReportProps> = (props) => {
  const { onClose, title } = props;

  const selectedReportShiftId = useSelector(
    (state: storeProps) => state.shift.selectedReportShiftId
  );

  const shiftList = useSelector((state: storeProps) => state.shift.shiftList);

  const findSelectedShiftReport = shiftList.find(
    (shift) => shift.id === selectedReportShiftId && shift.isShiftClosed
  );

  if (!findSelectedShiftReport) {
    return null;
  }

  const shiftStartDate = formatDateTime(findSelectedShiftReport.openedAt);
  const shiftEndDate = formatDateTime(findSelectedShiftReport.closedAt);
  const startingCash = formatToPesos(findSelectedShiftReport.startingCashAmount);
  const cashPayments = formatToPesos(findSelectedShiftReport.totalCashPayments);
  const cashRefunds = formatToPesos(findSelectedShiftReport.totalCashRefunds);
  const paidIn = formatToPesos(findSelectedShiftReport.totalPaidIn);
  const paidOut = formatToPesos(findSelectedShiftReport.totalPaidOut);
  const expectedCashAmount = formatToPesos(findSelectedShiftReport.expectedCashBalance);
  const actualCashAmount = formatToPesos(findSelectedShiftReport.actualCashAmount);
  const grossSales = formatToPesos(findSelectedShiftReport.totalGrossSales);
  const refunds = formatToPesos(findSelectedShiftReport.totalRefundAmount);
  const netSales = formatToPesos(findSelectedShiftReport.totalNetSales);
  const difference = formatToPesos(findSelectedShiftReport.cashDifference);
  const shiftNumber = findSelectedShiftReport.shiftNumber;
  const openedBy = findSelectedShiftReport.openedBy;
  const closedBy = findSelectedShiftReport.closedBy;

  return (
    <>
      <ToolbarStyled>
        <ButtonClose onClick={onClose}>
          <ArrowBackIcon />
        </ButtonClose>

        <DialogTitleText component="h6">{title}</DialogTitleText>
      </ToolbarStyled>

      <ContainerStyled>
        {/* Shift Overview */}
        <List>
          <ListItemDetail>Shift number: {shiftNumber}</ListItemDetail>
          <ListItemDetail secondary={shiftStartDate}>Shift opened: {openedBy}</ListItemDetail>
          <ListItemDetail secondary={shiftEndDate}>Shift closed: {closedBy}</ListItemDetail>
        </List>

        <DividerStyled />
        {/* Cash drawer */}
        <List subheader={<ListSubheaderStyled disableGutters>Cash drawer</ListSubheaderStyled>}>
          <ListItemDetail secondary={startingCash}>Starting cash</ListItemDetail>
          <ListItemDetail secondary={cashPayments}>Cash payments</ListItemDetail>
          <ListItemDetail secondary={cashRefunds}>Cash refunds</ListItemDetail>
          <ListItemDetail secondary={paidIn}>Paid in</ListItemDetail>
          <ListItemDetail secondary={paidOut}>Paid out</ListItemDetail>
          <ListItemDetail secondary={expectedCashAmount}>Expected cash amount</ListItemDetail>
          <ListItemDetail secondary={actualCashAmount}>Actual cash amount</ListItemDetail>
          <ListItemDetail secondary={difference} primaryHighlight secondaryHighlight>
            Difference
          </ListItemDetail>
        </List>

        <DividerStyled />
        {/* Sales summary */}
        <List subheader={<ListSubheaderStyled disableGutters>Sales summary</ListSubheaderStyled>}>
          <ListItemDetail secondary={grossSales} primaryHighlight secondaryHighlight>
            Gross sales
          </ListItemDetail>
          <ListItemDetail secondary={refunds}>Refunds</ListItemDetail>
          <Divider component={"li"} />
          <ListItemDetail secondary={netSales} primaryHighlight secondaryHighlight>
            Net sales
          </ListItemDetail>
        </List>
      </ContainerStyled>
    </>
  );
};

export default DialogShiftReport;
