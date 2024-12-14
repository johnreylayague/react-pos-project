import { Delete } from "@mui/icons-material";
import {
  Box,
  BoxProps,
  IconProps,
  ButtonBase,
  ButtonBaseProps,
  styled,
  Theme,
} from "@mui/material";

export const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: theme.spacing(3),
}));

export const DeleteIconStyled = styled(Delete)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: "#757575",
  marginRight: theme.spacing(1),
}));

export const DeleteActionButton = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
    width: "100%",
    padding: `${theme.spacing(1.142)} ${theme.spacing(3)}`,
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.paper,
  })
);
