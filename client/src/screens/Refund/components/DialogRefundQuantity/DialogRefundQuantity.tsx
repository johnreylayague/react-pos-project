import {
  Dialog,
  Button,
  Container,
  Stack,
  Typography,
  ButtonBase,
  TextField,
  IconButton,
  IconButtonProps,
  styled,
  Theme,
  Toolbar,
  ToolbarProps,
  TypographyProps,
  TextFieldProps,
  ButtonBaseProps,
  IconProps,
  StackProps,
  DialogProps,
  ButtonProps,
} from "@mui/material";
import { Close as CloseIcon, Add, Remove } from "@mui/icons-material";
import React from "react";
import NumericInputField from "../../../../components/vendor/react-number-formatter/NumericInputField/NumericInputField";

const ButtonClose = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

const FieldName = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({
  color: "#7a7a7a",
}));

const QuantityContainer = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(4),
}));

const RemoveIcon = styled(Remove)<IconProps>(({}: { theme: Theme }) => ({
  color: "#9d9d9d",
}));

const QuantityControl = styled(Stack)<StackProps>(({}: { theme: Theme }) => ({
  alignItems: "end",
}));

const AddIcon = styled(Add)<IconProps>(({}: { theme: Theme }) => ({
  color: "#9d9d9d",
}));

const InputQuantity = styled(TextField)<TextFieldProps>(({ theme }: { theme: Theme }) => ({
  "& .MuiInput-input": { height: theme.spacing(4.125), textAlign: "center" },
}));

const ButtonIncreaseQuantity = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    border: `1px solid #e2e2e2`,
    padding: theme.spacing(1),
    backgroundColor: "#f5f5f5",
  })
);

const ButtonDecreaseQuantity = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    border: `1px solid #e2e2e2`,
    padding: theme.spacing(1),
    backgroundColor: "#f5f5f5",
  })
);

const DialogStyled = styled(Dialog)<DialogProps>(({}: { theme: Theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
  },
}));

const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const ButtonSave = styled(Button)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  minHeight: "inherit",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  borderRadius: 0,
  flexShrink: 0,
}));

const DialogTitleText = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  paddingLeft: theme.spacing(2),
  flexGrow: 1,
}));

type DialogRefundQuantityProps = {
  isOpen: boolean;
  dialogTitle: string;
  inputQuantity: number;
  onClose: () => void;
  isMobile: boolean;
};
const DialogRefundQuantity: React.FC<DialogRefundQuantityProps> = (props) => {
  const { isOpen, onClose, dialogTitle, inputQuantity, isMobile } = props;

  return (
    <DialogStyled open={isOpen} maxWidth={"xs"} fullWidth fullScreen={isMobile}>
      <ToolbarStyled>
        <ButtonClose onClick={onClose}>
          <CloseIcon />
        </ButtonClose>

        <DialogTitleText component="h6" noWrap>
          {dialogTitle}
        </DialogTitleText>

        <ButtonSave variant="text" color="success">
          SAVE
        </ButtonSave>
      </ToolbarStyled>

      <Container maxWidth={false}>
        <QuantityContainer spacing={1}>
          <FieldName component={"div"}>Quantity</FieldName>

          <QuantityControl direction="row" spacing={2}>
            <ButtonDecreaseQuantity>
              <RemoveIcon />
            </ButtonDecreaseQuantity>

            <InputQuantity
              slotProps={{
                input: { inputComponent: NumericInputField as any, value: inputQuantity },
              }}
              variant="standard"
              color="success"
              fullWidth
            />

            <ButtonIncreaseQuantity>
              <AddIcon />
            </ButtonIncreaseQuantity>
          </QuantityControl>
        </QuantityContainer>
      </Container>
    </DialogStyled>
  );
};

export default DialogRefundQuantity;
