import { ListProps, List } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const TextButtonStyled = styled(List)<ListProps>(({}: { theme: Theme }) => ({
  msOverflowY: "auto",
}));
