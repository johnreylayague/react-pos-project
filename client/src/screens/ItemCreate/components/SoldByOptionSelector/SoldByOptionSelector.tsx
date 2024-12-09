import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  styled,
  Theme,
  FormControlProps,
  FormLabelProps,
  RadioGroupProps,
} from "@mui/material";
import React from "react";
import CloneElement from "../CloneElement/CloneElement";

const FormControlStyled = styled(FormControl)<FormControlProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "start",
    gap: theme.spacing(1),
  },
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(8),
}));

const FormLabelStyled = styled(FormLabel)<FormLabelProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: { width: "100%", marginRight: 0 },
  color: "rgba(0, 0, 0, 0.87)",
  "&.Mui-focused": {
    color: "inherit",
  },
}));

const RadioGroupStyled = styled(RadioGroup)<RadioGroupProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: { flexDirection: "column", gap: theme.spacing(0) },
  gap: theme.spacing(2),
}));

type SoldByOptionSelectorProps = {
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  wrapperComponent?: React.ReactNode;
};

const SoldByOptionSelector: React.FC<SoldByOptionSelectorProps> = (props) => {
  const { onChange, value, label, wrapperComponent } = props;

  const content = (
    <FormControlStyled fullWidth color="success">
      <FormLabelStyled id="demo-row-radio-buttons-group-label">{label}</FormLabelStyled>
      <RadioGroupStyled
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={onChange}
      >
        <FormControlLabel value="each" control={<Radio color="success" />} label="Each" />
        <FormControlLabel value="weight" control={<Radio color="success" />} label="Weight" />
      </RadioGroupStyled>
    </FormControlStyled>
  );

  if (wrapperComponent) {
    return <CloneElement baseElement={wrapperComponent} children={content} />;
  }

  return <>{content}</>;
};

export default SoldByOptionSelector;
