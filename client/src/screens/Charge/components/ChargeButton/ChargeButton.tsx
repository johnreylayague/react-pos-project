import { Grid2 as Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { PaymentsButtonIcon, ButtonBaseStyled } from "./ChargeButtonStyles";

type ChargeButtonProps = { onSubmit: () => void; disabled: boolean };
const ChargeButton: React.FC<ChargeButtonProps> = (props) => {
  const { onSubmit, disabled } = props;

  return ( 
    <Grid size={{ xs: 12, md: 4, lg: 3 }}>
      <ButtonBaseStyled onClick={onSubmit} disabled={disabled}>
        <PaymentsButtonIcon />
        CHARGE
      </ButtonBaseStyled>
    </Grid>
  );
};

export default ChargeButton;
