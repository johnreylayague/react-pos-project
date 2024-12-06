import {
  Box,
  BoxProps,
  Button,
  ButtonBase,
  Divider,
  IconButton,
  InputBase,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  styled,
  Theme,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import TicketHeader from "./components/TicketHeader/TicketHeader";
import TabsPanel from "./components/TabsPanel/TabsPanel";
import SelectedItemList from "./components/SelectedItemList/SelectedItemList";
import TabContent from "./components/TabContent/TabContent";
import { DialogSelectedItem } from "./components/DialogSelectedItem/DialogSelectedItem";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import { drawerActions } from "../../store/drawer-slice";
import {
  ArrowDropDown as ArrowDropDownIcon,
  Close as CloseIcon,
  Search as SearchIcon,
  OpenWithRounded as OpenWithRoundedIcon,
} from "@mui/icons-material";
import HeaderMobileSearchItem from "./components/HeaderMobileSearchItem/HeaderMobileSearchItem";
import HeaderMobileFilterItem from "./components/HeaderMobileFilterItem/HeaderMobileFilterItem";
import ButtonCharge from "./components/ButtonCharge/ButtonCharge";
import FavoriteSidebar from "./components/FavoriteSidebar/FavoriteSidebar";
import { useHeader } from "../../hooks/Sale/useSearch";
import { useSidebar } from "../../hooks/Sale/useSidebar";
import HeaderFilterItem from "./components/HeaderFilterItem/HeaderFilterItem";
import HeaderSearchItem from "./components/HeaderSearchItem/HeaderSearchItem";
import ConfirmationDialog from "../../components/common/elements/Dialog/ConfirmationDialog/ConfirmationDialog";
import DialgoRenamePage from "./components/DialogRenamePage/DialgoRenamePage";

const sideBarWidth = {
  xs: "100%",
  sm: "100%",
  md: 270,
  lg: 490,
  xl: 490,
};

const RootContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  display: "flex",
  height: "100dvh",
}));

const ContentContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    maxWidth: `calc(100vw - 380px)`,
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: `calc(100vw - ${sideBarWidth.md}px)`,
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: sideBarWidth.sm,
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: sideBarWidth.sm,
  },
  width: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  maxWidth: `calc(100vw - ${sideBarWidth.lg}px)`,
  overflowX: "hidden",
}));

const SidebarContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: { maxWidth: 380 },
  [theme.breakpoints.down("md")]: {
    maxWidth: sideBarWidth.md,
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("xs")]: {},
  flex: 1,
  maxWidth: sideBarWidth.lg,
  display: "flex",
  flexDirection: "column",
  borderLeft: `1px solid ${theme.palette.divider}`,
}));

type SaleProps = {};

