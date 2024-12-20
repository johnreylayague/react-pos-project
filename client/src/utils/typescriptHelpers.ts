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
