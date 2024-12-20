export const validationCategoryRules = {
  name: {
    required: "This field cannot be blank",
    maxLength: { value: 50, message: "Category name cannot exceed 50 characters." },
  },
};
