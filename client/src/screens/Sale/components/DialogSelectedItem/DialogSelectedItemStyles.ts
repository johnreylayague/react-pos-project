import { Add, Close, Remove } from "@mui/icons-material";
import {
  Dialog,
  Toolbar,
  IconButton,
  ButtonBase,
  Stack,
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

export const QuantityControl = styled(Stack)<StackProps>(({}: { theme: Theme }) => ({
  alignItems: "end",
}));

export const ButtonIncreaseQuantity = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    border: `1px solid #e2e2e2`,
    padding: theme.spacing(1),
    backgroundColor: "#f5f5f5",
  })
);

export const AddIcon = styled(Add)<IconProps>(({}: { theme: Theme }) => ({
  color: "#9d9d9d",
}));

export const CloseIcon = styled(Close)<IconProps>(({}: { theme: Theme }) => ({}));

export const ButtonDecreaseQuantity = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    border: `1px solid #e2e2e2`,
    padding: theme.spacing(1),
    backgroundColor: "#f5f5f5",
  })
);

export const InputQuantity = styled(TextField)<TextFieldProps>(({ theme }: { theme: Theme }) => ({
  "& .MuiInput-input": { height: theme.spacing(4.125), textAlign: "center" },
}));

export const RemoveIcon = styled(Remove)<IconProps>(({}: { theme: Theme }) => ({
  color: "#9d9d9d",
}));

export const DialogStyled = styled(Dialog)<DialogProps>(({}: { theme: Theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: 0,
  },
}));

export const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

export const SaveButton = styled(ButtonBase)<ButtonBaseProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginRight: `-${theme.spacing(2)}`,
  },
  minHeight: "inherit",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  marginRight: `-${theme.spacing(3)}`,
  color: theme.palette.success.main,
}));

export const DialogTitle = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  flexGrow: 1,
  paddingLeft: theme.spacing(3),
}));

export const FormContainer = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export const FieldTitle = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.success.main,
}));

export const FormGroup = styled(Stack)<StackProps>(({}: { theme: Theme }) => ({}));

export const AlertStyled = styled(Alert)<AlertProps>(({ theme }: { theme: Theme }) => ({
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
