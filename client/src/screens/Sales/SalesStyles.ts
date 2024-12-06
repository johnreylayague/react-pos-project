import { BoxProps, Box } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const BoxStyled = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  display: "flex",
}));
