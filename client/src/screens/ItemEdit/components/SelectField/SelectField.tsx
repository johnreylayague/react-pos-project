import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemIcon,
  ListItemText,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { DividerStyled } from "./SelectFieldStyles";
import { Add as AddIcon } from "@mui/icons-material";
import CloneElement from "../CloneElement/CloneElement";

type SelectFieldProps = {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  wrapperComponent?: React.ReactNode;
};
const SelectField: React.FC<SelectFieldProps> = (props) => {
  const { onChange, value, wrapperComponent } = props;

  const content = (
    <FormControl variant="standard" fullWidth>
      <InputLabel shrink id="demo-simple-select-helper-label" color="success">
        Category
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select"
        value={value}
        label="category"
        onChange={onChange}
        color="success"
        displayEmpty
        MenuProps={{
          PaperProps: { style: { borderRadius: 0 } },
          anchorOrigin: { vertical: "top", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" },
        }}
      >
        <MenuItem value={""}>No category</MenuItem>
        <MenuItem value={"10"}>Ten</MenuItem>
        <MenuItem value={"20"}>Twenty</MenuItem>
        <DividerStyled component="li" />
        <MenuItem value={"30"}>
          <ListItemIcon sx={(_theme) => ({ "&.MuiListItemIcon-root": { minWidth: 22 } })}>
            <AddIcon sx={{ color: "#000", fontSize: 16 }} />
          </ListItemIcon>
          <ListItemText>Add Category</ListItemText>
        </MenuItem>
      </Select>
      <FormHelperText hidden>Without label</FormHelperText>
    </FormControl>
  );

  if (wrapperComponent) {
    return <CloneElement baseElement={wrapperComponent} children={content} />;
  }

  return content;
};

export default SelectField;
