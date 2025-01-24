import React from "react";
import { Grid2 as Grid } from "@mui/material";
import { PaymentsIcon, PaymentWrapper } from "./PaymentInputStyles.ts";

type PaymentInputProps = {
  children: React.ReactNode;
};
const PaymentInput: React.FC<PaymentInputProps> = (props) => {
  const { children } = props;

  return (
    <Grid size={{ xs: 12, md: 8, lg: 9 }}>
      <PaymentWrapper>
        <PaymentsIcon />
        {children}
      </PaymentWrapper>
    </Grid>
  );
};

export default PaymentInput;
