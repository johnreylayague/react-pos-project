import { ButtonBaseProps, ButtonBase, IconProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { Payments } from "@mui/icons-material";
import { LinkProps } from "react-router-dom";

export const ButtonBaseStyled = styled(ButtonBase)<ButtonBaseProps & LinkProps>(
  ({ theme }: { theme: Theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing(2)}`,
    backgroundColor: "#f5f5f5",
    fontWeight: "bold",
    borderRadius: theme.spacing(0.5),
    width: "100%",
    minHeight: 58,
  })
);

export const PaymentsButtonIcon = styled(Payments)<IconProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  marginRight: theme.spacing(1),
  color: theme.palette.action.active,
}));
