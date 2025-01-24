import {
  Dialog,
  Button,
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
import { Add, Remove } from "@mui/icons-material";

export const ButtonClose = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

export const FieldName = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({
  color: "#7a7a7a",
}));

export const QuantityContainer = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(4),
}));

export const RemoveIcon = styled(Remove)<IconProps>(({}: { theme: Theme }) => ({
  color: "#9d9d9d",
}));

export const QuantityControl = styled(Stack)<StackProps>(({}: { theme: Theme }) => ({
  alignItems: "end",
}));

export const AddIcon = styled(Add)<IconProps>(({}: { theme: Theme }) => ({
  color: "#9d9d9d",
}));

export const InputQuantity = styled(TextField)<TextFieldProps>(({ theme }: { theme: Theme }) => ({
  "& .MuiInput-input": { height: theme.spacing(4.125), textAlign: "center" },
}));

export const ButtonIncreaseQuantity = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    border: `1px solid #e2e2e2`,
    padding: theme.spacing(1),
    backgroundColor: "#f5f5f5",
  })
);

export const ButtonDecreaseQuantity = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    border: `1px solid #e2e2e2`,
    padding: theme.spacing(1),
    backgroundColor: "#f5f5f5",
  })
);

export const DialogStyled = styled(Dialog)<DialogProps>(({}: { theme: Theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
  },
}));

export const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const ButtonSave = styled(Button)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  minHeight: "inherit",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  borderRadius: 0,
  flexShrink: 0,
}));

export const DialogTitleText = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.h6,
    paddingLeft: theme.spacing(2),
    flexGrow: 1,
  })
);
