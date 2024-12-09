import {
  Box,
  styled,
  BoxProps,
  Grid2 as Grid,
  IconButton,
  IconButtonProps,
  Theme,
} from "@mui/material";

export const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  position: "absolute",
  left: `-${theme.spacing(1)}`,
  top: `-${theme.spacing(1)}`,
  zIndex: 1,
  boxShadow: theme.shadows[1],
  backgroundColor: "#fff",
  ":hover": {
    backgroundColor: "#fff",
  },
}));

export const Wrapper = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  position: "relative",
}));

export const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  padding: theme.spacing(2),
}));
