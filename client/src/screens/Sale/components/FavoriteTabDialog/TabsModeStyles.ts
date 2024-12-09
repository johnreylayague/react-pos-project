import { IconButton, Tab, Tabs, styled, IconButtonProps, TabsProps, TabProps } from "@mui/material";

export const TabsStyled = styled(Tabs)<TabsProps>(({ theme }) => ({
  "& .MuiTabs-indicator": { backgroundColor: theme.palette.success.main },
}));

export const SearchButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(2),
  top: "50%",
  transform: "translateY(-50%)",
}));

export const TabStyled = styled(Tab)<TabProps>(({ theme }) => ({
  "&.Mui-selected": { color: theme.palette.success.main },
}));
