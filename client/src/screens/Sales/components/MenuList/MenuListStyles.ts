import {
  Toolbar,
  Menu,
  ListItemIcon,
  MenuProps,
  ToolbarProps,
  ListItemIconProps,
} from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

type CustomizedToolbarProps = {
  theme: Theme;
};

export const CustomizedToolbar = styled(Toolbar)<ToolbarProps>(
  ({ theme }: CustomizedToolbarProps) => ({
    justifyContent: "space-between",
    boxShadow: theme.shadows[3],
  })
);

export const CustomizedMenu = styled(Menu)<MenuProps>(({}) => ({
  ".MuiMenu-paper": { top: "0!important", borderRadius: 0 },
}));

export const CustomizedListItemIcon = styled(ListItemIcon)<ListItemIconProps>(({}) => ({
  marginRight: "24px",
}));
