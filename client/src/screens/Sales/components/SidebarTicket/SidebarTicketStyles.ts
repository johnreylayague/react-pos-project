import { Button, ButtonProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const CustomizedButton = styled(Button)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  borderRadius: 0,
  margin: "auto 16px 16px 16px",
  paddingTop: "16px",
  paddingBottom: "16px",
  ...theme.typography.h6,
  fontWeight: "bold",
}));
