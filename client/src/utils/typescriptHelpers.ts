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
  return typeof value === targetType ? parseFloat(value) : value;
};

type convertToParseFloatToFixedProps = (value: any) => number;
export const convertToParseFloatToFixed: convertToParseFloatToFixedProps = (value) => {
  return typeof value === "string" ? parseFloat(value).toFixed(2) : value;
};
