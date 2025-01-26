import { Container, useMediaQuery, useTheme } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import React, { useEffect } from "react";
import NumericInputField from "../../../../components/vendor/react-number-formatter/NumericInputField/NumericInputField";
import { useSelector } from "react-redux";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import { storeProps } from "../../../../store";
import {
  AddIcon,
  ButtonClose,
  ButtonDecreaseQuantity,
  ButtonIncreaseQuantity,
  ButtonSave,
  DialogStyled,
  DialogTitleText,
  FieldName,
  InputQuantity,
  QuantityContainer,
  QuantityControl,
  RemoveIcon,
  ToolbarStyled,
} from "./DialogRefundQuantityStyles";
import { convertToNumber } from "../../../../utils/typescriptHelpers";

export type FormValuesRefund = {
  id: number;
  title: string;
  quantity: number | string;
};

type DialogRefundQuantityProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: FormValuesRefund) => void;
};

const DialogRefundQuantity: React.FC<DialogRefundQuantityProps> = (props) => {
  const { isOpen, onClose, onSave } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dialogQuantity = useSelector((state: storeProps) => state.refund.dialogQuantity);

  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: {},
  } = useForm<FormValuesRefund>();

  useEffect(() => {
    reset({
      id: dialogQuantity.id,
      title: dialogQuantity.title,
      quantity: dialogQuantity.quantity,
    });
  }, [dialogQuantity]);

  const handleChangeQuantity = (type: "increase" | "decrease") => () => {
    const quantity = watch("quantity");

    const convertedQuantity = convertToNumber("string", quantity);

    const decreaseCount = convertedQuantity <= 1 ? 1 : convertedQuantity - 1;

    const increaseCount =
      convertedQuantity >= dialogQuantity.quantity
        ? dialogQuantity.quantity
        : convertedQuantity + 1;

    const updateCount = type === "increase" ? increaseCount : decreaseCount;

    setValue("quantity", updateCount);
  };

  const handleOnBlurCount = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    field: ControllerRenderProps<FormValuesRefund, "quantity">
  ) => {
    const quanity = event.target.value || 1;

    const convertedQuantity = convertToNumber("string", quanity);

    const validatedQuantity = convertedQuantity < 1 ? 1 : convertedQuantity;

    const updatedQuantity =
      convertedQuantity >= dialogQuantity.quantity ? dialogQuantity.quantity : validatedQuantity;

    field.onChange(updatedQuantity);
  };

  return (
    <DialogStyled
      open={isOpen}
      maxWidth={"xs"}
      fullWidth
      fullScreen={isMobile}
      onTransitionExited={() => {
        reset({
          id: dialogQuantity.id,
          title: dialogQuantity.title,
          quantity: dialogQuantity.quantity,
        });
      }}
    >
      <ToolbarStyled>
        <ButtonClose onClick={onClose}>
          <CloseIcon />
        </ButtonClose>

        <DialogTitleText component="h6" noWrap>
          {watch("title")}
        </DialogTitleText>

        <ButtonSave variant="text" color="success" onClick={handleSubmit(onSave)}>
          SAVE
        </ButtonSave>
      </ToolbarStyled>

      <Container maxWidth={false}>
        <QuantityContainer spacing={1}>
          <FieldName component={"div"}>Quantity</FieldName>

          <QuantityControl direction="row" spacing={2}>
            <ButtonDecreaseQuantity onClick={handleChangeQuantity("decrease")}>
              <RemoveIcon />
            </ButtonDecreaseQuantity>

            <Controller
              name="quantity"
              control={control}
              rules={{}}
              render={({ field }) => (
                <InputQuantity
                  slotProps={{
                    input: {
                      ...field,
                      onBlur: (event) => handleOnBlurCount(event, field),
                      inputComponent: NumericInputField as any,
                    },
                  }}
                  variant="standard"
                  color="success"
                  fullWidth
                />
              )}
            />

            <ButtonIncreaseQuantity onClick={handleChangeQuantity("increase")}>
              <AddIcon />
            </ButtonIncreaseQuantity>
          </QuantityControl>
        </QuantityContainer>
      </Container>
    </DialogStyled>
  );
};

export default DialogRefundQuantity;
