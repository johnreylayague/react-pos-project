import {
  FormControlLabel,
  FormControlLabelProps,
  FormControl,
  RadioGroup,
  Radio,
  styled,
  Theme,
  RadioGroupProps,
} from "@mui/material";
import React from "react";

const FormControlLabelStyled = styled(FormControlLabel)<FormControlLabelProps>(
  ({ theme }: { theme: Theme }) => ({
    "&.MuiFormControlLabel-root": { marginRight: theme.spacing(4) },
  })
);

type RepresentationSelectorProps = {
  isBelowSmallScreen: boolean;
  radioGroupProps: RadioGroupProps;
};
const RepresentationSelector: React.FC<RepresentationSelectorProps> = (props) => {
  const { isBelowSmallScreen, radioGroupProps } = props;

  return (
    <FormControl>
      <RadioGroup row={!isBelowSmallScreen} {...radioGroupProps}>
        <FormControlLabelStyled
          value="colorAndShape"
          control={<Radio color="success" />}
          label="Color and shape"
        />
        <FormControlLabel value="image" control={<Radio color="success" />} label="Image" />
      </RadioGroup>
    </FormControl>
  );
};

export default RepresentationSelector;
