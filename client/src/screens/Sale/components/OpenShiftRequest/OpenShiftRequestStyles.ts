import { AccessTime } from "@mui/icons-material";
import {
  Box,
  styled,
  BoxProps,
  StackProps,
  Stack,
  IconProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StackStyled = styled(Stack)<StackProps>(({}) => ({
  alignItems: "center",
}));

export const AccessTimeIcon = styled(AccessTime)<IconProps>(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(13),
  },
  fontSize: theme.spacing(20),
  color: theme.palette.action.active,
}));

export const BoxTextStyled = styled(Box)<BoxProps>(({}) => ({
  textAlign: "center",
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.action.active,
}));

export const Subtitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.action.active,
}));
