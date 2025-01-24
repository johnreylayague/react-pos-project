import { Paper, List, styled, Theme, ListProps, PaperProps } from "@mui/material";

export const ListStyled = styled(List)<ListProps>(({}: { theme: Theme }) => ({
  overflowY: "auto",
}));

export const PaperStyled = styled(Paper)<PaperProps>(({}: { theme: Theme }) => ({
  height: `calc(100vh - 112px)`,
  minHeight: "350px",
  display: "flex",
  flexDirection: "column",
}));
