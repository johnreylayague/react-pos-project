import React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

type NumericInputFieldProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
};

export const NumericInputField = React.forwardRef<NumericFormatProps, NumericInputFieldProps>(
  function NumberFormatter(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        maxLength={3}
        allowNegative={false}
        allowLeadingZeros={false}
        decimalScale={0}
      />
    );
  }
);

export default NumericInputField;
