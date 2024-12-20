import { List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./components/Header/Header";
import InputField from "../../components/common/elements/Input/InputField/InputField";
import OutlinedButton from "../../components/common/elements/Button/OutlinedButton/OutlinedButton";
import PesosInputField from "../../components/vendor/react-number-formatter/PesosInputField/PesosInputField";
import {
  BoxStyled,
  ContainerStyled,
  DividerStyled,
  ListSubheaderStyled,
  PaperStyled,
  Comment,
  CashPayment,
  PaymentDate,
  Details,
} from "./CashManagementStyles";
import { Controller, useForm } from "react-hook-form";
import { validationCashManagementRules } from "./CashManagementValidationRules";
import { useDispatch, useSelector } from "react-redux";
import { shiftActions } from "../../store/shift-slice";
import { storeProps } from "../../store";
import { formatStartTime, formatToPesos } from "../../utils/format";
import { convertToType } from "../../utils/typescriptHelpers";

export type FormValuesCashManagement = {
  amount: string;
  comment: string;
};

type CashManagementPorps = {};
const CashManagement: React.FC<CashManagementPorps> = (props) => {
  const {} = props;

  const [isDisabled] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const cashManagementList = useSelector((state: storeProps) => state.shift.cashManagementList);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValuesCashManagement>({
    defaultValues: {
      amount: "",
      comment: "",
    },
  });

  const handleOnSubmitPayIn = (data: FormValuesCashManagement) => {
    dispatch(shiftActions.payIn(data));
    reset();
  };

  const handleOnSubmitPayOut = (data: FormValuesCashManagement) => {
    dispatch(shiftActions.payOut(data));
    reset();
  };

  return (
    <>
      <Header title="Cash Management" backTo=".." />

      <ContainerStyled maxWidth="md">
        <PaperStyled>
          <Stack spacing={3}>
            <Controller
              name="amount"
              control={control}
              rules={validationCashManagementRules.amount}
              render={({ field }) => (
                <InputField
                  inputProps={{ ...field, inputComponent: PesosInputField as any }}
                  helperText={errors.amount?.message}
                  isShowHelperText={!!errors.amount?.message}
                  label="Amount"
                />
              )}
            />

            <Controller
              name="comment"
              control={control}
              rules={validationCashManagementRules.comment}
              render={({ field }) => (
                <InputField
                  inputProps={{ ...field, multiline: true }}
                  helperText={errors.comment?.message}
                  isShowHelperText={!!errors.comment?.message}
                  label="Comment"
                />
              )}
            />

            <BoxStyled>
              <OutlinedButton onClick={handleSubmit(handleOnSubmitPayIn)} disabled={isDisabled}>
                PAY IN
              </OutlinedButton>
              <OutlinedButton
                onClick={handleSubmit(handleOnSubmitPayOut)}
                disabled={isDisabled}
                color="error"
              >
                PAY OUT
              </OutlinedButton>
            </BoxStyled>
          </Stack>

          <DividerStyled />

          <List
            subheader={<ListSubheaderStyled disableGutters>Pay in/Pay out</ListSubheaderStyled>}
          >
            {cashManagementList
              .slice()
              .reverse()
              .map((cashManagement) => {
                const convertedPayDate = convertToType(
                  "string",
                  cashManagement.payDate,
                  new Date(cashManagement.payDate)
                );
                const cashPayment = formatToPesos(cashManagement.cashPayment);
                const payDate = formatStartTime(convertedPayDate);

                return (
                  <ListItem key={cashManagement.id} disableGutters divider>
                    <PaymentDate>{payDate}</PaymentDate>
                    <Details>
                      <Typography component={"div"} noWrap>
                        {cashManagement.shiftOpened}
                        {cashManagement.comment && (
                          <Comment component={"span"}> - {cashManagement.comment}</Comment>
                        )}
                      </Typography>
                    </Details>
                    <CashPayment>{cashPayment}</CashPayment>
                  </ListItem>
                );
              })}
          </List>
        </PaperStyled>
      </ContainerStyled>
    </>
  );
};

export default CashManagement;
