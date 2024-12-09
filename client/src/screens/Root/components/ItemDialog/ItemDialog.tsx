import { Dialog, DialogContent, Stack, useMediaQuery } from "@mui/material";
import { DialogTitleStyled, ButtonCloseStyled, ButtonSaveStyled } from "./ItemDialogStyles.ts";
import { Close as CloseIcon } from "@mui/icons-material";
import React from "react";
import PriceInputSection from "../PriceInputSection/PriceInputSection.tsx";
import QuantityControlSection from "../QuantityControlSection/QuantityControlSection.tsx";
import CommentInputSection from "../CommentInputSection/CommentInputSection.tsx";
import { Theme, useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../../../store/index.ts";
import { dialogActions } from "../../../../store/dialog-slice.ts";

type ItemDialogState = {};

const ItemDialog: React.FC<ItemDialogState> = (props) => {
  const {} = props;

  const theme = useTheme<Theme>();
  const dispatch = useDispatch();

  const fullScreen = useMediaQuery<Boolean>(theme.breakpoints.down("sm"));

  const isDialog = useSelector((state: storeProps) => state.dialog.isDialog);

  const handleClose = () => {
    dispatch(dialogActions.closeDialog());
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isDialog}
      fullWidth
      maxWidth="xs"
      PaperProps={{ square: true }}
      fullScreen={fullScreen}
    >
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <ButtonCloseStyled onClick={handleClose}>
          <CloseIcon fontSize="medium" />
        </ButtonCloseStyled>

        <DialogTitleStyled>Candy ₱2.00</DialogTitleStyled>

        <ButtonSaveStyled variant="text">SAVE</ButtonSaveStyled>
      </Stack>

      <DialogContent dividers>
        <Stack spacing={5}>
          <PriceInputSection />
          <QuantityControlSection />
          <CommentInputSection />
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ItemDialog;
