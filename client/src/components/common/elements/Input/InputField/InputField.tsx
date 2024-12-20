import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  InputProps,
  InputLabelProps,
  FormControlProps,
  FormHelperTextProps,
} from "@mui/material";
import React from "react";
import CloneElement from "../../CloneElement/CloneElement";

type InputFieldProps = {
  label?: string;
  helperText?: string;
  isShowHelperText?: boolean;
  formControlProps?: FormControlProps;
  inputLabelProps?: InputLabelProps;
  inputProps?: InputProps;
  formHelperTextProps?: FormHelperTextProps;
  wrapperComponent?: React.ReactNode;
};

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    label,
    helperText = "",
    isShowHelperText = false,
    inputProps,
    formControlProps,
    formHelperTextProps,
    inputLabelProps,
    wrapperComponent,
  } = props;

  const color = isShowHelperText ? "error" : "success";

  const content = (
    <FormControl color={color} variant="standard" fullWidth {...formControlProps}>
      <InputLabel color={color} {...inputLabelProps}>
        {label}
      </InputLabel>
      <Input color={color} {...inputProps} />
      <FormHelperText error hidden={!isShowHelperText} {...formHelperTextProps}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );

  if (wrapperComponent) {
    return <CloneElement baseElement={wrapperComponent} children={content} />;
  }

  return content;
};

export default InputField;
