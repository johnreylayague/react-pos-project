import React from "react";
import { Container, Divider, List, Toolbar } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import OutlinedButton from "../../../../components/common/elements/Button/OutlinedButton/OutlinedButton";
import ListItemDetail from "../ListItemDetail/ListItemDetail";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../components/common/elements/Input/InputField/InputField";
import PesosInputField from "../../../../components/vendor/react-number-formatter/PesosInputField/PesosInputField";
import { Controller, useForm } from "react-hook-form";
import { validationRules } from "./DialogCloseShiftValidationRules";
import { shiftActions } from "../../../../store/shift-slice";
import { ButtonClose, DialogStyled, DialogTitleText } from "./DialogCloseShiftStyles";
import { formatToPesos } from "../../../../utils/format";
import { storeProps } from "../../../../store";

export type FormValuesCloseShift = {
  // expectedAmount: string;
  amount: string;
  // differenceAmount: string;
};

type DialogCloseShiftProps = {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
};

const DialogCloseShift: React.FC<DialogCloseShiftProps> = (props) => {
  const { isOpen, onClose, isMobile } = props;

  const dispatch = useDispatch();
  const currentActiveShift = useSelector((state: storeProps) => state.shift.currentActiveShift);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormValuesCloseShift>({
    defaultValues: {
      amount: "20.00",
    },
  });

  const numericValue = (value: any) =>
    typeof value === "string" ? Number.parseFloat(value) : value;

  const handleOnCloseShift = (data: FormValuesCloseShift) => {
    const convertCurrentActiveShiftId =
      typeof currentActiveShift.id === "string"
        ? Number.parseInt(currentActiveShift.id)
        : currentActiveShift.id;

    dispatch(shiftActions.closeShift({ id: convertCurrentActiveShiftId, data: data }));
    onClose();
  };

  const formattedExpectedAmount = formatToPesos(numericValue(0));
  const formattedDifferenceAmount = formatToPesos(numericValue(0));

  return (
    <DialogStyled open={isOpen} fullWidth maxWidth="sm" fullScreen={isMobile}>
      <Toolbar>
        <ButtonClose onClick={onClose}>
          <CloseIcon />
        </ButtonClose>

        <DialogTitleText variant="h6" component="h6">
          Close Shift
        </DialogTitleText>
      </Toolbar>

      <Divider />

      <Container maxWidth={false}>
        <List>
          <ListItemDetail secondary={formattedExpectedAmount}>Expected cash amount</ListItemDetail>
          <ListItemDetail
            secondaryAction={
              <Controller
                name="amount"
                control={control}
                rules={validationRules.amount}
                render={({ field }) => (
                  <InputField
                    formControlProps={{
                      sx: (theme) => ({ maxWidth: theme.spacing(14), marginTop: 0 }),
                    }}
                    inputProps={{
                      ...field,
                      inputComponent: PesosInputField as any,
                      sx: () => ({
                        "& .MuiInput-input": { textAlign: "right" },
                        "&.MuiInput-root": { marginTop: 0 },
                      }),
                    }}
                    helperText={errors.amount?.message}
                    isShowHelperText={!!errors.amount?.message}
                  />
                )}
              />
            }
          >
            Actual cash amount
          </ListItemDetail>
          <ListItemDetail secondary={formattedDifferenceAmount} primaryHighlight secondaryHighlight>
            Difference
          </ListItemDetail>
        </List>

        <OutlinedButton onClick={handleSubmit(handleOnCloseShift)}>CLOSE SHIFT</OutlinedButton>
      </Container>
    </DialogStyled>
  );
};

export default DialogCloseShift;
