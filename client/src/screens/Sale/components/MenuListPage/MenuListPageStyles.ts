import { Forward, RateReviewSharp, Delete } from "@mui/icons-material";
import { Menu, styled, Theme, MenuProps, IconProps } from "@mui/material";

export const MenuStyled = styled(Menu)<MenuProps>(({}: { theme: Theme }) => ({
  "& .MuiMenu-paper": { borderRadius: 0, minWidth: 291 },
}));

export const RateReviewSharpIcon = styled(RateReviewSharp)<IconProps>(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.common.black,
  })
);

export const DeleteIcon = styled(Delete)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.black,
}));

export const ForwardIcon = styled(Forward)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.black,
}));

export const BackwardIcon = styled(Forward)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.black,
  transform: "rotateY(180deg)",
}));
