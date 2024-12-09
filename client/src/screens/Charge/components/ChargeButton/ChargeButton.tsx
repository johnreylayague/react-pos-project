import { Grid2 as Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { PaymentsButtonIcon, ButtonBaseStyled } from "./ChargeButtonStyles";

const ChargeButton = () => {
  return (
    <Grid size={{ xs: 12, md: 4, lg: 3 }}>
      <ButtonBaseStyled component={Link} to="/ticket/pay" relative="path">
        <PaymentsButtonIcon />
        CHARGE
      </ButtonBaseStyled>
    </Grid>
  );
};

export default ChargeButton;
