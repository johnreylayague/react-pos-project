export type FormValuesCharge = {
  totalAmountDue: string;
  cashReceived: string;
};

export const defaultChargeForm: FormValuesCharge = {
  totalAmountDue: "0.00",
  cashReceived: "0.00",
};
