import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  category: number;
};

export default function BasicSelect() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      category: 20,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data); // Handle form data
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="filled">
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Controller
          name="category"
          control={control}
          rules={{
            required: "Category is required.",
          }}
          render={({ field }) => (
            <Select
              {...field}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      {errors.category && <p style={{ color: "red" }}>{errors.category.message}</p>}
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </Box>
  );
}
