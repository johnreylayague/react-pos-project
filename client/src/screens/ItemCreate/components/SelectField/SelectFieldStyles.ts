import { Divider, DividerProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const DividerStyled = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  "&.MuiDivider-root": {
    margin: 0,
  },
}));
