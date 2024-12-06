import { Box, Stack, FormControl, FormHelperText } from "@mui/material";
import {
  ButtonQuantityStyled,
  InputStyled,
  TypographyStyled,
} from "./QuantityControlSectionStyles";
import { Remove as RemoveIcon, Add as AddIcon } from "@mui/icons-material";
import QuantityInputField from "./QuantityInputField";

function QuantityControlSection() {
  return (
    <Box>
      <TypographyStyled component="label">Quantity</TypographyStyled>
      <Stack direction="row" spacing={2}>
        <ButtonQuantityStyled variant="text">
          <RemoveIcon fontSize="medium" color="action" />
        </ButtonQuantityStyled>
        <FormControl fullWidth>
          <InputStyled
            id="quality-control-input"
            aria-describedby="quality-control-input"
            color="success"
            defaultValue="1"
            slotProps={{ input: { style: { textAlign: "center" } } }}
            inputComponent={QuantityInputField}
          />
          <FormHelperText id="quality-control-input" hidden></FormHelperText>
        </FormControl>
        <ButtonQuantityStyled variant="text">
          <AddIcon fontSize="medium" color="action" />
        </ButtonQuantityStyled>
      </Stack>
    </Box>
  );
}

export default QuantityControlSection;
