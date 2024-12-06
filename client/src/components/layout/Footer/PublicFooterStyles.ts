import { BoxProps, Box, Tab, TabProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { drawerWidth } from "../../../utils/componentStyles.ts";

export const CustomizedBox = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  boxShadow: theme.shadows[4],
  width: `calc(100vw - ${drawerWidth}px);`,
  position: "fixed",
  bottom: "0",
  left: "0",
  zIndex: theme.zIndex.appBar,
}));

export const CustomizedTabChar = styled(Tab)<TabProps>(({ theme }) => ({
  ...theme.typography.h5,
  textTransform: "capitalize",
  py: 2,
  "&.Mui-selected": { color: theme.palette.success.main },
  background: theme.palette.common.white,
}));
export const CustomizedTabIcon = styled(Tab)<TabProps>(({ theme }) => ({
  py: 2,
  "&.Mui-selected": { color: theme.palette.success.main },
  background: theme.palette.common.white,
}));
