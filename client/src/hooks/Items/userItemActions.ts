export const useItemActions = () => {
  const handleDeleteItem = () => {
    console.log("Item deleted");
  };

  return { handleDeleteItem };
};
