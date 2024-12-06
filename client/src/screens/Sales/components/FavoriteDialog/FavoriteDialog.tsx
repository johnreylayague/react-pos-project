import React, { useEffect } from "react";
import { Dialog } from "@mui/material";
import { DialogContentStyled } from "./FavoriteDialogStyles";
import { useDispatch, useSelector } from "react-redux";
import { favoriteDialogActions } from "../../../../store/favoriteDialog-slice";
import { storeProps } from "../../../../store";
import DialogHeader from "../FavoriteDialogHeader/FavoriteDialogHeader";
import DialogTitleBar from "../FavoriteDialogTitleBar/FavoriteDialogTitleBar";
import ItemTab from "../FavoriteDialogItemTab/FavoriteDialogItemTab";
import CategoryTab from "../FavoriteDialogCategoryTab/FavoriteDialogCategoryTab";
import SearchTab from "../FavoriteDialogSearchTab/FavoriteDialogSearchTab";

const searchTab = 2;

type FavoriteDialogProps = {};

const FavoriteDialog: React.FC<FavoriteDialogProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();

  const { selectedTab, OldValue, isDialog, isSearch } = useSelector(
    (state: storeProps) => state.favoriteDialog
  );

  useEffect(() => {
    if (selectedTab !== searchTab) {
      dispatch(favoriteDialogActions.updateOldValue(selectedTab));
    }

    if (isSearch) {
      dispatch(favoriteDialogActions.changeTab(searchTab));
    }

    if (!isSearch && selectedTab === searchTab) {
      dispatch(favoriteDialogActions.changeTab(OldValue));
    }
  }, [selectedTab, isSearch, OldValue]);

  const closeDialog = () => {
    dispatch(favoriteDialogActions.closeDialog());
  };

  return (
    <>
      <Dialog
        onClose={closeDialog}
        fullWidth
        PaperProps={{ square: true, style: { height: "100%" } }}
        open={isDialog}
        maxWidth="sm"
      >
        <DialogTitleBar title="Add item to the page" />

        <DialogHeader />

        <DialogContentStyled>
          <ItemTab />
          <CategoryTab />
          <SearchTab />
        </DialogContentStyled>
      </Dialog>
    </>
  );
};

export default FavoriteDialog;
