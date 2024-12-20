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
import { convertToType } from "../../../../utils/typescriptHelpers";

type ShiftManagementPanelProps = {
  onCloseShift: () => void;
};

const ShiftManagementPanel: React.FC<ShiftManagementPanelProps> = (props) => {
  const { onCloseShift } = props;
  const currentActiveShift = useSelector((state: storeProps) => state.shift.currentActiveShift);

  const convertedStartingCash = formatToPesos(currentActiveShift.startingCash);
  const convertedCashPayments = formatToPesos("0");
  const cashRefunds = formatToPesos("0");
  const paidIn = formatToPesos("0");
  const paidOut = formatToPesos("0");
  const expectedCashAmount = formatToPesos("0");
  const grossSales = formatToPesos("0");
  const refund = formatToPesos("0");
  const netSales = formatToPesos("0");
  const cash = formatToPesos("0");

  const convertedShiftStartDate = convertToType(
    "string",
    currentActiveShift.shiftStartDate,
    new Date(currentActiveShift.shiftStartDate)
  );

  const shiftStartDateTime = formatDateTime(convertedShiftStartDate);

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
          <ListItemDetail>Shift number: {currentActiveShift.shiftNumber}</ListItemDetail>
          <ListItemDetail secondary={shiftStartDateTime}>
            Shift opened: {currentActiveShift.shiftOpened}
          </ListItemDetail>
        </ListStyled>

        <DividerStyled />

        {/* Cash drawer */}
        <List subheader={<ListSubheaderStyled disableGutters>Cash drawer</ListSubheaderStyled>}>
          <ListItemDetail secondary={convertedStartingCash}>Starting cash</ListItemDetail>
          <ListItemDetail secondary={convertedCashPayments}>Cash payments</ListItemDetail>
          <ListItemDetail secondary={cashRefunds}>Cash refunds</ListItemDetail>
          <ListItemDetail secondary={paidIn}>Paid in</ListItemDetail>
          <ListItemDetail secondary={paidOut}>Paid out</ListItemDetail>
          <ListItemDetail secondary={expectedCashAmount} primaryHighlight secondaryHighlight>
            Expected cash amount
          </ListItemDetail>
        </List>

        <DividerStyled />

        {/* Sales summary */}
        <List subheader={<ListSubheaderStyled disableGutters>Sales summary</ListSubheaderStyled>}>
          <ListItemDetail secondary={grossSales} primaryHighlight secondaryHighlight>
            Gross sales
          </ListItemDetail>
          <ListItemDetail secondary={refund}>Refund</ListItemDetail>
        </List>

        <Divider />

        {/* Net sales and Cash */}
        <List>
          <ListItemDetail secondary={netSales} primaryHighlight>
            Net sales
          </ListItemDetail>
          <ListItemDetail secondary={cash}>Cash</ListItemDetail>
        </List>
      </PaperStyled>
    </ContainerStyled>
  );
};

export default ShiftManagementPanel;
