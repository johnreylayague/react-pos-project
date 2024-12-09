import {
  styled,
  Theme,
  BoxProps,
  Box,
  ButtonProps,
  ListItemTextProps,
  ListItemText,
} from "@mui/material";
import ContainedButton from "../../../../components/common/elements/Button/ContainedButton/ContainedButton";
import { LinkProps } from "react-router-dom";

export const ButtonWrapper = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  padding: `0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  marginTop: "auto",
}));

export const ChargeButtonStyled = styled(ContainedButton)<ButtonProps & LinkProps>(
  ({}: { theme: Theme }) => ({
    borderRadius: 0,
  })
);

export const Label = styled(ListItemText)<ListItemTextProps>(({ theme }: { theme: Theme }) => ({
  textAlign: "center",
  "& .MuiListItemText-primary": {},
  "& .MuiListItemText-secondary": {
    ...theme.typography.body1,
    color: theme.palette.common.white,
  },
}));
