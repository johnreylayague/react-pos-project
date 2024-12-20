import { Add } from "@mui/icons-material";
import { Divider, DividerProps, IconProps, ListItemIcon, ListItemIconProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

export const DividerStyled = styled(Divider)<DividerProps>(({}: { theme: Theme }) => ({
  "&.MuiDivider-root": {
    margin: 0,
  },
}));

export const ListItemIconStyled = styled(ListItemIcon)<ListItemIconProps>(
  ({}: { theme: Theme }) => ({
    "&.MuiListItemIcon-root": { minWidth: 22 },
  })
);

export const AddIcon = styled(Add)<IconProps>(({}: { theme: Theme }) => ({
  color: "#000",
  fontSize: 16,
}));
