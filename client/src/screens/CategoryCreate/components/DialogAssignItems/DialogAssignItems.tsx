import React, { useState } from "react";
import FilterSearchBar from "../DialogFilterSearchBar/DialogFilterSearchBar";
import SelectableListItem from "../DialogSelectableListItem/DialogSelectableListItem";
import { ListStyled, DialogStyled, EmptyMessage } from "./DialogAssignItemsStyles";
import Header from "../DialogHeader/DialogHeader";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";

type DialogAssignItemsProps = {
  open: boolean;
  onClickSelect: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChangeSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  onSave: () => void;
};

const DialogAssignItems: React.FC<DialogAssignItemsProps> = (props) => {
  const { onClose, onSave, open, onChangeSelect, onClickSelect } = props;

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
    <DialogStyled open={open} maxWidth="sm" fullWidth>
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
                onChange={onChangeSelect}
                onClick={onClickSelect}
                key={item.id}
                itemData={item}
              />
            );
          })}
        </ListStyled>
      )}
    </DialogStyled>
  );
};

export default DialogAssignItems;
