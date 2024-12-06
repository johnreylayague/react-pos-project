import { AppBar, AppBarProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { drawerWidth } from "../../../utils/componentStyles";

export const AppBarStyled = styled(AppBar)<AppBarProps>(({}: { theme?: Theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  marginRight: drawerWidth,
}));
