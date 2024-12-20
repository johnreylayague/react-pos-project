import React from "react";
import {
  styled,
  Theme,
  IconButton,
  List,
  Toolbar,
  Typography,
  IconButtonProps,
  TypographyProps,
  ToolbarProps,
  Container,
  Divider,
  DividerProps,
  ListSubheader,
  ListSubheaderProps,
  ContainerProps,
} from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import ListItemDetail from "../ListItemDetail/ListItemDetail";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import { formatDateTime, formatToPesos } from "../../../../utils/format";
import { convertToType } from "../../../../utils/typescriptHelpers";

const ButtonClose = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const DialogTitleText = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  marginLeft: theme.spacing(3),
}));

const ListSubheaderStyled = styled(ListSubheader)<ListSubheaderProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.success.main,
  })
);

const DividerStyled = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: `-${theme.spacing(2)}`,
    marginRight: `-${theme.spacing(2)}`,
  },
  marginLeft: `-${theme.spacing(3)}`,
  marginRight: `-${theme.spacing(3)}`,
}));

const ContainerStyled = styled(Container)<ContainerProps>(({}: { theme: Theme }) => ({
  overflowY: "auto",
}));

type DialogShiftReportProps = { title: string; onClose: () => void };
const DialogShiftReport: React.FC<DialogShiftReportProps> = (props) => {
  const { onClose, title } = props;

  const selectedShiftReport = useSelector((state: storeProps) => state.shift.selectedShiftReport);

  const convertedShiftStartDate = convertToType(
    "string",
    selectedShiftReport.shiftStartDate,
    new Date(selectedShiftReport.shiftStartDate)
  );
  const convertedShiftEndDate = convertToType(
    "string",
    selectedShiftReport.shiftEndDate,
    new Date(selectedShiftReport.shiftEndDate)
  );

  const shiftStartDate = formatDateTime(convertedShiftStartDate);
  const shiftEndDate = formatDateTime(convertedShiftEndDate);
  const startingCash = formatToPesos(selectedShiftReport.startingCash);
  const cashPayments = formatToPesos(selectedShiftReport.cashPayments);
  const cashRefunds = formatToPesos(selectedShiftReport.cashRefunds);
  const paidIn = formatToPesos(selectedShiftReport.paidIn);
  const paidOut = formatToPesos(selectedShiftReport.paidOut);
  const expectedCashAmount = formatToPesos(selectedShiftReport.expectedCashAmount);
  const actualCashAmount = formatToPesos(selectedShiftReport.actualCashAmount);
  const grossSales = formatToPesos(selectedShiftReport.grossSales);
  const refunds = formatToPesos(selectedShiftReport.refunds);
  const netSales = formatToPesos(selectedShiftReport.netSales);
  const difference = formatToPesos(selectedShiftReport.difference);

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
          <ListItemDetail>Shift number: {selectedShiftReport.id}</ListItemDetail>
          <ListItemDetail secondary={shiftStartDate}>
            Shift opened: {selectedShiftReport.shiftOpened}
          </ListItemDetail>
          <ListItemDetail secondary={shiftEndDate}>
            Shift closed: {selectedShiftReport.shiftOpened}
          </ListItemDetail>
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