const Sale: React.FC<SaleProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();

  const {
    handleOnClearSearchInput,
    handleOnCloseDropdown,
    handleOnOpenDrawer,
    handleOnOpenDropdown,
    handleOnToggleIsSearch,
    handleOnUpdateSearchInput,
    isOpenDropdown,
    isSearch,
    searchInputValue,
    anchorElDropdown,
  } = useHeader(dispatch);

  const { handleOnCloseDialog, handleOnOpenDialog, isOpenDialog } = useSidebar();

  // -----------------
  const [value, setValue] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const holdTimeout = useRef<number | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDialogRenamePage, setIsDialogRenamePage] = React.useState(false);
  const [isDeleteDialog, setIsDeleteDialog] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleOnCloseDialogRenamePage = () => {
    setIsDialogRenamePage(false);
  };

  const handleOnOpenDialogRenamePage = () => {
    setIsDialogRenamePage(true);
    setAnchorEl(null);
  };

  const handleOnShowDeletDialog = () => {
    setIsDeleteDialog(true);
    setAnchorEl(null);
  };
  const handleOnHideDeletDialog = () => {
    setIsDeleteDialog(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnToggleEditMode = (value: boolean) => {
    setIsEditMode(value);
  };

  const clearHoldTimeout = () => {
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
      holdTimeout.current = null;
    }
  };

  const handleOnMouseDown = () => {
    holdTimeout.current = setTimeout(() => {
      setIsEditMode(true);
    }, 1000);
  };

  const handleOnMouseUp = () => {
    clearHoldTimeout();
  };
  const handleOnMouseLeave = () => {
    clearHoldTimeout();
  };

  return (
    <>
      <RootContainer>
        <ContentContainer>
          {isSearch && (
            <HeaderSearchItem
              inputSearchValue={searchInputValue}
              onUpdateSearchInput={handleOnUpdateSearchInput}
              onToggleIsSearch={handleOnToggleIsSearch}
              onClearSearchInput={handleOnClearSearchInput}
            />
          )}

          {!isSearch && (
            <HeaderFilterItem
              anchorElDropdown={anchorElDropdown}
              isOpenDropdown={isOpenDropdown}
              onCloseDropdown={handleOnCloseDropdown}
              onOpenDropdown={handleOnOpenDropdown}
              onOpenDrawer={handleOnOpenDrawer}
              onToggleIsSearch={handleOnToggleIsSearch}
            />
          )}

          {/* <ButtonCharge /> 
          {isMobileSearch && <HeaderMobileSearchItem onCloseSearch={handleCloseIsMobileSearch} />}
          {!isMobileSearch && ( 
            <HeaderMobileFilterItem 
              anchorEl={anchorEl}
              handleAllItem={handleAllItem}
              handleFavorite={handleFavorite}
              isOpenDropdown={openMobile}
              onCloseDropdown={handleCloseMobile}
              onOpenDropdown={handleClickMobile}
              onOpenSearch={handleOpenIsMobileSearch}
            /> 
          )}    
          */}
          <TabContent
            value={value}
            onMouseDown={handleOnMouseDown}
            onMouseLeave={handleOnMouseLeave}
            onMouseUp={handleOnMouseUp}
            isEditMode={isEditMode}
          />
          <TabsPanel
            onShowDeletDialog={handleOnShowDeletDialog}
            onOpenDropdown={handleClick}
            anchorElDropdown={anchorEl}
            isOpenDropdown={open}
            onCloseDropdown={handleClose}
            isEditMode={isEditMode}
            value={value}
            onChangeTab={handleChange}
            onOpenDialogRenamePage={handleOnOpenDialogRenamePage}
          />
        </ContentContainer>

        <SidebarContainer>
          {!isEditMode && (
            <React.Fragment>
              <TicketHeader />
              <SelectedItemList onOpenDialog={handleOnOpenDialog} />
            </React.Fragment>
          )}
          {isEditMode && <FavoriteSidebar onToggleEditMode={handleOnToggleEditMode} />}
        </SidebarContainer>
      </RootContainer>

      <DialogSelectedItem isOpenDialog={isOpenDialog} onCloseDialog={handleOnCloseDialog} />

      <ConfirmationDialog
        description="Are you sure you want to delete the page?"
        onClose={handleOnHideDeletDialog}
        onDelete={() => {}}
        open={isDeleteDialog}
        title="Delete page"
      />

      <DialgoRenamePage
        title="Edit page name"
        isOpenDialog={isDialogRenamePage}
        onClose={handleOnCloseDialogRenamePage}
      />
    </>
  );
};

export default Sale;
// import {
//   Box,
//   BoxProps,
//   Button,
//   ButtonBase,
//   Divider,
//   IconButton,
//   InputBase,
//   ListItem,
//   ListItemText,
//   Menu,
//   MenuItem,
//   Stack,
//   styled,
//   Theme,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import Header from "./components/Header";
// import TicketHeader from "./components/TicketHeader/TicketHeader";
// import TabsPanel from "./components/TabsPanel/TabsPanel";
// import SelectedItemList from "./components/SelectedItemList/SelectedItemList";
// import TabContent from "./components/TabContent/TabContent";
// import { DialogSelectedItem } from "./components/DialogSelectedItem/DialogSelectedItem";
// import { useDispatch, useSelector } from "react-redux";
// import { storeProps } from "../../store";
// import { drawerActions } from "../../store/drawer-slice";
// import {
//   ArrowDropDown as ArrowDropDownIcon,
//   Close as CloseIcon,
//   Search as SearchIcon,
//   OpenWithRounded as OpenWithRoundedIcon,
// } from "@mui/icons-material";
// import HeaderMobileSearchItem from "./components/HeaderMobileSearchItem/HeaderMobileSearchItem";
// import HeaderMobileFilterItem from "./components/HeaderMobileFilterItem/HeaderMobileFilterItem";
// import ButtonCharge from "./components/ButtonCharge/ButtonCharge";
// import FavoriteSidebar from "./components/FavoriteSidebar/FavoriteSidebar";

