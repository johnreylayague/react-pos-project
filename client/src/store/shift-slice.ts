import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormValuesCloseShift } from "../screens/Shift/components/DialogCloseShift/DialogCloseShift";
import { FormValuesCashManagement } from "../screens/CashManagement/CashManagement";
import { convertToNumber, convertToParseFloatToFixed } from "../utils/typescriptHelpers";

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
  id: number;
  shiftNumber: number;
  salesDevice: string;
  openedBy: string;
  closedBy: string;
  openedAt: string;
  closedAt: string;
  startingCashAmount: string;
  totalCashPayments: string;
  totalCashRefunds: string;
  totalPaidIn: string | number;
  totalPaidOut: string | number;
  expectedCashBalance: string;
  actualCashBalance: string;
  cashDifference: string;
  totalGrossSales: string;
  totalRefundAmount: string;
  totalNetSales: string;
  totalCash: string;
  isShiftClosed: boolean;
  actualCashAmount: string;
}

export interface shiftDetailsProps {
  id: number;
  shiftNumber: number;
  salesDevice: string;
  openedBy: string;
  closedBy: string;
  openedAt: string;
  closedAt: string;
  startingCashAmount: number;
  totalCashPayments: number;
  totalCashRefunds: number;
  totalPaidIn: number;
  totalPaidOut: number;
  expectedCashBalance: number;
  actualCashBalance: number;
  cashDifference: number;
  totalGrossSales: number;
  totalRefundAmount: number;
  totalNetSales: number;
  totalCash: number;
  isShiftClosed: boolean;
}

export type initialShiftState = {
  currentActiveShiftId: number | null;
  selectedReportShiftId: number | null;
  shiftList: shiftProps[];
  cashManagementList: cashManagementListProps[];
  shiftDetails: shiftDetailsProps;
};

const shiftSlice = createSlice({
  name: "shift",
  initialState: {
    currentActiveShiftId: null,
    selectedReportShiftId: null,
    shiftList: [
      {
        id: 2257221,
        shiftNumber: 4,
        salesDevice: "POS 4",
        openedBy: "Owner",
        closedBy: "Owner",
        openedAt: "2024-11-19T05:32:03.449Z",
        closedAt: "2024-12-19T05:55:03.449Z",
        startingCashAmount: "12.00",
        totalCashPayments: "",
        totalCashRefunds: "",
        totalPaidIn: "",
        totalPaidOut: "",
        expectedCashBalance: "",
        actualCashBalance: "",
        cashDifference: "",
        totalGrossSales: "",
        totalRefundAmount: "",
        totalNetSales: "",
        totalCash: "",
        actualCashAmount: "",
        isShiftClosed: true,
      },
    ],
    cashManagementList: [
      {
        id: 1,
        shiftId: 2257221,
        payType: "PayIn",
        payDate: "2024-11-19T05:32:03.449Z",
        shiftOpened: "Owner",
        cashPayment: "10.00",
        comment: "Sample comment",
      },
      {
        id: 2,
        shiftId: 2257221,
        payType: "PaidOut",
        payDate: "2024-11-19T05:32:03.449Z",
        shiftOpened: "Owner",
        cashPayment: "5.00",
        comment: "Sample comment",
      },
    ],
  } as initialShiftState,
  reducers: {
    payOut: (state, action: PayloadAction<FormValuesCashManagement>) => {
      const { amount, comment } = action.payload;

      const dateToday = new Date();

      const generatedId = Math.floor(Math.random() * 10000000);

      const convertedAmount = parseFloat(amount).toFixed(2);

      if (!state.currentActiveShiftId) {
        console.log("'id' is not defined or is invalid.");
        return;
      }

      const newCashManagement: cashManagementListProps = {
        id: generatedId,
        shiftId: state.currentActiveShiftId,
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

      const generatedId = Math.floor(Math.random() * 10000000);

      if (!state.currentActiveShiftId) {
        console.log("'currentActiveShiftId' is not defined or is invalid.");
        return;
      }

      const newCashManagement: cashManagementListProps = {
        id: generatedId,
        shiftId: state.currentActiveShiftId,
        cashPayment: amount,
        comment: comment,
        payDate: dateToday.toISOString(),
        shiftOpened: "Owner",
        payType: "PayIn",
      };

      state.cashManagementList.push(newCashManagement);
    },
    setSelectedShiftId: (state, action: PayloadAction<number>) => {
      state.selectedReportShiftId = action.payload;
    },
    openShift: (state, action: PayloadAction<{ amount: string }>) => {
      const { amount } = action.payload;

      const dateToday = new Date();

      const newShiftId = state.shiftList.length + 1;

      const generatedId = Math.floor(Math.random() * 10000000);

      const newShiftData: shiftProps = {
        id: generatedId,
        shiftNumber: newShiftId,
        salesDevice: `POS ${newShiftId}`,
        openedBy: "Owner",
        closedBy: "Owner",
        openedAt: dateToday.toISOString(),
        closedAt: "",
        startingCashAmount: amount,
        totalCashPayments: "",
        totalCashRefunds: "",
        totalPaidIn: "",
        totalPaidOut: "",
        expectedCashBalance: "",
        actualCashBalance: "",
        cashDifference: "",
        totalGrossSales: "",
        totalRefundAmount: "",
        totalNetSales: "",
        totalCash: "",
        actualCashAmount: "",
        isShiftClosed: false,
      };

      state.shiftList.push(newShiftData);
      state.currentActiveShiftId = generatedId;
    },
    closeShift: (state, action: PayloadAction<{ id: number; data: FormValuesCloseShift }>) => {
      const shiftId = action.payload.id;
      const data = action.payload.data;

      const dateToday = new Date();

      const findIndexShiftById = state.shiftList.findIndex((shift) => shift.id === shiftId);

      if (findIndexShiftById === -1) {
        console.log("Connot find ShiftList Id!");
        return;
      }

      if (findIndexShiftById > -1) {
        state.shiftList[findIndexShiftById] = {
          ...state.shiftList[findIndexShiftById],
          ...data,
          closedAt: dateToday.toISOString(),
          isShiftClosed: true,
        };
      }

      state.currentActiveShiftId = null;
    },
  },
});

export const shiftActions = shiftSlice.actions;

export default shiftSlice;
