import React from "react";
import {
  DialogTitleStyled,
  DialogContentStyled,
  DialogActionsStyled,
  TextButtonStyled,
  DialogStyled,
} from "./DialogCategoryCreateStyles";
type DialogCategoryCreateProps = {
  onClose: () => void;
  onSave: () => void;
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
};
const DialogCategoryCreate: React.FC<DialogCategoryCreateProps> = (props) => {
  const { onClose, onSave, isOpen, title, content } = props;

  return (
    <DialogStyled maxWidth="xs" fullWidth open={isOpen}>
      <DialogTitleStyled>{title}</DialogTitleStyled>
      <DialogContentStyled>{content}</DialogContentStyled>
      <DialogActionsStyled>
        <TextButtonStyled onClick={onClose}>CANCEL</TextButtonStyled>
        <TextButtonStyled onClick={onSave}>SAVE</TextButtonStyled>
      </DialogActionsStyled>
    </DialogStyled>
  );
};

export default DialogCategoryCreate;
