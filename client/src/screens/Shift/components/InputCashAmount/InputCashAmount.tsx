import React from "react";
import NumberFormatter from "../NumberFormatter/NumberFormatter";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  styled,
  Theme,
  InputProps,
  FormControlProps,
} from "@mui/material";

const InputStyled = styled(Input)<InputProps>(({ theme }: { theme: Theme }) => ({
  "& .MuiInput-input": { textAlign: "right" },
  "&.MuiInput-root": { marginTop: 0 },
}));

const FormControlStyled = styled(FormControl)<FormControlProps>(({ theme }: { theme: Theme }) => ({
  maxWidth: theme.spacing(12),
}));

type InputCashAmountProps = {
  label?: string;
  isShowHelperText?: boolean;
  helperText?: string;
  value: number;
};
const InputCashAmount: React.FC<InputCashAmountProps> = (props) => {
  const { helperText, isShowHelperText, label, value } = props;

  return (
    <FormControlStyled variant="standard" fullWidth>
      <InputLabel color="success">{label}</InputLabel>
      <InputStyled
        aria-describedby="actual-cash-amount-helper-text"
        color="success"
        inputComponent={NumberFormatter as any}
        value={value}
      />
      <FormHelperText id="actual-cash-amount-helper-text" hidden={!isShowHelperText}>
        {helperText}
      </FormHelperText>
    </FormControlStyled>
  );
};

export default InputCashAmount;
