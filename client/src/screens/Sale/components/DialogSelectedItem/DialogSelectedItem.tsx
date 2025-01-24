import { Container, FormControl, Input, FormHelperText, Theme } from "@mui/material";
import React, { useEffect } from "react";
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
  QuantityControl,
  RemoveIcon,
  SaveButton,
  ToolbarStyled,
  CloseIcon,
} from "./DialogSelectedItemStyles";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import { convertToNumber } from "../../../../utils/typescriptHelpers";
import { formatToPesos } from "../../../../utils/format";
import InputField from "../../../../components/common/elements/Input/InputField/InputField";
import { selectedItem, FormValuesSelectedItem } from "./FormValues";
import { validationItemRules } from "./ValidationRules";
import { saleActions } from "../../../../store/sale-slice";
import { notificationProps } from "../../../../hooks/material-ui/useSnackbar/useSnackbar";
import { ticket } from "../../../../store/sale-slice";

type DialogSelectedItemProps = {
  isOpenDialog: boolean;
  onCloseDialog: () => void;
  onOpenSnackbar: ({ message, severity }: notificationProps) => void;
};

export const DialogSelectedItem: React.FC<DialogSelectedItemProps> = (props) => {
  const { isOpenDialog, onCloseDialog, onOpenSnackbar } = props;

  const dispatch = useDispatch();
  const ticket = useSelector((state: storeProps) => state.sale.ticket);
  const itemList = useSelector((state: storeProps) => state.item.itemList);

  const { handleSubmit, control, setValue, watch, reset } = useForm<FormValuesSelectedItem>({
    defaultValues: selectedItem,
  });

  useEffect(() => {
    const updatedTicket = ticket.map((ticket) => {
      const findItemById = itemList.find((item) => item.id === ticket.id);
      return {
        ...findItemById,
        count: ticket.count,
        accumulatedPrice: ticket.accumulatedPrice,
        comment: ticket.comment,
        ticketId: ticket.id,
      } as ticket;
    });

    const findTicketByIsSelected = updatedTicket.find((item) => item.isSelected);

    if (findTicketByIsSelected) {
      reset({
        id: findTicketByIsSelected.id,
        name: findTicketByIsSelected.name,
        count: findTicketByIsSelected.count,
        price: findTicketByIsSelected.price,
        accumulatedPrice: findTicketByIsSelected.accumulatedPrice,
        comment: findTicketByIsSelected.comment,
        instock: findTicketByIsSelected.instock,
        trackstock: findTicketByIsSelected.trackstock,
      });
    }

    return () => {};
  }, [itemList, ticket]);

  const handleOnSave = (data: FormValuesSelectedItem) => {
    const findTicketById = ticket.find((ticket) => ticket.id === data.id);

    if (!findTicketById) {
      onOpenSnackbar({ message: "Ticket not found", severity: "error" });
      return;
    }

    dispatch(saleActions.updateSelectedItemId(data));

    onCloseDialog();
  };

  const handleOnIncreaseQuantity = (type: "increase" | "decrease") => () => {
    const count = watch("count");
    const price = watch("price");

    const convertedCount = convertToNumber("string", count);

    if (convertedCount < -1) {
      return;
    }

    const decreaseCount = convertedCount ? convertedCount - 1 : 0;

    const updateCount = type === "increase" ? convertedCount + 1 : decreaseCount;

    const accumulatedPriceTimes = (parseFloat(price) * updateCount).toString();

    setValue("count", updateCount);
    setValue("accumulatedPrice", accumulatedPriceTimes);
  };

  const handleOnBlurCount = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    field: ControllerRenderProps<FormValuesSelectedItem, "count">
  ) => {
    const value = event.target.value || 0;

    const price = watch("price");

    const convertedCount = convertToNumber("string", value);

    const accumulatedPriceTimes = (parseFloat(price) * convertedCount).toString();

    setValue("accumulatedPrice", accumulatedPriceTimes);

    field.onChange(value);
  };

  const handleOnChangeCount = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: ControllerRenderProps<FormValuesSelectedItem, "count">
  ) => {
    const value = event.target.value;
    const price = watch("price");

    const convertedCount = convertToNumber("string", value);

    const validatedCount = isNaN(convertedCount) ? 0 : convertedCount;

    const accumulatedPriceTimes = (parseFloat(price) * validatedCount).toString();

    setValue("accumulatedPrice", accumulatedPriceTimes);

    field.onChange(value);
  };

  const watchName = watch("name");
  const watchInstock = watch("instock");
  const watchCount = watch("count");
  const watchTrackstock = watch("trackstock");
  const watchAccumulatedPrice = watch("accumulatedPrice");

  const convertedWatchInstock = convertToNumber("string", watchInstock);
  const convertedWatchAccumulatedPrice = convertToNumber("string", watchAccumulatedPrice);

  const isOutOfStock = Boolean(watchCount > watchInstock && watchTrackstock);

  return (
    <DialogStyled open={isOpenDialog} fullWidth maxWidth="xs">
      <ToolbarStyled>
        <CloseButton onClick={onCloseDialog}>
          <CloseIcon />
        </CloseButton>

        <DialogTitle>
          {watchName} {formatToPesos(convertedWatchAccumulatedPrice)}
        </DialogTitle>

        <SaveButton onClick={handleSubmit(handleOnSave)}>SAVE</SaveButton>
      </ToolbarStyled>

      <Container>
        {isOutOfStock && (
          <AlertStyled icon={false} severity="error">
            {convertedWatchInstock <= 0 ? `Out of stock ` : `Only ${watchInstock} in stock`}
          </AlertStyled>
        )}

        <FormContainer spacing={3}>
          <FormGroup spacing={2}>
            <FieldTitle component={"div"}>Quantity</FieldTitle>

            <QuantityControl direction="row" spacing={2}>
              <ButtonDecreaseQuantity onClick={handleOnIncreaseQuantity("decrease")}>
                <RemoveIcon />
              </ButtonDecreaseQuantity>

              <Controller
                name="count"
                control={control}
                rules={validationItemRules.quantity}
                render={({ field }) => (
                  <InputField
                    inputProps={{
                      ...field,
                      onBlur: (event) => handleOnBlurCount(event, field),
                      onChange: (event) => handleOnChangeCount(event, field),
                      inputComponent: NumericInputField as any,
                      sx: (theme: Theme) => ({
                        "& .MuiInput-input": { textAlign: "center", height: theme.spacing(4.125) },
                      }),
                      slotProps: { input: { maxLength: 4 } },
                      error: isOutOfStock,
                    }}
                  />
                )}
              />

              <ButtonIncreaseQuantity onClick={handleOnIncreaseQuantity("increase")}>
                <AddIcon />
              </ButtonIncreaseQuantity>
            </QuantityControl>
          </FormGroup>

          <FormGroup spacing={2}>
            <FieldTitle component={"div"}>Comment</FieldTitle>

            <FormControl color="success" fullWidth>
              <Controller
                name="comment"
                control={control}
                rules={validationItemRules.comment}
                render={({ field }) => (
                  <Input
                    inputProps={{ ...field }}
                    id="my-input"
                    aria-describedby="my-helper-text"
                    color="success"
                    placeholder="Enter comment"
                    multiline
                    maxRows={4}
                  />
                )}
              />
              <FormHelperText id="my-helper-text" hidden></FormHelperText>
            </FormControl>
          </FormGroup>
        </FormContainer>
      </Container>
    </DialogStyled>
  );
};
