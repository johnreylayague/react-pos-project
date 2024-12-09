import {
  FormControlLabel,
  FormControlLabelProps,
  FormControl,
  RadioGroup,
  Radio,
  styled,
  Theme,
} from "@mui/material";
import React from "react";

const FormControlLabelStyled = styled(FormControlLabel)<FormControlLabelProps>(
  ({ theme }: { theme: Theme }) => ({
    "&.MuiFormControlLabel-root": { marginRight: theme.spacing(4) },
  })
);

type RepresentationSelectorProps = {
  isBelowSmallScreen: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue: string;
};
const RepresentationSelector: React.FC<RepresentationSelectorProps> = (props) => {
  const { onChange, isBelowSmallScreen, defaultValue } = props;

  return (
    <FormControl>
      <RadioGroup
        row={!isBelowSmallScreen}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={onChange}
        defaultValue={defaultValue}
      >
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
