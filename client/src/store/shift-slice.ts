import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormValuesCloseShift } from "../screens/Shift/components/DialogCloseShift/DialogCloseShift";
import { FormValuesCashManagement } from "../screens/CashManagement/CashManagement";

const defaultCurrentActiveShift = {
  id: "",
  shiftNumber: "",
  shiftOpened: "",
  shiftStartDate: "",
  shiftEndDate: "",
  startingCash: "",
  cashPayments: "",
  cashRefunds: "",
  paidIn: "",
  paidOut: "",
  expectedCashAmount: "",
  actualCashAmount: "",
  grossSales: "",
  refunds: "",
  discounts: "",
  difference: "",
  netSales: "",
  isShiftCompleted: "",
};

export interface cashManagementListProps {
  id: number | string;
  payDate: Date | string;
  shiftId: string | number;
  shiftOpened: string;
  cashPayment: number | string;
  comment: string;
  payType: "PayIn" | "PayOut";
}

export interface shiftProps {
  id: number | string;
  shiftNumber: number | string;
  shiftOpened: string;
  shiftStartDate: Date | string;
  shiftEndDate: Date | string;
  startingCash: string;
  cashPayments: string;
  cashRefunds: string;
  paidIn: string;
  paidOut: string;
  expectedCashAmount: string;
  grossSales: string;
  refunds: string;
  discounts: string;
  difference: string;
  netSales: string;
  actualCashAmount: string;
  isShiftCompleted: boolean | string;
}

export type initialShiftState = {
  currentActiveShift: shiftProps;
  selectedShiftReport: shiftProps;
  shiftList: shiftProps[];
  cashManagementList: cashManagementListProps[];
};