// const sideBarWidth = {
//   xs: "100%",
//   sm: "100%",
//   md: 270,
//   lg: 490,
//   xl: 490,
// };

// const RootContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
//   display: "flex",
//   height: "100dvh",
// }));

// const ContentContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
//   [theme.breakpoints.down("xl")]: {},
//   [theme.breakpoints.down("lg")]: {
//     maxWidth: `calc(100vw - 380px)`,
//   },
//   [theme.breakpoints.down("md")]: {
//     maxWidth: `calc(100vw - ${sideBarWidth.md}px)`,
//   },
//   [theme.breakpoints.down("sm")]: {
//     maxWidth: sideBarWidth.sm,
//   },
//   [theme.breakpoints.down("xs")]: {
//     maxWidth: sideBarWidth.sm,
//   },
//   width: "100%",
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   maxWidth: `calc(100vw - ${sideBarWidth.lg}px)`,
//   overflowX: "hidden",
// }));

// const SidebarContainer = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
//   [theme.breakpoints.down("xl")]: {},
//   [theme.breakpoints.down("lg")]: { maxWidth: 380 },
//   [theme.breakpoints.down("md")]: {
//     maxWidth: sideBarWidth.md,
//   },
//   [theme.breakpoints.down("sm")]: {
//     display: "none",
//   },
//   [theme.breakpoints.down("xs")]: {},
//   flex: 1,
//   maxWidth: sideBarWidth.lg,
//   display: "flex",
//   flexDirection: "column",
//   borderLeft: `1px solid ${theme.palette.divider}`,
// }));

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// type SaleProps = {};
// const Sale: React.FC<SaleProps> = (props) => {
//   const {} = props;
//   const drawerState = useSelector((state: storeProps) => state.drawer.isDrawerOpen);

//   const dispatch = useDispatch();
//   const [open, setOpen] = React.useState(false);
//   const [isMobileSearch, setIsMobileSearch] = React.useState(false);
//   const [value, setValue] = React.useState(0);
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

//   const openMobile = Boolean(anchorEl);

//   const handleClickMobile = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleAllItem = () => {
//     setValue(1);
//     setAnchorEl(null);
//   };

//   const handleFavorite = () => {
//     setValue(0);
//     setAnchorEl(null);
//   };

//   const handleCloseMobile = () => {
//     setAnchorEl(null);
//   };

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleCloseIsMobileSearch = () => {
//     setIsMobileSearch(false);
//   };

//   const handleOpenIsMobileSearch = () => {
//     setIsMobileSearch(true);
//   };

//   const handleOpenDrawer = () => {
//     dispatch(drawerActions.handleToggleDrawer(true));
//   };

//   return (
//     <>
//       <RootContainer>
//         <ContentContainer>
//           <Header onOpenDrawer={handleOpenDrawer} />

//           <ButtonCharge />

//           {isMobileSearch && <HeaderMobileSearchItem onCloseSearch={handleCloseIsMobileSearch} />}

//           {!isMobileSearch && (
//             <HeaderMobileFilterItem
//               anchorEl={anchorEl}
//               handleAllItem={handleAllItem}
//               handleFavorite={handleFavorite}
//               isOpenDropdown={openMobile}
//               onCloseDropdown={handleCloseMobile}
//               onOpenDropdown={handleClickMobile}
//               onOpenSearch={handleOpenIsMobileSearch}
//             />
//           )}

//           <TabContent value={value} />
//           <TabsPanel value={value} tabProps={a11yProps} onChangeTab={handleChange} />
//         </ContentContainer>

//         <SidebarContainer>
//           <TicketHeader />
//           <SelectedItemList onOpenDialog={handleClickOpen} />

//           {/* <FavoriteSidebar /> */}
//         </SidebarContainer>
//       </RootContainer>

//       <DialogSelectedItem isOpenDialog={open} onCloseDialog={handleClose} />
//     </>
//   );
// };

// export default Sale;
