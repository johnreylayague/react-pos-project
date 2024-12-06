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
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
};
const DialogCategoryCreate: React.FC<DialogCategoryCreateProps> = (props) => {
  const { onClose, isOpen, title, content } = props;

  return (
    <DialogStyled maxWidth="xs" fullWidth onClose={onClose} open={isOpen}>
      <DialogTitleStyled>{title}</DialogTitleStyled>
      <DialogContentStyled>{content}</DialogContentStyled>
      <DialogActionsStyled>
        <TextButtonStyled onClick={onClose}>CANCEL</TextButtonStyled>
        <TextButtonStyled>SAVE</TextButtonStyled>
      </DialogActionsStyled>
    </DialogStyled>
  );
};

export default DialogCategoryCreate;
