import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import {} from "./DialogAlertStyles";
import TextButton from "../../../../components/common/elements/Button/TextButton/TextButton";

type ConfirmationDialogProps = {
  open: boolean;
  onClose: () => void;
  onContinue: () => void;
  title: string;
  description: string;
};

const DialogAlert: React.FC<ConfirmationDialogProps> = (props) => {
  const { description, onClose, onContinue, open, title } = props;

  return (
    <>
      <Dialog open={open} maxWidth="xs">
        <DialogTitle>{title}</DialogTitle>

        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>

        <DialogActions>
          <TextButton onClick={onClose}>CANCEL</TextButton>
          <TextButton onClick={onContinue}>CONTINUE</TextButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogAlert;
