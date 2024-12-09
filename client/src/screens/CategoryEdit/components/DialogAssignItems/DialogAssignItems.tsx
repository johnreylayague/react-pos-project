import {
  Dialog,
  Box,
  IconButton,
  Typography,
  Button,
  InputBase,
  List,
  ListItem,
  Checkbox,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@mui/material";
import React from "react";
import { Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material";
import FilterSearchBar from "../DialogFilterSearchBar/DialogFilterSearchBar";
import SelectableListItem from "../DialogSelectableListItem/DialogSelectableListItem";
import { ListStyled, DialogStyled } from "./DialogAssignItemsStyles";
import Header from "../DialogHeader/DialogHeader";

type categoryProps = {
  id: number;
  title: string;
  quantity: number;
  img: string;
  selected: boolean;
};

type DialogAssignItemsProps = {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  categoryData: categoryProps[];
};

const DialogAssignItems: React.FC<DialogAssignItemsProps> = (props) => {
  const { categoryData, onClose, onSave, open } = props;

  return (
    <DialogStyled
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Header onClose={onClose} onSave={onSave} />

      <FilterSearchBar onClose={() => {}} onSearch={() => {}} />

      <ListStyled>
        {categoryData.map((item) => {
          return <SelectableListItem key={item.id} categoryData={item} />;
        })}
      </ListStyled>
    </DialogStyled>
  );
};

export default DialogAssignItems;
