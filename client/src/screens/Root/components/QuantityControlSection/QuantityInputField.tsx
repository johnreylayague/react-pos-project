import { NumericFormatProps, NumericFormat } from "react-number-format";
import { InputBaseComponentProps } from "@mui/material";
import { forwardRef } from "react";

const QuantityInputField = forwardRef<HTMLElement, NumericFormatProps & InputBaseComponentProps>(
  function QuantityInputField(props, ref) {
    const { ...other } = props;

    return <NumericFormat {...other} getInputRef={ref} />;
  }
);

export default QuantityInputField;
