export const computeFieldTotal = (records: { [key: string]: any }[], field: string) => {
  const total = records.reduce((accumulator, item) => {
    const validFieldValue = parseFloat(item[field]) || 0;
    return validFieldValue + accumulator;
  }, 0);

  return total;
};

export const computeTotalFromMultiplication = (
  records: { [key: string]: any }[],
  field1: string,
  field2: string
) => {
  const total = records.reduce((accumulator, item) => {
    const validFieldValue1 = parseFloat(item[field1]) || 0;
    const validFieldValue2 = parseFloat(item[field2]) || 0;
    const calculatePrice = validFieldValue1 * validFieldValue2;
    return accumulator + calculatePrice;
  }, 0);

  return total;
};
