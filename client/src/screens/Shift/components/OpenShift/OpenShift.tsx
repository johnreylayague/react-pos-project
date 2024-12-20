import React from "react";
import { Stack, Typography } from "@mui/material";
import OutlinedButton from "../../../../components/common/elements/Button/OutlinedButton/OutlinedButton";
import InputField from "../../../ItemCreate/components/InputField/InputField";
import PesosInputField from "../../../../components/vendor/react-number-formatter/PesosInputField/PesosInputField";
import { Controller, useForm } from "react-hook-form";
import { ContainerStyled, PaperStyled } from "./OpenShiftStyles";
import { validationRules } from "./OpenShiftValidationRules";
import { useDispatch } from "react-redux";
import { shiftActions } from "../../../../store/shift-slice";

export type FormValuesShift = {
  amount: string;
};

type OpenShiftProps = {};

const OpenShift: React.FC<OpenShiftProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValuesShift>({
    defaultValues: {
      amount: "0.00",
    },
  });

  const handleOnOpenShift = (data: FormValuesShift) => {
    dispatch(shiftActions.openShift(data));
  };

  return (
    <ContainerStyled maxWidth="sm">
      <PaperStyled>
        <Stack spacing={3}>
          <Typography>Specifiy the cash amount in your drawer at the start of the shift</Typography>
          <Controller
            name="amount"
            control={control}
            rules={validationRules.amount}
            render={({ field }) => (
              <InputField
                label="Amount"
                inputProps={{ ...field, inputComponent: PesosInputField as any }}
                helperText={errors.amount?.message}
                isShowHelperText={!!errors.amount?.message}
              />
            )}
          />
          <OutlinedButton onClick={handleSubmit(handleOnOpenShift)}>OPEN SHIFT</OutlinedButton>
        </Stack>
      </PaperStyled>
    </ContainerStyled>
  );
};

export default OpenShift;
