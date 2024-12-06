import { Add, Close, Remove } from "@mui/icons-material";
import {
  Dialog,
  Toolbar,
  IconButton,
  ButtonBase,
  Container,
  Stack,
  Box,
  FormControl,
  Input,
  FormHelperText,
  styled,
  Theme,
  StackProps,
  ButtonBaseProps,
  IconProps,
  TextField,
  TextFieldProps,
  Alert,
  DialogProps,
  ToolbarProps,
  IconButtonProps,
  TypographyProps,
  Typography,
  AlertProps,
} from "@mui/material";
import React from "react";
import NumericInputField from "../../../../components/vendor/react-number-formatter/NumericInputField/NumericInputField";

const QuantityControl = styled(Stack)<StackProps>(({}: { theme: Theme }) => ({
  alignItems: "end",
}));

const ButtonIncreaseQuantity = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    border: `1px solid #e2e2e2`,
    padding: theme.spacing(1),
    backgroundColor: "#f5f5f5",
  })
);

const AddIcon = styled(Add)<IconProps>(({}: { theme: Theme }) => ({
  color: "#9d9d9d",
}));

const ButtonDecreaseQuantity = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    border: `1px solid #e2e2e2`,
    padding: theme.spacing(1),
    backgroundColor: "#f5f5f5",
  })
);

const InputQuantity = styled(TextField)<TextFieldProps>(({ theme }: { theme: Theme }) => ({
  "& .MuiInput-input": { height: theme.spacing(4.125), textAlign: "center" },
}));

const RemoveIcon = styled(Remove)<IconProps>(({}: { theme: Theme }) => ({
  color: "#9d9d9d",
}));

const DialogStyled = styled(Dialog)<DialogProps>(({}: { theme: Theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: 0,
  },
}));

const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

const SaveButton = styled(ButtonBase)<ButtonBaseProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginRight: `-${theme.spacing(2)}`,
  },
  minHeight: "inherit",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  marginRight: `-${theme.spacing(3)}`,
  color: theme.palette.success.main,
}));

const DialogTitle = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  flexGrow: 1,
  paddingLeft: theme.spacing(3),
}));

const FormContainer = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

const FieldTitle = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.success.main,
}));

const FormGroup = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({}));

const AlertStyled = styled(Alert)<AlertProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: `-${theme.spacing(2)}`,
    marginRight: `-${theme.spacing(2)}`,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  marginLeft: `-${theme.spacing(3)}`,
  marginRight: `-${theme.spacing(3)}`,
}));

type DialogSelectedItemProps = {
  isOpenDialog: boolean;
  onCloseDialog: () => void;
};

export const DialogSelectedItem: React.FC<DialogSelectedItemProps> = (props) => {
  const { isOpenDialog, onCloseDialog } = props;

  return (
    <DialogStyled open={isOpenDialog} fullWidth maxWidth="xs">
      <ToolbarStyled>
        <CloseButton onClick={onCloseDialog}>
          <Close />
        </CloseButton>

        <DialogTitle>Item 1 ₱0.02</DialogTitle>

        <SaveButton>SAVE</SaveButton>
      </ToolbarStyled>

      <Container>
        <AlertStyled icon={false} severity="error">
          Out of stock
        </AlertStyled>

        <FormContainer spacing={3}>
          <FormGroup spacing={2}>
            <FieldTitle component={"div"}>Quantity</FieldTitle>

            <QuantityControl direction="row" spacing={2}>
              <ButtonDecreaseQuantity>
                <RemoveIcon />
              </ButtonDecreaseQuantity>

              <InputQuantity
                slotProps={{
                  input: { inputComponent: NumericInputField as any, value: 1 },
                }}
                variant="standard"
                color="warning"
                fullWidth
                error
              />

              <ButtonIncreaseQuantity>
                <AddIcon />
              </ButtonIncreaseQuantity>
            </QuantityControl>
          </FormGroup>

          <FormGroup spacing={2}>
            <FieldTitle component={"div"}>Comment</FieldTitle>

            <FormControl color="success" fullWidth>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                color="success"
                placeholder="Enter comment"
                multiline
                maxRows={4}
              />
              <FormHelperText id="my-helper-text" hidden>
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </FormGroup>
        </FormContainer>
      </Container>
    </DialogStyled>
  );
};
