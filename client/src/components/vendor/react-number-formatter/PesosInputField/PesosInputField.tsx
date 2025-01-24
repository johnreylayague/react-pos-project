import React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

type PesosInputFieldProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
};

export const PesosInputField = React.forwardRef<NumericFormatProps, PesosInputFieldProps>(
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
        thousandSeparator
        allowNegative={false}
        allowLeadingZeros={false}
        decimalScale={2}
        fixedDecimalScale
        prefix="₱"
        isAllowed={(values) => {
          const { floatValue } = values;
          const MAX_LIMIT = 999999.99;

          return floatValue === undefined || floatValue <= MAX_LIMIT;
        }}
      />
    );
  }
);

export default PesosInputField;
