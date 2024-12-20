export const validationItemRules = {
  name: {
    required: "Name is required.",
    minLength: { value: 5, message: "Name must be at least 5 characters long." },
    maxLength: { value: 50, message: "Name cannot exceed 50 characters." },
  },
  category: {},
  soldby: { required: "Soldby is required." },
  price: { required: "Price is required." },
  cost: { required: "Cost is required." },
  sku: {
    // required: "SKU is required.",
    maxLength: { value: 50, message: "SKU cannot exceed 50 characters." },
  },
  barcode: {
    // required: "Barcode is required.",
    maxLength: { value: 50, message: "Barcode cannot exceed 50 characters." },
  },
  instock: {
    required: "Instock is required.",
    maxLength: { value: 50, message: "Instock cannot exceed 50 characters." },
  },
};

export const validationCategoryRules = {
  name: {
    required: "This field connot be blank",
    maxLength: { value: 50, message: "Category name cannot exceed 50 characters." },
  },
};
