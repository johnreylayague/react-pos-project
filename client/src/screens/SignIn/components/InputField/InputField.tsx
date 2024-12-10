import { FormControl, FormHelperText, InputLabel, Input } from "@mui/material";

function InputField({}) {
  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="component-error">Email</InputLabel>
      <Input id="component-error" defaultValue="" aria-describedby="component-error-text" />
      <FormHelperText id="component-error-text" hidden>
        This field cannot be blank
      </FormHelperText>
    </FormControl>
  );
}

export default InputField;
