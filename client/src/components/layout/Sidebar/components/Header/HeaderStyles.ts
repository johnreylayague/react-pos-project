import {
  Stack,
  StackProps,
  TypographyProps,
  Typography,
  IconProps,
  IconButton,
  IconButtonProps,
  BoxProps,
  Box,
} from "@mui/material";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import { styled, Theme } from "@mui/material/styles";

export const ContentContainer = styled(Stack)<StackProps>(({ theme }: { theme: Theme }) => ({
  ...theme.applyStyles("light", {
    backgroundColor: theme.palette.customPrimary.light,
  }),
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.customPrimary.dark,
  }),
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: `${theme.spacing(6)} ${theme.spacing(4)} ${theme.spacing(6)} ${theme.spacing(4)}`,
}));

export const ProfileContainer = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({}));

export const Role = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  color: theme.palette.common.white,
}));

export const Location = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.common.white,
}));

export const User = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.common.white,
}));

export const IconButtonStyled = styled(IconButton)<IconButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.applyStyles("light", {
      "&.MuiIconButton-root:hover": {
        backgroundColor: theme.palette.customSecondaryButton.light,
      },
      backgroundColor: theme.palette.customSecondaryButton.light,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.customSecondaryButton.dark,
    }),
  })
);

export const LockOutlinedIconStyled = styled(LockOutlinedIcon)<IconProps>(
  ({}: { theme: Theme }) => ({})
);
