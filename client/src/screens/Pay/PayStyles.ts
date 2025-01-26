import { ListItemTextProps, ListItemText, ButtonProps, StackProps, Stack } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import ButtonContained from "../../components/common/elements/Button/ContainedButton/ContainedButton";

export const NewSaleButton = styled(ButtonContained)<ButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down("sm")]: {
      marginTop: "calc(100dvh - 220px)",
    },
    marginTop: theme.spacing(3),
  })
);

export const TotalPaid = styled(ListItemText)<ListItemTextProps>(({ theme }: { theme: Theme }) => ({
  textAlign: "center",
  "& .MuiListItemText-primary": { ...theme.typography.h4 },
  "& .MuiListItemText-secondary": { ...theme.typography.body1 },
}));

export const Change = styled(ListItemText)<ListItemTextProps>(({ theme }: { theme: Theme }) => ({
  textAlign: "center",
  "& .MuiListItemText-primary": { ...theme.typography.h4 },
  "& .MuiListItemText-secondary": { ...theme.typography.body1 },
}));

export const StackStyled = styled(Stack)<StackProps>(({}: { theme: Theme }) => ({
  justifyContent: "center",
}));
