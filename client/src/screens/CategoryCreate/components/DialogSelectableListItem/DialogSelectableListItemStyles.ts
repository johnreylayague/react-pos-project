import {
  DialogTitleProps,
  DialogTitle,
  DialogActions,
  DialogActionsProps,
  ButtonProps,
  ListProps,
  List,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const TextButtonStyled = styled(List)<ListProps>(({ theme }: { theme: Theme }) => ({
  msOverflowY: "auto",
}));
