export const validationItemRules = {
  name: {
    required: "This field cannot be blank",
    minLength: { value: 5, message: "This field must be at least 5 characters long." },
    maxLength: { value: 50, message: "This field cannot exceed 50 characters." },
  },
  category: {},
  soldby: { required: "This field cannot be blank" },
  price: { required: "This field cannot be blank" },
  cost: { required: "This field cannot be blank" },
  sku: {
    // required: "SKU is required.",
    maxLength: { value: 50, message: "This field  cannot exceed 50 characters." },
  },
  barcode: {
    // required: "Barcode is required.",
    maxLength: { value: 50, message: "This field  cannot exceed 50 characters." },
  },
  instock: {
    required: "This field  is required.",
    maxLength: { value: 50, message: "This field  cannot exceed 50 characters." },
  },
};

export const validationCategoryRules = {
  name: {
    required: "This field cannot be blank",
    maxLength: { value: 50, message: "This field cannot exceed 50 characters" },
  },
};
