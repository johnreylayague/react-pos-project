import { ArrowBack, MoreVert } from "@mui/icons-material";
import { styled, List, ListProps, IconProps, IconButtonProps, IconButton } from "@mui/material";
import { LinkProps } from "react-router-dom";

export const ListStyled = styled(List)<ListProps>(({}) => ({
  overflowY: "auto",
}));

export const MoreVertIcon = styled(MoreVert)<IconProps>(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const ArrowBackButton = styled(IconButton)<IconButtonProps & LinkProps>(({ theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

export const ArrowBackIcon = styled(ArrowBack)<IconProps>(({ theme }) => ({
  color: theme.palette.common.white,
}));
