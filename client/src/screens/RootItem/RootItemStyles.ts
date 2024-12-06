import { Box, BoxProps } from "@mui/material";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import { sidebarWidth } from "../../utils/componentStyles";

export const RootContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  display: "flex",
}));

export const SidebarContainer = styled(Box, {
  shouldForwardProp: (props) => props !== "data-show-sidebar",
})<BoxProps & { ["data-show-sidebar"]?: boolean }>(
  ({ theme, ...props }: { theme: Theme; ["data-show-sidebar"]?: boolean }) => ({
    [theme.breakpoints.down("md")]: {
      maxWidth: sidebarWidth.md,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: sidebarWidth.sm,
      display: props["data-show-sidebar"] ? "unset" : "none",
    },
    maxWidth: sidebarWidth.lg,
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.common.white,
  })
);

export const ContentContainer = styled(Box, {
  shouldForwardProp: (props) => props !== "data-show-sidebar",
})<BoxProps & { ["data-show-sidebar"]?: boolean }>(
  ({ theme, ...props }: { theme: Theme; ["data-show-sidebar"]?: boolean }) => ({
    [theme.breakpoints.down("md")]: {
      maxWidth: `calc(100vw - ${sidebarWidth.md}px)`,
    },
    [theme.breakpoints.down("sm")]: {
      display: props["data-show-sidebar"] ? "none" : "unset",
      maxWidth: sidebarWidth.sm,
    } as CSSObject,
    maxWidth: `calc(100vw - ${sidebarWidth.lg}px)`,
    backgroundColor: theme.palette.common.white,
    width: "100%",
    flex: 1,
  })
);
