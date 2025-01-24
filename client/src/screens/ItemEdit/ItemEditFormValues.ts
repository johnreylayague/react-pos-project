export type FormValuesItem = {
  id: number | string;
  name: string;
  categoryId: number | string;
  soldby: string;
  price: string;
  cost: string;
  sku: string;
  barcode: string;
  trackstock: boolean;
  representation: "colorAndShape" | "image";
  image: string;
  colorAndShapeImage: string;
  colorId: number | string;
  shapeId: number | string;
  instock: number;
};

export type FormValuesCategory = {
  name: string;
  colorId: string | number;
};

export const categoryCreate: FormValuesCategory = {
  name: "",
  colorId: "",
};

export const itemEdit: FormValuesItem = {
  id: "",
  name: "",
  categoryId: "",
  soldby: "each",
  price: "0",
  cost: "0",
  sku: "",
  barcode: "",
  trackstock: false,
  instock: 0,
  colorAndShapeImage: "",
  representation: "colorAndShape",
  colorId: "",
  shapeId: "",
  image: "",
};
