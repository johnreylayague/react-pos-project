import React from "react";
import { FormControl, FormHelperText, Grid2 as Grid } from "@mui/material";
import { PaymentsIcon, InputStyled, PaymentWrapper } from "./PaymentInputStyles.ts";

type PaymentInputProps = {};
const PaymentInput: React.FC<PaymentInputProps> = (props) => {
  const {} = props;

  return (
    <Grid size={{ xs: 12, md: 8, lg: 9 }}>
      <PaymentWrapper>
        <PaymentsIcon />

        <FormControl color="success" variant="standard" fullWidth>
          <InputStyled
            color="success"
            id="my-input"
            aria-describedby="my-helper-text"
            value={"₱0.02"}
          />

          <FormHelperText id="my-helper-text" hidden>
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </PaymentWrapper>
    </Grid>
  );
};

export default PaymentInput;
