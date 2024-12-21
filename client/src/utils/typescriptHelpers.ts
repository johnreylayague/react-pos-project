type typeofProps =
  | "bigint"
  | "boolean"
  | "function"
  | "number"
  | "object"
  | "string"
  | "symbol"
  | "undefined";

export const convertToType = (targetType: typeofProps, value: any, newValue?: any) => {
  return typeof value === targetType ? newValue : value;
};

type convertToNumberProps = (targetType: typeofProps, value: any) => number;
export const convertToNumber: convertToNumberProps = (targetType, value) => {
  return typeof value === targetType ? Number.parseFloat(value) : value;
};
