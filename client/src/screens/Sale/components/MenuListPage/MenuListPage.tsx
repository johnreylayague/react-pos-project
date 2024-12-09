import React from "react";
import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { saleActions } from "../../../../store/sale-slice";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import {
  BackwardIcon,
  DeleteIcon,
  ForwardIcon,
  MenuStyled,
  RateReviewSharpIcon,
} from "./MenuListPageStyles";

type MenuListPageProps = {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenDialogRenamePage: () => void;
  onOpenDialogDeletePage: () => void;
};
const MenuListPage: React.FC<MenuListPageProps> = (props) => {
  const { anchorEl, isOpen, onClose, onOpenDialogRenamePage, onOpenDialogDeletePage } = props;

  const dispatch = useDispatch();
  const tabIndex = useSelector((state: storeProps) => state.sale.tabIndex);
  const pageData = useSelector((state: storeProps) => state.sale.pageData);

  const handleOnShiftPage = (value: "left" | "right") => () => {
    onClose();
    dispatch(saleActions.handleOnShiftPage(value));
  };

  const handleOnOpenDialogRenamePage = () => {
    onClose();
    onOpenDialogRenamePage();
  };

  const handleOnOpenDialogDeletePage = () => {
    onClose();
    onOpenDialogDeletePage();
  };

  return (
    <MenuStyled
      id="menu-page"
      anchorEl={anchorEl}
      open={isOpen}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuItem disabled={tabIndex === pageData.length} onClick={handleOnShiftPage("right")}>
        <ListItemIcon>
          <ForwardIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Move right</ListItemText>
      </MenuItem>

      <MenuItem disabled={tabIndex === 1} onClick={handleOnShiftPage("left")}>
        <ListItemIcon>
          <BackwardIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Move Left</ListItemText>
      </MenuItem>

      <MenuItem onClick={handleOnOpenDialogRenamePage}>
        <ListItemIcon>
          <RateReviewSharpIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Rename</ListItemText>
      </MenuItem>

      <MenuItem onClick={handleOnOpenDialogDeletePage}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </MenuItem>
    </MenuStyled>
  );
};

export default MenuListPage;
