import { ArrowBack as ArrowBackIcon, Check as CheckIcon } from "@mui/icons-material";
import { AppBar, Button, Container, Divider, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { Change, NewSaleButton, StackStyled, TotalPaid } from "./PayStyles";

const Pay = () => {
  return (
    <>
      <AppBar color="success" position="static">
        <Toolbar>
          <IconButton component={Link} to="/ticket/charge" relative={"path"}>
            <ArrowBackIcon sx={(theme) => ({ color: theme.palette.common.white })} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={(theme) => ({ paddingTop: theme.spacing(3) })}>
        <StackStyled
          spacing={5}
          direction={"row"}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <div>
            <TotalPaid secondary={"Total paid"}>₱0.02</TotalPaid>
          </div>

          <div>
            <Change secondary={"Change"}>₱0.02</Change>
          </div>
        </StackStyled>

        <NewSaleButton to={"/sale"} component={Link} disableElevation startIcon={<CheckIcon />}>
          NEW SALE
        </NewSaleButton>

        <Button></Button>
      </Container>
    </>
  );
};

export default Pay;
