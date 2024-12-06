import { CSSObject, SwipeableDrawer, SwipeableDrawerProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { drawerNavWidth } from "../../../utils/componentStyles";

export const SidebarSwipeableDrawer = styled(SwipeableDrawer)<SwipeableDrawerProps>(
  ({ theme }: { theme: Theme }) => ({
    "& .MuiDrawer-paper": {
      maxWidth: "100%",
      width: drawerNavWidth,
      backgroundColor: theme.palette.background.paper,
    } as CSSObject,
  })
);
