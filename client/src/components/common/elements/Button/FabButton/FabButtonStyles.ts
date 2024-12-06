import { Fab, FabProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const FabStyled = styled(Fab)<FabProps>(({ theme }: { theme: Theme }) => ({
  position: "fixed",
  bottom: 25,
  right: 25,
}));
