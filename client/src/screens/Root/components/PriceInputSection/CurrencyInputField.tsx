import { InputBaseComponentProps } from "@mui/material";
import { NumericFormatProps, NumericFormat } from "react-number-format";
import { forwardRef } from "react";

const CurrencyInputField = forwardRef<HTMLElement, NumericFormatProps & InputBaseComponentProps>(
  function CurrencyInputField(props, ref) {
    const { ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        decimalScale={2}
        fixedDecimalScale
        thousandSeparator=","
        valueIsNumericString
        prefix="₱"
      />
    );
  }
);

export default CurrencyInputField;
