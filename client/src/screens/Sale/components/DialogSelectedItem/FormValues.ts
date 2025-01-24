export type FormValuesSelectedItem = {
  id: number | string;
  name: string;
  count: number | string;
  price: string;
  accumulatedPrice: string;
  comment: string;
  instock: number | string;
  trackstock: boolean | string;
};

export const selectedItem: FormValuesSelectedItem = {
  id: "",
  name: "",
  count: "",
  price: "",
  accumulatedPrice: "",
  comment: "",
  instock: "",
  trackstock: "",
};
