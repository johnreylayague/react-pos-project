import React from "react";
import { styled, Dialog, DialogProps, Theme } from "@mui/material";
import ShiftLists from "../DialogShiftLists/DialogShiftLists";
import ShiftReport from "../DialogShiftReport/DialogShiftReport";

const DialogStyled = styled(Dialog)<DialogProps>(({}: { theme: Theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
    my: 0,
  },
  "& .MuiDialog-paper": {
    height: "100%",
  },
}));

type DialogCloseShiftProps = {
  isOpen: boolean;
  onClose: () => void;
  isSmallScreen: boolean;
};

const DialogShiftHistory: React.FC<DialogCloseShiftProps> = (props) => {
  const { isOpen, onClose, isSmallScreen } = props;

  const [dialogState, setDialogState] = React.useState({
    isShowShiftLists: true,
    isShowShiftReport: false,
    isShowLoading: false,
  });

  const handleShowShiftReport = () => {
    setDialogState((prevDialogState) => {
      return { ...prevDialogState, isShowShiftLists: false, isShowShiftReport: true };
    });
  };

  const handleHideShiftReport = () => {
    setDialogState((prevDialogState) => {
      return {
        ...prevDialogState,
        isShowShiftLists: true,
        isShowShiftReport: false,
        isShowLoading: false,
      };
    });
  };

  return (
    <DialogStyled
      open={isOpen}
      fullWidth
      maxWidth="sm"
      fullScreen={isSmallScreen}
      disableEscapeKeyDown
    >
      {dialogState.isShowShiftLists && (
        <ShiftLists title="Shifts" onShowShiftReport={handleShowShiftReport} onClose={onClose} />
      )}

      {dialogState.isShowShiftReport && (
        <ShiftReport title="Shift report" onClose={handleHideShiftReport} />
      )}
    </DialogStyled>
  );
};

export default DialogShiftHistory;
