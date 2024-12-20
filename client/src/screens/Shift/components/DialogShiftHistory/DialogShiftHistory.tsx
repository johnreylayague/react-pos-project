import React from "react";
import ShiftLists from "../DialogShiftLists/DialogShiftLists";
import ShiftReport from "../DialogShiftReport/DialogShiftReport";
import { useToggle } from "../../../../hooks/components/useToggle/useToggle";
import { DialogStyled } from "./DialogShiftHistoryStyles";

type DialogCloseShiftProps = {
  isOpen: boolean;
  onClose: () => void;
  isSmallScreen: boolean;
};

const DialogShiftHistory: React.FC<DialogCloseShiftProps> = (props) => {
  const { isOpen, onClose, isSmallScreen } = props;

  const { isOpenToggle, handleCloseToggle, handleOpenToggle } = useToggle(true);

  return (
    <DialogStyled
      open={isOpen}
      fullWidth
      maxWidth="sm"
      fullScreen={isSmallScreen}
      disableEscapeKeyDown
    >
      {isOpenToggle && (
        <ShiftLists title="Shifts" onShowShiftReport={handleCloseToggle} onClose={onClose} />
      )}

      {!isOpenToggle && <ShiftReport title="Shift report" onClose={handleOpenToggle} />}
    </DialogStyled>
  );
};

export default DialogShiftHistory;
