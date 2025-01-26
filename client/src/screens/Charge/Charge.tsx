import { AppBar, Container, Grid2 as Grid, IconButton, Theme, Toolbar } from "@mui/material";
import { AmountSummary, ArrowBackIcon, FieldName } from "./ChargeStyles";
import { Link, useNavigate } from "react-router-dom";
import PaymentInput from "./components/PaymentInput/PaymentInput";
import ChargeButton from "./components/ChargeButton/ChargeButton";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import { formatToPesos } from "../../utils/format";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import { FormValuesCharge, defaultChargeForm } from "./FormValues";
import { validationChargeRules } from "./ValidationRules";
import InputField from "../../components/common/elements/Input/InputField/InputField";
import PesosInputField from "../../components/vendor/react-number-formatter/PesosInputField/PesosInputField";
import { convertToNumber } from "../../utils/typescriptHelpers";
import { useEffect, useState } from "react";
import { saleActions } from "../../store/sale-slice";

type ChargeProps = {};

const Charge: React.FC<ChargeProps> = () => {
  const {
    handleSubmit,
    control,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormValuesCharge>({
    defaultValues: defaultChargeForm,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const ticket = useSelector((state: storeProps) => state.sale.ticket);

  useEffect(() => {
    const totalPrice = ticket
      .reduce((accumulator, ticket) => {
        accumulator = parseFloat(ticket.accumulatedPrice) + accumulator;
        return accumulator;
      }, 0)
      .toFixed(2);

    // setCash(() => {
    //   const ss = Array.from({ length: 4 }).map((_, index) => {
    //     let val = 0;

    //     if (index === 0) {
    //       val = Math.ceil((totalPrice + 0.1) / 10) * 10;
    //     }
    //     if (index === 1) {
    //       val = Math.ceil((totalPrice + 30) / 10) * 10;
    //     }
    //     if (index === 2) {
    //       val = Math.ceil(totalPrice / 10) * 10 + 130;
    //     }
    //     if (index === 3) {
    //       val = Math.ceil(totalPrice / 10) * 10 + 430;
    //     }

    //     return { id: index, text: val };
    //   });
    //   console.log(ss);

    //   return ss;
    // });

    reset({ cashReceived: totalPrice, totalAmountDue: totalPrice });

    return () => {};
  }, []);

  const handleOnSubmit = (data: FormValuesCharge) => {
    dispatch(saleActions.updateChange(data));
    navigate("/ticket/pay");
  };

  const handleOnBlurCount = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    field: ControllerRenderProps<FormValuesCharge, "cashReceived">
  ) => {
    const value = event.target.value;

    if (!value) {
      field.onChange(0);
    }
  };

  const handleOnChangeCashReceived = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: ControllerRenderProps<FormValuesCharge, "cashReceived">
  ) => {
    const value = event.target.value;
    const convertedCash = convertToNumber("string", value);
    const validatedCash = isNaN(convertedCash) ? 0 : convertedCash;

    field.onChange(event);

    const isSufficientCash = parseFloat(getValues("totalAmountDue")) > validatedCash ? true : false;

    setIsDisabled(isSufficientCash);
  };

  // const handleOnChargeSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const dataCashReceived = event.currentTarget.getAttribute("data-cash-received");

  //   if (!dataCashReceived) {
  //     // error message here
  //     return;
  //   }

  //   const convertedDataCashReceived = convertToNumber("string", dataCashReceived);

  //   const isSufficientCash = getValues("totalAmountDue") > convertedDataCashReceived ? true : false;
  //   // console.log(
  //   //   `${getValues("totalAmountDue")} > ${convertedDataCashReceived} = ${isSufficientCash}`
  //   // );

  //   if (isSufficientCash) {
  //     return;
  //   }

  //   await trigger();

  //   const totalAmountDue = getValues("totalAmountDue");

  //   const formData: FormValuesCharge = {
  //     cashReceived: convertedDataCashReceived,
  //     totalAmountDue: totalAmountDue,
  //   };

  //   dispatch(saleActions.updateChange(formData));
  //   navigate("/ticket/pay");
  // };

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
        <AmountSummary secondary={"Total amount due"}>
          {formatToPesos(watch("totalAmountDue"))}
        </AmountSummary>

        <FieldName color="success" variant="body2">
          Cash received
        </FieldName>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          <PaymentInput>
            <Controller
              name="cashReceived"
              control={control}
              rules={validationChargeRules.cashReceived}
              render={({ field }) => (
                <InputField
                  inputProps={{
                    ...field,
                    inputComponent: PesosInputField as any,
                    sx: (theme: Theme) => ({
                      "& .MuiInput-input": { height: theme.spacing(6) },
                      "&.MuiInput-root": { marginTop: 0 },
                    }),
                    onChange: (event) => handleOnChangeCashReceived(event, field),
                    onBlur: (event) => handleOnBlurCount(event, field),
                  }}
                  helperText={errors.cashReceived?.message}
                  isShowHelperText={!!errors.cashReceived?.message}
                />
              )}
            />
          </PaymentInput>
          <ChargeButton disabled={isDisabled} onSubmit={handleSubmit(handleOnSubmit)} />
        </Grid>

        {/* <Grid 
          container
          spacing={{ xs: 2, md: 3 }}
          sx={(theme) => ({ marginTop: theme.spacing(2.5) })}
        >
          {cash.map((item) => {
            return (
              <Grid key={item.id} size={{ xs: 12, md: 4, lg: 3 }}>
                <ButtonBase
                  sx={(theme) => ({
                    ...theme.typography.body1,
                    border: `1px solid ${theme.palette.divider}`,
                    padding: `${theme.spacing(2)}`,
                    backgroundColor: "#f5f5f5",
                    fontWeight: "bold",
                    borderRadius: theme.spacing(0.5),
                    width: "100%",
                    minHeight: 58,
                  })}
                  data-cash-received={item.text}
                  onClick={handleOnChargeSubmit}
                >
                  {formatToPesos(item.text)}
                </ButtonBase>
              </Grid>
            );
          })}
        </Grid> */}
      </Container>
    </>
  );
};

export default Charge;
