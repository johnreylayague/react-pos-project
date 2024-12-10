import React from "react";
import {
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
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

type OpenShiftProps = {
  isOpen: boolean;
  isThemeMobileScreen: boolean;
  onClose: () => void;
};
const OpenShift: React.FC<OpenShiftProps> = (props) => {
  const { isOpen, onClose, isThemeMobileScreen } = props;

  const [amount, setAmount] = React.useState<number>(0);
  const dispatch = useDispatch();

  const handleOnOpenShift = () => {
    dispatch(shiftActions.handleOnOpenShift());
    onClose();
  };

  const handleOnChangeInputField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(event.target.value);

    setAmount(value);
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

          <FormControl color="success" fullWidth variant="standard">
            <InputLabel color="success">Amount</InputLabel>

            <Input
              color="success"
              inputComponent={PesosInputField as any}
              onChange={handleOnChangeInputField}
              value={amount}
            />

            <FormHelperText error hidden>
              Amount is required and cannot be empty.
            </FormHelperText>
          </FormControl>

          <OutlinedButton onClick={handleOnOpenShift}>OPEN SHIFT</OutlinedButton>
        </StackStyled>
      </Container>
    </DialogStyled>
  );
};

export default OpenShift;