const shiftSlice = createSlice({
  name: "shift",
  initialState: {
    currentActiveShift: defaultCurrentActiveShift,
    selectedShiftReport: defaultCurrentActiveShift,
    shiftList: [
      {
        id: 1,
        shiftNumber: "1",
        shiftOpened: "Owner",
        shiftStartDate: "2024-11-19T05:32:03.449Z",
        shiftEndDate: "2024-12-19T05:55:03.449Z",
        startingCash: "12.00",
        cashPayments: "",
        cashRefunds: "",
        paidIn: "",
        paidOut: "",
        expectedCashAmount: "",
        actualCashAmount: "",
        grossSales: "",
        refunds: "",
        discounts: "",
        difference: "",
        netSales: "",
        isShiftCompleted: true,
      },
      {
        id: 2,
        shiftNumber: "2",
        shiftOpened: "Owner",
        shiftStartDate: "2024-11-19T05:32:03.449Z",
        shiftEndDate: "2024-12-19T05:55:03.449Z",
        startingCash: "12.00",
        cashPayments: "",
        cashRefunds: "",
        paidIn: "",
        paidOut: "",
        expectedCashAmount: "",
        actualCashAmount: "",
        grossSales: "",
        refunds: "",
        discounts: "",
        difference: "",
        netSales: "",
        isShiftCompleted: true,
      },
    ],
    cashManagementList: [
      {
        id: 1,
        shiftId: 1,
        payType: "PayIn",
        payDate: "2024-11-19T05:32:03.449Z",
        shiftOpened: "Owner",
        cashPayment: "10.00",
        comment: "Sample comment",
      },
      {
        id: 2,
        shiftId: 1,
        payType: "PaidOut",
        payDate: "2024-11-19T05:32:03.449Z",
        shiftOpened: "Owner",
        cashPayment: "10.00",
        comment: "Sample comment",
      },
    ],
  } as initialShiftState,
  reducers: {
    payOut: (state, action: PayloadAction<FormValuesCashManagement>) => {
      const { amount, comment } = action.payload;

      const dateToday = new Date();

      const newCashManagementId = state.cashManagementList.length + 1;
      const convertedAmount = (-parseFloat(amount)).toFixed(2);

      const newCashManagement: cashManagementListProps = {
        id: newCashManagementId,
        shiftId: state.currentActiveShift.id,
        cashPayment: convertedAmount,
        comment: comment,
        payDate: dateToday.toISOString(),
        shiftOpened: "Owner",
        payType: "PayOut",
      };

      state.cashManagementList.push(newCashManagement);
    },
    payIn: (state, action: PayloadAction<FormValuesCashManagement>) => {
      const { amount, comment } = action.payload;

      const dateToday = new Date();

      const newCashManagementId = state.cashManagementList.length + 1;

      const newCashManagement: cashManagementListProps = {
        id: newCashManagementId,
        shiftId: state.currentActiveShift.id,
        cashPayment: amount,
        comment: comment,
        payDate: dateToday.toISOString(),
        shiftOpened: "Owner",
        payType: "PayIn",
      };

      state.cashManagementList.push(newCashManagement);
    },
    selected: (state, action: PayloadAction<shiftProps>) => {
      state.selectedShiftReport = action.payload;
    },
    openShift: (state, action: PayloadAction<{ amount: string }>) => {
      const { amount } = action.payload;

      const dateToday = new Date();

      const newShiftId = state.shiftList.length + 1;

      const newShiftData: shiftProps = {
        id: newShiftId,
        shiftNumber: newShiftId,
        shiftOpened: "Owner",
        shiftStartDate: dateToday.toISOString(),
        shiftEndDate: "",
        startingCash: amount,
        cashPayments: "",
        cashRefunds: "",
        paidIn: "",
        paidOut: "",
        expectedCashAmount: "",
        actualCashAmount: "",
        grossSales: "",
        refunds: "",
        discounts: "",
        difference: "",
        netSales: "",
        isShiftCompleted: false,
      };

      state.shiftList.push(newShiftData);
      state.currentActiveShift = newShiftData;
    },
    closeShift: (state, action: PayloadAction<{ id: number; data: FormValuesCloseShift }>) => {
      const shiftId = action.payload.id;
      const { amount } = action.payload.data;

      const dateToday = new Date();

      const findIndexShiftById = state.shiftList.findIndex((shift) => shift.id === shiftId);

      const findPayInByShiftId = state.cashManagementList.filter(
        (cashManagement) => cashManagement.shiftId === shiftId && cashManagement.payType === "PayIn"
      );

      const findPayOutByShiftId = state.cashManagementList.filter(
        (cashManagement) =>
          cashManagement.shiftId === shiftId && cashManagement.payType === "PayOut"
      );

      if (!findPayInByShiftId) {
        console.log("findPayInByShiftId no result found!");
        return;
      }

      if (!findPayOutByShiftId) {
        console.log("findPayOutByShiftId no result found!");
        return;
      }

      if (findIndexShiftById === -1) {
        console.log("Connot find ShiftList Id!");
        return;
      }

      if (findIndexShiftById > -1) {
        const totalPayInAmount = findPayInByShiftId.reduce((total, payment) => {
          const convertedCashPayment =
            typeof payment.cashPayment === "string"
              ? parseFloat(payment.cashPayment)
              : payment.cashPayment;

          return total + convertedCashPayment;
        }, 0);

        const totalPayOutAmount = findPayOutByShiftId.reduce((total, payment) => {
          const convertedCashPayment =
            typeof payment.cashPayment === "string"
              ? parseFloat(payment.cashPayment)
              : payment.cashPayment;

          return total + convertedCashPayment;
        }, 0);

        const formattedTotalPayIn = totalPayInAmount.toFixed(2);
        const formattedTotalPayOut = totalPayOutAmount.toFixed(2);

        state.shiftList[findIndexShiftById] = {
          ...state.shiftList[findIndexShiftById],
          shiftEndDate: dateToday.toISOString(),
          actualCashAmount: amount,
          isShiftCompleted: true,
          paidIn: formattedTotalPayIn,
          paidOut: formattedTotalPayOut,
        };
      }

      state.currentActiveShift = defaultCurrentActiveShift;
    },
  },
});

export const shiftActions = shiftSlice.actions;

export default shiftSlice;
