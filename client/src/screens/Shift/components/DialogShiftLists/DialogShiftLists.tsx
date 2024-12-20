import React from "react";
import {
  styled,
  Theme,
  IconButton,
  List,
  Toolbar,
  Typography,
  IconButtonProps,
  TypographyProps,
  ToolbarProps,
  ListProps,
  Fade,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import ListItemShiftHistory from "../ListItemShiftHistory/ListItemShiftHistory";
import Loading from "../Loading/Loading";
import { useToggle } from "../../../../hooks/components/useToggle/useToggle";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";

const ButtonClose = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const DialogTitleText = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  marginLeft: theme.spacing(3),
}));

const ListStyled = styled(List)<ListProps>(({}: { theme?: Theme }) => ({
  overflowY: "auto",
}));

type DialogShiftListsProps = {
  title: string;
  onClose: () => void;
  onShowShiftReport: () => void;
};
const DialogShiftLists: React.FC<DialogShiftListsProps> = (props) => {
  const { onClose, onShowShiftReport, title } = props;

  const shiftList = useSelector((state: storeProps) => state.shift.shiftList);

  const {
    isOpenToggle: isLoading,
    handleCloseToggle: handleCloseLoading,
    handleOpenToggle: handleOpenLoading,
  } = useToggle(true);

  React.useEffect(() => {
    setTimeout(() => {
      handleCloseLoading();
    }, 250);

    return () => {
      handleOpenLoading();
    };
  }, []);

  return (
    <>
      <ToolbarStyled>
        <ButtonClose onClick={onClose}>
          <CloseIcon />
        </ButtonClose>

        <DialogTitleText component="h6">{title}</DialogTitleText>
      </ToolbarStyled>

      <Loading isShow={isLoading} text="Loading..." />

      <Fade in={!isLoading}>
        <ListStyled disablePadding>
          {shiftList
            .filter((shift) => shift.isShiftCompleted)
            .map((shift) => {
              return (
                <ListItemShiftHistory
                  key={shift.id}
                  shiftData={shift}
                  onShowShiftReport={onShowShiftReport}
                />
              );
            })}
        </ListStyled>
      </Fade>
    </>
  );
};

export default DialogShiftLists;
