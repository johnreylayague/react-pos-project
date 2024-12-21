import { StackProps, Stack } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const SearchBarContainer = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  alignItems: "center",
  minHeight: theme.spacing(8),
}));
