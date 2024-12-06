import { AppBar, AppBarProps, IconProps, Typography, TypographyProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { Menu } from "@mui/icons-material";
import { drawerWidth } from "../../../../../utils/componentStyles";

export const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme }: { theme: Theme }) => ({
  marginRight: `calc(100% - ${drawerWidth}px)`,
  width: drawerWidth,
  boxShadow: "none",
  borderRight: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.success.main,
}));

export const MenuIconStyled = styled(Menu)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.white,
}));

export const TypographyStyled = styled(Typography)<TypographyProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.typography.h5,
    textTransform: "capitalize",
    marginLeft: theme.spacing(3),
    flexGrow: 1,
  })
);
