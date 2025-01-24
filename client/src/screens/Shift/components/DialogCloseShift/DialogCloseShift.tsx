import React, { useEffect } from "react";
import { Container, Divider, List, Toolbar } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import OutlinedButton from "../../../../components/common/elements/Button/OutlinedButton/OutlinedButton";
import ListItemDetail from "../ListItemDetail/ListItemDetail";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../components/common/elements/Input/InputField/InputField";
import PesosInputField from "../../../../components/vendor/react-number-formatter/PesosInputField/PesosInputField";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import { validationRules } from "./DialogCloseShiftValidationRules";
import { shiftActions } from "../../../../store/shift-slice";
import { ButtonClose, DialogStyled, DialogTitleText } from "./DialogCloseShiftStyles";
import { formatToPesos } from "../../../../utils/format";
import { storeProps } from "../../../../store";
import { computeFieldTotal, computeTotalFromMultiplication } from "../../../../utils/computeUtils";

export type FormValuesCloseShift = {
  startingCashAmount: string;
  totalCashPayments: string;
  totalCashRefunds: string;
  totalPaidIn: string;
  totalPaidOut: string;
  expectedCashBalance: string;
  actualCashBalance: string;
  cashDifference: string;
  totalGrossSales: string;
  totalRefundAmount: string;
  totalNetSales: string;
  totalCash: string;
  actualCashAmount: string;
};

type DialogCloseShiftProps = {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
};

const DialogCloseShift: React.FC<DialogCloseShiftProps> = (props) => {
  const { isOpen, onClose, isMobile } = props;

  const dispatch = useDispatch();
  const currentActiveShiftId = useSelector((state: storeProps) => state.shift.currentActiveShiftId);
  const shiftList = useSelector((state: storeProps) => state.shift.shiftList);
  const cashManagementList = useSelector((state: storeProps) => state.shift.cashManagementList);
  const receipt = useSelector((state: storeProps) => state.sale.receipt);
  const purchasedItems = useSelector((state: storeProps) => state.sale.purchasedItems);

  const {
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<FormValuesCloseShift>();

  useEffect(() => {
    if (isOpen) {
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
      const startingCashAmount = activeShift ? activeShift.startingCashAmount : "0.00";

      const shiftStartingCashAmount = parseFloat(startingCashAmount) || 0.0;

      const accumulatedNetSales = accumulatedGrossSales - accumulatedCashRefunds;

      const totalCashInOut = totalPayInForActiveShift - totalPayOutForActiveShift;

      const accumulatedExpectedCashAmount =
        shiftStartingCashAmount + accumulatedNetSales + totalCashInOut;

      reset({
        startingCashAmount: startingCashAmount,
        totalCashPayments: accumulatedGrossSales.toFixed(2),
        totalCashRefunds: accumulatedCashRefunds.toFixed(2),
        totalPaidIn: totalPayInForActiveShift.toFixed(2),
        totalPaidOut: totalPayOutForActiveShift.toFixed(2),
        expectedCashBalance: accumulatedExpectedCashAmount.toFixed(2),
        actualCashBalance: accumulatedExpectedCashAmount.toFixed(2),
        cashDifference: "",
        totalGrossSales: accumulatedGrossSales.toFixed(2),
        totalRefundAmount: accumulatedCashRefunds.toFixed(2),
        totalNetSales: accumulatedNetSales.toFixed(2),
        totalCash: accumulatedNetSales.toFixed(2),
        actualCashAmount: accumulatedExpectedCashAmount.toFixed(2),
      });
    }
  }, [isOpen, reset]);

  const handleOnCloseShift = (data: FormValuesCloseShift) => {
    // const actualCashAmount = watch("actualCashAmount");

    const activeShift = shiftList.find(
      (shift) => shift.id === currentActiveShiftId && !shift.isShiftClosed
    );

    if (!activeShift) {
      console.log("No active shift found or the shift is already closed.");
      return;
    }

    const updatedData = {
      ...data,
      actualCashAmount: parseFloat(data.actualCashAmount).toFixed(2),
    } as FormValuesCloseShift;

    dispatch(
      shiftActions.closeShift({
        id: activeShift.id,
        data: updatedData,
      })
    );

    onClose();
  };

  const handleOnBlurActualCashAmount = (
    _event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    field: ControllerRenderProps<FormValuesCloseShift, "actualCashAmount">
  ) => {
    // naay bug, if e clear ang input inig click outside sa input,
    // wlay value ang input na "₱0.00" , mao nlng ni ang pamaagi na ako gibuhat

    const actualCashAmount = getValues("actualCashAmount") || " ";
    field.onChange(actualCashAmount);
  };

  const handleOnChangeActualCashAmount = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: ControllerRenderProps<FormValuesCloseShift, "actualCashAmount">
  ) => {
    const actualCashAmount = event.target.value;
    const expectedCashAmount = getValues("actualCashBalance");

    const validatedAmount = parseFloat(actualCashAmount) || 0;

    const calculatedDifference = parseFloat(actualCashAmount) - parseFloat(expectedCashAmount);

    setValue("cashDifference", calculatedDifference.toFixed(2));

    field.onChange(validatedAmount);
  };

  const watchExpectedCashAmount = watch("actualCashBalance");

  const watchCashDifference = watch("cashDifference");

  const formattedDifferenceAmount = formatToPesos(watchCashDifference);

  const formattedExpectedAmount = formatToPesos(watchExpectedCashAmount);

  return (
    <DialogStyled open={isOpen} fullWidth maxWidth="sm" fullScreen={isMobile}>
      <Toolbar>
        <ButtonClose onClick={onClose}>
          <CloseIcon />
        </ButtonClose>

        <DialogTitleText variant="h6" component="h6">
          Close Shift
        </DialogTitleText>
      </Toolbar>

      <Divider />

      <Container maxWidth={false}>
        <List>
          <ListItemDetail secondary={formattedExpectedAmount}>Expected cash amount</ListItemDetail>
          <ListItemDetail
            secondaryAction={
              <Controller
                name="actualCashAmount"
                control={control}
                rules={validationRules.amount}
                render={({ field }) => (
                  <InputField
                    formControlProps={{
                      sx: (theme) => ({ maxWidth: theme.spacing(14), marginTop: 0 }),
                    }}
                    inputProps={{
                      ...field,
                      inputComponent: PesosInputField as any,
                      onBlur: (event) => handleOnBlurActualCashAmount(event, field),
                      onChange: (event) => handleOnChangeActualCashAmount(event, field),
                      sx: () => ({
                        "& .MuiInput-input": { textAlign: "right" },
                        "&.MuiInput-root": { marginTop: 0 },
                      }),
                    }}
                    helperText={errors.actualCashAmount?.message}
                    isShowHelperText={!!errors.actualCashAmount?.message}
                  />
                )}
              />
            }
          >
            Actual cash amount
          </ListItemDetail>
          <ListItemDetail secondary={formattedDifferenceAmount} primaryHighlight secondaryHighlight>
            Difference
          </ListItemDetail>
        </List>

        <OutlinedButton onClick={handleSubmit(handleOnCloseShift)}>CLOSE SHIFT</OutlinedButton>
      </Container>
    </DialogStyled>
  );
};

export default DialogCloseShift;
