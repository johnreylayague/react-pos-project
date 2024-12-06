import { styled, Theme, CSSObject } from "@mui/material/styles";
import { IconButtonProps, Box, BoxProps, IconButton, Tab, TabProps } from "@mui/material";

export const BoxTabStyled = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

export const TabStyled = styled(Tab)<TabProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.body1,
  fontWeight: "bold",
  "&.Mui-selected": { color: theme.palette.success.main } as CSSObject,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

export const IconButtonSearchStyled = styled(IconButton)<IconButtonProps>(
  ({}: { theme: Theme }) => ({
    position: "absolute",
    top: "50%",
    right: 13,
    transform: "translate(-50%,-50%)",
  })
);
