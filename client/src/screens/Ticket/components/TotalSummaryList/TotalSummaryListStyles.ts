import {
  styled,
  Theme,
  ListItemTextProps,
  ListItemText,
  DividerProps,
  Divider,
} from "@mui/material";

export const DividerStyled = styled(Divider)<DividerProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}));
export const Amount = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  "& .MuiListItemText-primary": { fontWeight: "bold", textAlign: "right" },
}));
export const Label = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  "& .MuiListItemText-primary": { fontWeight: "bold" },
}));
