import { IconButton, Box, styled, IconButtonProps, BoxProps } from "@mui/material";

export const SearchContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  minHeight: theme.spacing(6),
}));
export const CloseSearchButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  marginRight: `-${theme.spacing(1)}`,
}));
