import { Container, FormControl, Input, FormHelperText } from "@mui/material";
import React from "react";
import NumericInputField from "../../../../components/vendor/react-number-formatter/NumericInputField/NumericInputField";
import {
  AddIcon,
  AlertStyled,
  ButtonDecreaseQuantity,
  ButtonIncreaseQuantity,
  CloseButton,
  DialogStyled,
  DialogTitle,
  FieldTitle,
  FormContainer,
  FormGroup,
  InputQuantity,
  QuantityControl,
  RemoveIcon,
  SaveButton,
  ToolbarStyled,
  CloseIcon,
} from "./DialogSelectedItemStyles";

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
          <CloseIcon />
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
