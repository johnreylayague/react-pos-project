import { FormControl, FormHelperText } from "@mui/material";
import CurrencyInputField from "./CurrencyInputField";
import { InputLabelStyled, InputStyled } from "./PriceInputSectionStyles";

const PriceInputSection = () => {
  return (
    <FormControl fullWidth>
      <InputLabelStyled
        htmlFor="formatted-numberformat-input"
        variant="standard"
        shrink={false}
        focused={false}
        disableAnimation
      >
        Price
      </InputLabelStyled>
      <InputStyled
        defaultValue={"2"}
        name="numberformat"
        id="formatted-numberformat-input"
        inputComponent={CurrencyInputField}
        color="success"
      />
      <FormHelperText id="formatted-numberformat-input" hidden></FormHelperText>
    </FormControl>
  );
};

export default PriceInputSection;
