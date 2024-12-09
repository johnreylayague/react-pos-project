import { ArrowBack, Search } from "@mui/icons-material";
import {
  IconButton,
  IconButtonProps,
  IconProps,
  Toolbar,
  ToolbarProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { LinkProps } from "react-router-dom";

export const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "unset",
  },
}));

export const ArrowBackIconStyled = styled(ArrowBack)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const BackButton = styled(IconButton)<IconButtonProps & Partial<LinkProps>>(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "inline-flex",
    },
    display: "none",
  })
);

export const Title = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
}));

export const OpenSearchButton = styled(IconButton)<IconButtonProps & Partial<LinkProps>>(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
    },
  })
);

export const SearchIconStyled = styled(Search)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));
