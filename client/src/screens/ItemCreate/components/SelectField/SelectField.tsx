import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  FormHelperText,
  SelectProps,
} from "@mui/material";
import React from "react";
import { ListItemIconStyled, AddIcon } from "./SelectFieldStyles";
import CloneElement from "../CloneElement/CloneElement";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";

type SelectFieldProps = {
  wrapperComponent?: React.ReactNode;
  selectProps?: SelectProps;
};
const SelectField: React.FC<SelectFieldProps> = (props) => {
  const { selectProps, wrapperComponent } = props;

  const categoryList = useSelector((state: storeProps) => state.category.categoryList);

  const content = (
    <FormControl variant="standard" fullWidth>
      <InputLabel shrink id="demo-simple-select-helper-label" color="success">
        Category
      </InputLabel>
      <Select
        {...selectProps}
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select"
        label="category"
        color="success"
        displayEmpty
        MenuProps={{
          PaperProps: { style: { borderRadius: 0 } },
          anchorOrigin: { vertical: "top", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" },
        }}
      >
        <MenuItem value={""}>No category</MenuItem>
        {categoryList.map((category) => {
          return (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          );
        })}
        <MenuItem value={"addCategory"}>
          <ListItemIconStyled>
            <AddIcon />
          </ListItemIconStyled>
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
