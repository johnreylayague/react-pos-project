import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { drawerActions } from "../../store/drawer-slice.ts";

import Header from "./components/Header/Header.tsx";

import OpenShift from "./components/OpenShift/OpenShift.tsx";
import ShiftManagementPanel from "./components/ShiftManagementPanel/ShiftManagementPanel.tsx";
import DialogCloseShift from "./components/DialogCloseShift/DialogCloseShift.tsx";
import DialogShiftHistory from "./components/DialogShiftHistory/DialogShiftHistory.tsx";
import { storeProps } from "../../store/index.ts";
import { shiftActions } from "../../store/shift-slice.ts";

type ShiftProps = {};
const Shift: React.FC<ShiftProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();
  const isShift = useSelector((state: storeProps) => state.shift.isShift);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [dialogState, setDialogState] = useState({
    isShowOpenShift: true,
    isShowShiftManagement: false,
    isShowShiftsHistory: false,
    isShowDialogCloseShift: false,
  });
  const [amount, setAmount] = React.useState(0);

  const handleDrawer = () => {
    dispatch(drawerActions.handleToggleDrawer(true));
  };

  const handleOpenShift = () => {
    dispatch(shiftActions.handleOnOpenShift());

    setDialogState((prevDialogState) => ({
      ...prevDialogState,
      isShowOpenShift: false,
      isShowShiftManagement: true,
    }));
  };

  const handleChangeInputAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number.parseInt(event.target.value));
  };

  const onCloseShiftHistory = () => {
    setDialogState((prevDialogState) => ({
      ...prevDialogState,
      isShowShiftsHistory: false,
    }));
  };

  const onOpenShiftHistory = () => {
    setDialogState((prevDialogState) => ({
      ...prevDialogState,
      isShowShiftsHistory: true,
    }));
  };

  const handleOpenCloseShift = () => {
    setDialogState((prevDialogState) => ({
      ...prevDialogState,
      isShowDialogCloseShift: true,
    }));
  };

  const handleCloseShift = () => {
    setDialogState((prevDialogState) => ({
      ...prevDialogState,
      isShowDialogCloseShift: false,
    }));
  };

  const handleCloseCloseShift = () => {
    setDialogState((prevDialogState) => ({
      ...prevDialogState,
      isShowOpenShift: true,
      isShowShiftManagement: false,
      isShowDialogCloseShift: false,
    }));
  };

  return (
    <>
      <Header
        title="Shift"
        onToggleNavigationMenu={handleDrawer}
        onOpenShiftHistory={onOpenShiftHistory}
      />

      {!isShift && (
        <OpenShift
          title="Specifiy the cash amount in your drawer at the start of the shift"
          onOpenShift={handleOpenShift}
          inputProps={{ value: amount, onChangeInput: handleChangeInputAmount }}
        />
      )}

      {isShift && <ShiftManagementPanel onCloseShift={handleOpenCloseShift} />}

      <DialogShiftHistory
        isOpen={dialogState.isShowShiftsHistory}
        isSmallScreen={isMobile}
        onClose={onCloseShiftHistory}
      />

      <DialogCloseShift
        isMobile={isMobile}
        isOpen={dialogState.isShowDialogCloseShift}
        onClose={handleCloseShift}
        onCloseShift={handleCloseCloseShift}
      />
    </>
  );
};

export default Shift;
