import { styled, Theme } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/material";

export const BoxStyled = styled(Box)<BoxProps>(
  // export const BoxStyled = styled(Box)<BoxProps & { boxheight: string }>(
  // ({ boxheight, theme }: { boxheight: string; theme: Theme }) => ({
  () => ({
    paddingTop: 64,
    height: `100vh`,
    width: "100%",
    overflowY: "auto",
    backgroundColor: "#f1f1f1",
  })
);
