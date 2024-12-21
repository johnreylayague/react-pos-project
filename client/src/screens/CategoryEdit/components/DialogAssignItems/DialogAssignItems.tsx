import React, { useState } from "react";
import FilterSearchBar from "../DialogFilterSearchBar/DialogFilterSearchBar";
import SelectableListItem from "../DialogSelectableListItem/DialogSelectableListItem";
import { ListStyled, DialogStyled, EmptyMessage } from "./DialogAssignItemsStyles";
import Header from "../DialogHeader/DialogHeader";
import { storeProps } from "../../../../store";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

type DialogAssignItemsProps = {
  open: boolean;
  onClickSelect: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChangeSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  onSave: () => void;
};

const DialogAssignItems: React.FC<DialogAssignItemsProps> = (props) => {
  const { onChangeSelect, onClickSelect, onClose, onSave, open } = props;

  const itemList = useSelector((state: storeProps) => state.item.itemList);
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const handleOnChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchInputValue(value);
  };

  const handleOnClearSearchInput = () => {
    setSearchInputValue("");
  };

  const filterItemByName = itemList.filter((item) =>
    item.name.toLowerCase().includes(searchInputValue.toLowerCase())
  );

  return (
    <DialogStyled
      open={open}
      maxWidth="sm"
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Header onClose={onClose} onSave={onSave} />

      <FilterSearchBar
        searchValue={searchInputValue}
        onClearSearchInput={handleOnClearSearchInput}
        onChangeSearchInput={handleOnChangeSearchInput}
      />

      {searchInputValue && filterItemByName.length === 0 && (
        <EmptyMessage component={"p"} variant="body1">
          No existing item found
        </EmptyMessage>
      )}

      {filterItemByName.length > 0 && (
        <ListStyled>
          {filterItemByName.map((item) => {
            return (
              <SelectableListItem
                key={item.id}
                onChange={onChangeSelect}
                onClick={onClickSelect}
                itemId={item.id}
                itemName={item.name}
                itemRepresentation={item.representation}
                itemColorAndShapeImage={item.colorAndShapeImage}
                itemImage={item.image}
                itemIsSelected={item.isSelected}
              />
            );
          })}
        </ListStyled>
      )}
    </DialogStyled>
  );
};

export default DialogAssignItems;
