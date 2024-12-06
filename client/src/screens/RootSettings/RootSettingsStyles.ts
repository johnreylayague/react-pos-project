import { Box, BoxProps } from "@mui/material";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import { sidebarWidth } from "../../utils/componentStyles";

export const RootContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  display: "flex",
}));

export const SidebarContainer = styled(Box)<BoxProps & { isshowsidebar?: string }>(
  ({ theme, isshowsidebar }: { theme: Theme; isshowsidebar?: string }) =>
    ({
      [theme.breakpoints.down("md")]: {
        maxWidth: sidebarWidth.md,
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: sidebarWidth.sm,
        display: isshowsidebar === "show" ? "unset" : "none",
      },
      maxWidth: sidebarWidth.lg,
      width: "100%",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.common.white,
    } as CSSObject)
);

export const ContentContainer = styled(Box)<BoxProps & { isshowsidebar: string }>(
  ({ theme, isshowsidebar }: { theme: Theme; isshowsidebar: string }) => ({
    [theme.breakpoints.down("sm")]: {
      display: isshowsidebar === "show" ? "none" : "unset",
    } as CSSObject,
    backgroundColor: theme.palette.common.white,
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.customPrimary.dark,
    }),
    flex: 1,
  })
);
