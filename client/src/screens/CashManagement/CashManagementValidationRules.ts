export const validationCashManagementRules = {
  amount: {
    required: "This field cannot be blank",
    maxLength: { value: 50, message: "Amount cannot exceed 50 characters." },
  },
  comment: {
    maxLength: { value: 250, message: "Comment cannot exceed 250 characters." },
  },
};
