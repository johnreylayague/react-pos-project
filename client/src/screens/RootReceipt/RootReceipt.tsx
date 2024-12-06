import React from "react";
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
import { Outlet, useLocation } from "react-router-dom";
import { receiptActions } from "../../store/receipt-slice.ts";
import { drawerActions } from "../../store/drawer-slice.ts";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store/index.ts";
import Header from "./components/Header/Header.tsx";
import ReceiptListItem from "./components/ReceiptListItem/ReceiptListItem.tsx";
import ReceiptList from "./components/ReceiptList/ReceiptList.tsx";

const sideBarWidth = {
  xs: "100%",
  sm: "100%",
  md: 290,
  lg: 490,
};

const SidebarContainer = styled(Box, {
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

const ContentContainer = styled(Box, {
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

const InputSearch = styled(InputBase)<InputBaseProps>(({ theme }: { theme: Theme }) => ({
  "&.MuiInputBase-root": {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  width: "100%",
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
}));

const SearchIcon = styled(Search)<IconProps>(({ theme }: { theme: Theme }) => ({
  marginRight: theme.spacing(3),
}));

const RootContainer = styled(Box)<BoxProps>(({}: { theme: Theme }) => ({
  display: "flex",
  height: "100vh",
}));

const ListStyled = styled(List)<ListProps>(({ theme }: { theme: Theme }) => ({
  overflowY: "auto",
  borderRight: `1px solid ${theme.palette.divider}`,
  flexGrow: 1,
}));

const RootReceipt = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isShowSideBar = useSelector((state: storeProps) => state.receipt.isShowSideBar);

  React.useEffect(() => {
    if (location.pathname !== "/receipt" && isMobile) {
      dispatch(receiptActions.handleShowSideBar(false));
      return;
    }

    dispatch(receiptActions.handleShowSideBar(true));
    return () => {};
  }, [isShowSideBar, isMobile, location]);

  const handleOnToggleDrawer = () => {
    dispatch(drawerActions.handleToggleDrawer(true));
  };

  return (
    <>
      <RootContainer>
        <SidebarContainer data-show-sidebar={isShowSideBar}>
          <Header onToggleNavigation={handleOnToggleDrawer} />
          <InputSearch placeholder="Search" startAdornment={<SearchIcon />} />
          <ListStyled subheader={<li />}>
            {Array.from({ length: 5 }).map((_, index) => (
              <ReceiptList key={index} dateHeader={`Saturday, April 2${index}, 2024`}>
                {Array.from({ length: 5 }).map((_, index, array) => {
                  const RowCount = index + 1;
                  return (
                    <React.Fragment key={index}>
                      <ReceiptListItem
                        link={`${index}`}
                        paymentAmount={`${index}.00`}
                        receiptTransactionNumber={`${index}000`}
                        refundtransactionNumber={`${index + 5}000`}
                        time={`1${index}:5${index}AM`}
                      />
                      {array.length !== RowCount && <Divider variant="inset" component="li" />}
                    </React.Fragment>
                  );
                })}
              </ReceiptList>
            ))}
          </ListStyled>
        </SidebarContainer>

        <ContentContainer data-show-sidebar={isShowSideBar}>
          <Outlet />
        </ContentContainer>
      </RootContainer>
    </>
  );
};

export default RootReceipt;
