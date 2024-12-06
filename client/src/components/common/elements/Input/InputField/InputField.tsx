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

  const content = (
    <FormControl variant="standard" fullWidth {...formControlProps}>
      <InputLabel color="success" {...inputLabelProps}>
        {label}
      </InputLabel>
      <Input aria-describedby="category-name-helper-text" color="success" {...inputProps} />
      <FormHelperText
        id="category-name-helper-text"
        hidden={!isShowHelperText}
        {...formHelperTextProps}
      >
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
