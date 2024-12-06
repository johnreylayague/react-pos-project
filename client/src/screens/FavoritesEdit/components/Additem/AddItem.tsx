import { Add, Close, Remove, Search } from "@mui/icons-material";
import {
  Dialog,
  Toolbar,
  IconButton,
  Typography,
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
  InputBase,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  ListItemButton,
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

type DialogSelectedItemProps = {
  isOpenDialog: boolean;
  onCloseDialog: () => void;
};
const DialogSelectedItem: React.FC<DialogSelectedItemProps> = (props) => {
  const { isOpenDialog, onCloseDialog } = props;

  return (
    <Dialog open={isOpenDialog} fullScreen={true} sx={(theme) => ({})}>
      <Toolbar sx={(theme) => ({ borderBottom: `1px solid ${theme.palette.divider}` })}>
        <IconButton
          onClick={onCloseDialog}
          sx={(theme) => ({ marginLeft: `-${theme.spacing(1)}` })}
        >
          <Close />
        </IconButton>
        <Typography
          component={"h6"}
          variant={"h6"}
          sx={(theme) => ({ flexGrow: 1, paddingLeft: theme.spacing(3) })}
        >
          Add item to favorites
        </Typography>
      </Toolbar>

      <Stack
        direction={"row"}
        spacing={2}
        sx={(theme) => ({
          padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
        })}
      >
        <IconButton sx={(theme) => ({})}>
          <Search />
        </IconButton>

        <InputBase placeholder="Search" fullWidth />

        <IconButton>
          <Close />
        </IconButton>
      </Stack>

      <Divider />

      <List sx={() => ({ overflowY: "auto" })}>
        {Array.from({ length: 115 }).map((_, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText>asdasd</ListItemText>
                  <ListItemText
                    sx={(theme) => ({
                      textAlign: "right",
                    })}
                  >
                    ₱0.01
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          );
        })}
      </List>
    </Dialog>
  );
};

export default DialogSelectedItem;
