import { OpenWithRounded } from "@mui/icons-material";
import {
  Box,
  Stack,
  Typography,
  styled,
  Theme,
  BoxProps,
  StackProps,
  IconProps,
  TypographyProps,
} from "@mui/material";

export const SidebarContainer = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const FooterContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(2),
}));

export const ContentWrapper = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
}));

export const OpenWithRoundedIcon = styled(OpenWithRounded)<IconProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.grey[400],
    fontSize: theme.spacing(15),
  })
);

export const TextWrapper = styled(Stack)<StackProps>(({}: { theme: Theme }) => ({
  textAlign: "center",
}));

export const TitleText = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({}));

export const DescriptionText = styled(Typography)<TypographyProps>(({}: { theme: Theme }) => ({}));
