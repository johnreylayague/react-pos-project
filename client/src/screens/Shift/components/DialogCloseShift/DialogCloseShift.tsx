import React from "react";
import {
  styled,
  Dialog,
  DialogProps,
  Theme,
  Container,
  Divider,
  IconButton,
  List,
  Toolbar,
  Typography,
  IconButtonProps,
  TypographyProps,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import OutlinedButton from "../../../../components/common/elements/Button/OutlinedButton/OutlinedButton";
import ListItemDetail from "../ListItemDetail/ListItemDetail";
import InputCashAmount from "../InputCashAmount/InputCashAmount";

const DialogStyled = styled(Dialog)<DialogProps>(({}: { theme: Theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
    my: 0,
  },
  "& .MuiDialog-paper": {
    height: "100%",
  },
}));

const ButtonClose = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(1)}`,
}));

const DialogTitleText = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.h6,
  marginLeft: theme.spacing(3),
}));

type DialogCloseShiftProps = {
  isOpen: boolean;
  onClose: () => void;
  onCloseShift: () => void;
  isMobile: boolean;
};

const DialogCloseShift: React.FC<DialogCloseShiftProps> = (props) => {
  const { isOpen, onClose, onCloseShift, isMobile } = props;

  return (
    <DialogStyled open={isOpen} onClose={onClose} fullWidth maxWidth="sm" fullScreen={isMobile}>
      <Toolbar>
        <ButtonClose onClick={onClose}>
          <CloseIcon />
        </ButtonClose>

        <DialogTitleText component="h6">Close Shift</DialogTitleText>
      </Toolbar>

      <Divider />

      <Container maxWidth={false}>
        <List>
          <ListItemDetail secondary="0.00">Expected cash amount</ListItemDetail>
          <ListItemDetail secondaryAction={<InputCashAmount value={12.252} />}>
            Actual cash amount
          </ListItemDetail>
          <ListItemDetail secondary="0.00" primaryHighlight secondaryHighlight>
            Difference
          </ListItemDetail>
        </List>

        <OutlinedButton onClick={onCloseShift}>CLOSE SHIFT</OutlinedButton>
      </Container>
    </DialogStyled>
  );
};

export default DialogCloseShift;
