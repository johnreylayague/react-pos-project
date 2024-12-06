import {
  Icon,
  IconProps,
  ListItemButton,
  ListItemText,
  ListItemButtonProps,
  ListItemTextProps,
} from "@mui/material";
import { CSSObject, styled, Theme } from "@mui/material/styles";

export const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme }: { theme: Theme }) => ({
    ...theme.applyStyles("light", {
      "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: theme.palette.customPrimaryListItemButton.light,
      },
    }),
    ...theme.applyStyles("dark", {
      "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: theme.palette.customPrimaryListItemButton.dark,
      },
    }),
    padding: `${theme.spacing(1.5)} ${theme.spacing(3)} ${theme.spacing(1.5)} ${theme.spacing(3)} `,
  })
);

export const IconStyled = styled(Icon)<IconProps & { selected: boolean }>(
  ({ theme, selected }: { theme: Theme; selected: boolean }) => ({
    color: selected ? theme.palette.success.main : "inherit",
  })
);

export const ListItemTextStyled = styled(ListItemText)<ListItemTextProps & { selected: boolean }>(
  ({ theme, selected }: { theme: Theme; selected: boolean }) => ({
    "& .MuiListItemText-primary": {
      ...theme.typography.body1,
      color: selected ? theme.palette.success.main : "inherit",
      fontWeight: selected ? "bold" : "inherit",
    } as CSSObject,
  })
);
