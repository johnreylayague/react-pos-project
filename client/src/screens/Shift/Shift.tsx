import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { drawerActions } from "../../store/drawer-slice.ts";
import Header from "./components/Header/Header.tsx";
import OpenShift from "./components/OpenShift/OpenShift.tsx";
import ShiftManagementPanel from "./components/ShiftManagementPanel/ShiftManagementPanel.tsx";
import DialogCloseShift from "./components/DialogCloseShift/DialogCloseShift.tsx";
import DialogShiftHistory from "./components/DialogShiftHistory/DialogShiftHistory.tsx";
import { storeProps } from "../../store/index.ts";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog.tsx";

type ShiftProps = {};
const Shift: React.FC<ShiftProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();
  const theme = useTheme();
  const currentActiveShiftId = useSelector((state: storeProps) => state.shift.currentActiveShiftId);
  const isThemeMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    isOpenDialog: isOpenDialogShiftHistory,
    handleCloseDialog: handleCloseDialogShiftHistory,
    handleOpenDialog: handleOpenDialogShiftHistory,
  } = useDialog();

  const {
    isOpenDialog: isOpenDialogCloseShift,
    handleOpenDialog: handleOpenDialogCloseShift,
    handleCloseDialog: handleCloseDialogCloseShift,
  } = useDialog();

  const handleDrawer = () => {
    dispatch(drawerActions.handleToggleDrawer(true));
  };

  return (
    <>
      <Header
        title="Shift"
        onToggleNavigationMenu={handleDrawer}
        onOpenShiftHistory={handleOpenDialogShiftHistory}
      />

      {!currentActiveShiftId && <OpenShift />}

      {currentActiveShiftId && <ShiftManagementPanel onCloseShift={handleOpenDialogCloseShift} />}

      <DialogShiftHistory
        isOpen={isOpenDialogShiftHistory}
        isSmallScreen={isThemeMobileScreen}
        onClose={handleCloseDialogShiftHistory}
      />

      <DialogCloseShift
        isMobile={isThemeMobileScreen}
        isOpen={isOpenDialogCloseShift}
        onClose={handleCloseDialogCloseShift}
      />
    </>
  );
};

export default Shift;
