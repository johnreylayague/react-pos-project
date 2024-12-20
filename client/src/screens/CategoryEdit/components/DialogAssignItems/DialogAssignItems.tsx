import React from "react";
import FilterSearchBar from "../DialogFilterSearchBar/DialogFilterSearchBar";
import SelectableListItem from "../DialogSelectableListItem/DialogSelectableListItem";
import { ListStyled, DialogStyled } from "./DialogAssignItemsStyles";
import Header from "../DialogHeader/DialogHeader";
import { itemListProps } from "../../../../store/item-slice";

type categoryProps = {
  id: number;
  title: string;
  quantity: number;
  img: string;
  selected: boolean;
};

type DialogAssignItemsProps = {
  selectedItemList: itemListProps[];
  open: boolean;
  onClickSelect: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChangeSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  onSave: () => void;
};

const DialogAssignItems: React.FC<DialogAssignItemsProps> = (props) => {
  const { onChangeSelect, onClickSelect, onClose, onSave, open, selectedItemList } = props;

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
        {selectedItemList.map((item) => {
          return (
            <SelectableListItem
              onChange={onChangeSelect}
              onClick={onClickSelect}
              key={item.id}
              itemData={item}
            />
          );
        })}
      </ListStyled>
    </DialogStyled>
  );
};

export default DialogAssignItems;
