import { Drawer, Button, ButtonProps, DrawerProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { drawerWidth } from "../../../../utils/componentStyles.ts";

export const DrawerStyled = styled(Drawer)<DrawerProps>(({ theme }: { theme: Theme }) => ({
  width: drawerWidth,
  boxShadow: theme.shadows[4],
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "content-box",
  },
}));
