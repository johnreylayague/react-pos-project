import { DialogTitle, ButtonProps, Button, IconButton, IconButtonProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const DialogTitleStyled = styled(DialogTitle)(({}) => ({
  fontWeight: "bold",
  flexGrow: 1,
}));

export const ButtonCloseStyled = styled(IconButton)<IconButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    marginLeft: theme.spacing(2),
  })
);

export const ButtonSaveStyled = styled(Button)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  borderRadius: 0,
  color: theme.palette.success.main,
  fontWeight: "bold",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  alignSelf: "stretch",
}));
