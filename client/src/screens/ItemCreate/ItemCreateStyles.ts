import { Box, BoxProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const BoxStyled = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: theme.spacing(3),
}));
