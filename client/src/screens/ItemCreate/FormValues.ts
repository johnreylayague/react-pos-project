export type FormValuesItem = {
  name: string;
  categoryId: string | number;
  soldby: string;
  price: string;
  cost: string;
  sku: string;
  barcode: string;
  trackstock: boolean;
  representation: "colorAndShape" | "image";
  image: string;
  colorAndShapeImage: string;
  colorId: number;
  shapeId: number;
  instock: number;
};

export type FormValuesCategory = {
  name: string;
};

export const categoryCreate: FormValuesCategory = {
  name: "",
};

export const itemCreate: FormValuesItem = {
  name: "",
  price: "0",
  categoryId: "",
  soldby: "each",
  cost: "0",
  sku: "",
  barcode: "",
  trackstock: false,
  representation: "colorAndShape",
  colorAndShapeImage: "",
  image: "",
  instock: 0,
  colorId: 1,
  shapeId: 1,
};
