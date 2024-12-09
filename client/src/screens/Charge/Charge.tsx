import { AppBar, Container, Grid2 as Grid, IconButton, Toolbar } from "@mui/material";
import { AmountSummary, ArrowBackIcon, FieldName } from "./ChargeStyles";
import { Link } from "react-router-dom";
import PaymentInput from "./components/PaymentInput/PaymentInput";
import ChargeButton from "./components/ChargeButton/ChargeButton";

const Charge = () => {
  return (
    <>
      <AppBar color="success" position="static">
        <Toolbar>
          <IconButton component={Link} to="/sale" relative={"path"}>
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container>
        <AmountSummary secondary={"Total amount due"}>₱0.02</AmountSummary>

        <FieldName color="success" variant="body2">
          Cash received
        </FieldName>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          <PaymentInput />
          <ChargeButton />
        </Grid>
      </Container>
    </>
  );
};

export default Charge;
