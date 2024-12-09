import { Tab, Tabs, TabsProps, styled, Theme, TabProps } from "@mui/material";
import { LinkProps } from "react-router-dom";

export const TabsStyled = styled(Tabs)<TabsProps>(({ theme }: { theme: Theme }) => ({
  "&.MuiTabs-root": { boxShadow: theme.shadows[4] },
  "& .MuiTabs-indicator": { backgroundColor: theme.palette.success.main, top: 0 },
}));

export const TabStyled = styled(Tab)<TabProps | LinkProps>(({ theme }: { theme: Theme }) => ({
  "&.Mui-selected": { color: theme.palette.success.main },
  minHeight: theme.spacing(6),
  flexGrow: 1,
  maxWidth: "100%",
}));

export const TabDone = styled(Tab)<TabProps>(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: theme.palette.common.white,
  "&.Mui-selected": {
    color: theme.palette.common.white,
  },
}));

export const TabAddPage = styled(Tab)<TabProps>(({ theme }: { theme: Theme }) => ({
  borderLeft: `1px solid ${theme.palette.divider}`,
  minHeight: theme.spacing(6),
  flexGrow: 1,
  maxWidth: "100%",
}));
