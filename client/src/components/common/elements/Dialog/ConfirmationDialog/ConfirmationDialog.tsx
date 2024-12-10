import { Dialog, DialogContentText } from "@mui/material";
import React from "react";
import {
  DialogTitleStyled,
  DialogActionsStyled,
  TextButtonStyled,
  DialogContentStyled,
} from "./ConfirmationDialogStyles";

type ConfirmationDialogProps = {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  title: string;
  description: string;
};

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = (props) => {
  const { description, onClose, onDelete, open, title } = props;

  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitleStyled id="alert-dialog-title">{title}</DialogTitleStyled>

        <DialogContentStyled>
          <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
        </DialogContentStyled>

        <DialogActionsStyled>
          <TextButtonStyled onClick={onClose}>CANCEL</TextButtonStyled>
          <TextButtonStyled onClick={onDelete}>DELETE</TextButtonStyled>
        </DialogActionsStyled>
      </Dialog>
    </>
  );
};

export default ConfirmationDialog;
