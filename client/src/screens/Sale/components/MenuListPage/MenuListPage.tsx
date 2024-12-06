import { Forward, RateReviewSharp, Delete } from "@mui/icons-material";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  styled,
  Theme,
  MenuProps,
  IconProps,
} from "@mui/material";
import React from "react";

const MenuStyled = styled(Menu)<MenuProps>(({}: { theme: Theme }) => ({
  "& .MuiMenu-paper": { borderRadius: 0, minWidth: 291 },
}));

const RateReviewSharpIcon = styled(RateReviewSharp)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.black,
}));

const DeleteIcon = styled(Delete)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.black,
}));

const ForwardIcon = styled(Forward)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.black,
}));

const BackwardIcon = styled(Forward)<IconProps>(({ theme }: { theme: Theme }) => ({
  color: theme.palette.common.black,
  transform: "rotateY(180deg)",
}));

type pageDataListProps = {
  id: number;
  pageName: string;
  tabId: number;
}[];

type MenuListPageProps = {
  pageDataList: pageDataListProps;
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  tabIndex: number;
  onMovePage: (value: "left" | "right") => void;
  onClose: () => void;
  onOpenDialogRenamePage: () => void;
  onOpenDialogDeletePage: () => void;
};
const MenuListPage: React.FC<MenuListPageProps> = (props) => {
  const {
    anchorEl,
    isOpen,
    tabIndex,
    onClose,
    onOpenDialogRenamePage,
    onOpenDialogDeletePage,
    onMovePage,
    pageDataList,
  } = props;

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
      <MenuItem
        disabled={tabIndex === pageDataList.length}
        onClick={() => {
          onClose();
          onMovePage("right");
        }}
      >
        <ListItemIcon>
          <ForwardIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Move right</ListItemText>
      </MenuItem>
      <MenuItem
        disabled={tabIndex === 1}
        onClick={() => {
          onClose();
          onMovePage("left");
        }}
      >
        <ListItemIcon>
          <BackwardIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Move Left</ListItemText>
      </MenuItem>
      <MenuItem
        onClick={() => {
          onClose();
          onOpenDialogRenamePage();
        }}
      >
        <ListItemIcon>
          <RateReviewSharpIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Rename</ListItemText>
      </MenuItem>
      <MenuItem
        onClick={() => {
          onClose();
          onOpenDialogDeletePage();
        }}
      >
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </MenuItem>
    </MenuStyled>
  );
};

export default MenuListPage;
