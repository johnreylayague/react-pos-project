import React from "react";
import { Container, Typography } from "@mui/material";
import OutlinedButton from "../../../../../components/common/elements/Button/OutlinedButton/OutlinedButton";
import { useDispatch } from "react-redux";
import { shiftActions } from "../../../../../store/shift-slice";
import {
  CloseButton,
  CloseIcon,
  DialogStyled,
  ToolbarStyled,
  Title,
  StackStyled,
} from "./OpenShiftStyles";
import PesosInputField from "../../../../../components/vendor/react-number-formatter/PesosInputField/PesosInputField";
import { Controller, useForm } from "react-hook-form";
import InputField from "../../../../../components/common/elements/Input/InputField/InputField";

export type FormValuesOpenShift = {
  amount: string;
};

type OpenShiftProps = {
  isOpen: boolean;
  isThemeMobileScreen: boolean;
  onClose: () => void;
};
const OpenShift: React.FC<OpenShiftProps> = (props) => {
  const { isOpen, onClose, isThemeMobileScreen } = props;

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValuesOpenShift>({
    defaultValues: {
      amount: "0.00",
    },
  });

  const handleOnOpenShift = (data: FormValuesOpenShift) => {
    dispatch(shiftActions.openShift(data));
    reset();
    onClose();
  };

  return (
    <DialogStyled fullWidth maxWidth={"sm"} open={isOpen} fullScreen={isThemeMobileScreen}>
      <ToolbarStyled>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>

        <Title component={"div"} variant="h6">
          Open Shift
        </Title>
      </ToolbarStyled>

      <Container>
        <StackStyled spacing={3}>
          <Typography variant="body1">
            Specify the cash amount in your drawer at the start of the shift
          </Typography>

          <Controller
            name="amount"
            control={control}
            rules={{}}
            render={({ field }) => (
              <InputField
                inputProps={{ ...field, inputComponent: PesosInputField as any }}
                helperText={errors.amount?.message}
                isShowHelperText={!!errors.amount?.message}
                label="Amount"
              />
            )}
          />

          <OutlinedButton onClick={handleSubmit(handleOnOpenShift)}>OPEN SHIFT</OutlinedButton>
        </StackStyled>
      </Container>
    </DialogStyled>
  );
};

export default OpenShift;
