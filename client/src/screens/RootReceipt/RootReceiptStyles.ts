import {
  Box,
  InputBase,
  useMediaQuery,
  useTheme,
  styled,
  InputBaseProps,
  Theme,
  BoxProps,
  CSSObject,
  IconProps,
  List,
  ListProps,
  Divider,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const sideBarWidth = {
  xs: "100%",
  sm: "100%",
  md: 290,
  lg: 490,
};

export const SidebarContainer = styled(Box, {
  shouldForwardProp: (props) => props !== "data-show-sidebar",
})<BoxProps & { ["data-show-sidebar"]?: boolean }>(
  ({ theme, ...props }: { theme: Theme; ["data-show-sidebar"]?: boolean }) => ({
    [theme.breakpoints.down("md")]: {
      maxWidth: sideBarWidth.md,
    } as CSSObject,
    [theme.breakpoints.down("sm")]: {
      ...(!props["data-show-sidebar"] ? ({ display: "none" } as CSSObject) : {}),
      maxWidth: sideBarWidth.sm,
    } as CSSObject,
    maxWidth: sideBarWidth.lg,
    flex: 1,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
  })
);

export const ContentContainer = styled(Box, {
  shouldForwardProp: (props) => props !== "data-show-sidebar",
})<BoxProps & { ["data-show-sidebar"]?: boolean }>(
  ({ theme, ...props }: { theme: Theme; ["data-show-sidebar"]?: boolean }) => ({
    [theme.breakpoints.down("md")]: {
      maxWidth: `calc(100vw - ${sideBarWidth.md}px)`,
    } as CSSObject,
    [theme.breakpoints.down("sm")]: {
      ...(props["data-show-sidebar"] ? ({ display: "none" } as CSSObject) : {}),
      backgroundColor: "#fff",
      maxWidth: sideBarWidth.sm,
    },
    maxWidth: `calc(100vw - ${sideBarWidth.lg}px)`,
    backgroundColor: "#f5f5f5",
    flex: 1,
    flexShrink: 0,
  })
);

export const InputSearch = styled(InputBase)<InputBaseProps>(({ theme }: { theme: Theme }) => ({
  "&.MuiInputBase-root": {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  width: "100%",
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
}));

export const SearchIcon = styled(Search)<IconProps>(({ theme }: { theme: Theme }) => ({
  marginRight: theme.spacing(3),
}));

export const RootContainer = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  display: "flex",
  height: "100dvh",
}));

export const ListStyled = styled(List)<ListProps>(({ theme }: { theme: Theme }) => ({
  overflowY: "auto",
  borderRight: `1px solid ${theme.palette.divider}`,
  flexGrow: 1,
}));
