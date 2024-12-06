export const useCategoryActions = () => {
  const handleDeleteCategory = () => {
    console.log("Category deleted");
  };

  return { handleDeleteCategory };
};
