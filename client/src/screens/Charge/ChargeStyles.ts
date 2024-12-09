import {
  IconProps,
  ListItemTextProps,
  ListItemText,
  TypographyProps,
  Typography,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { ArrowBack } from "@mui/icons-material";

export const AmountSummary = styled(ListItemText)<ListItemTextProps>(
  ({ theme }: { theme: Theme }) => ({
    marginTop: theme.spacing(3),
    textAlign: "center",
    "& .MuiListItemText-primary": { ...theme.typography.h4 },
    "& .MuiListItemText-secondary": { ...theme.typography.body1 },
  })
);

export const ArrowBackIcon = styled(ArrowBack)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const FieldName = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  marginTop: theme.spacing(5),
}));
