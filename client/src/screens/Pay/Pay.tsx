import { ArrowBack as ArrowBackIcon, Check as CheckIcon } from "@mui/icons-material";
import { AppBar, Button, Container, Divider, IconButton, Toolbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Change, NewSaleButton, StackStyled, TotalPaid } from "./PayStyles";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import { formatToPesos } from "../../utils/format";
import { saleActions } from "../../store/sale-slice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export type FormValuesSale = {
  shiftId: number | null;
};

type PayProps = {};
const Pay: React.FC<PayProps> = (props) => {
  const {} = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ticket = useSelector((state: storeProps) => state.sale.ticket);
  const currentActiveShiftId = useSelector((state: storeProps) => state.shift.currentActiveShiftId);
  const calculatedChange = useSelector((state: storeProps) => state.sale.calculatedChange);

  const { handleSubmit, reset } = useForm<FormValuesSale>();

  useEffect(() => {
    reset({
      shiftId: currentActiveShiftId,
    });
  }, []);

  const totalPrice = ticket.reduce((accumulator, ticket) => {
    accumulator = parseFloat(ticket.accumulatedPrice) + accumulator;
    return accumulator;
  }, 0);

  const formattedTotalPrice = formatToPesos(totalPrice);

  const formattedCalculatedChange = formatToPesos(calculatedChange);

  const handleNewSale = (data: FormValuesSale) => {
    dispatch(saleActions.handleNewSale(data));
    navigate("/sale");
  };

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
            <TotalPaid secondary={"Total paid"}>{formattedTotalPrice}</TotalPaid>
          </div>

          <div>
            <Change secondary={"Change"}>{formattedCalculatedChange}</Change>
          </div>
        </StackStyled>

        <NewSaleButton
          onClick={handleSubmit(handleNewSale)}
          disableElevation
          startIcon={<CheckIcon />}
        >
          NEW SALE
        </NewSaleButton>

        <Button></Button>
      </Container>
    </>
  );
};

export default Pay;
