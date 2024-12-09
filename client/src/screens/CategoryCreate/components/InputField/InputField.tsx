import { FormControl, InputLabel, FormHelperText, Input } from "@mui/material";
import React from "react";

type InputFieldProps = {
  labelText: string;
  errorText: string;
  isError: boolean;
};
const InputField: React.FC<InputFieldProps> = (props) => {
  const { labelText, errorText, isError } = props;

  return (
    <>
      <FormControl variant="standard" fullWidth>
        <InputLabel color="success">{labelText}</InputLabel>
        <Input aria-describedby="category-name-helper-text" color="success" />
        <FormHelperText id="category-name-helper-text" hidden={!isError}>
          {errorText}
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default InputField;
