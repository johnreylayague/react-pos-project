import { Close } from "@mui/icons-material";
import {
  Dialog,
  Toolbar,
  IconButton,
  Typography,
  ButtonBase,
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  styled,
  Theme,
  DialogProps,
  ToolbarProps,
  TypographyProps,
  ButtonBaseProps,
  IconButtonProps,
  FormControlProps,
} from "@mui/material";
import React, { useRef, useState } from "react";

const DialogStyled = styled(Dialog)<DialogProps>(({}: { theme: Theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: 0,
  },
}));

const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }: { theme: Theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const DialogTitle = styled(Typography)<TypographyProps>(({ theme }: { theme: Theme }) => ({
  flexGrow: 1,
  paddingLeft: theme.spacing(3),
}));

const SaveButton = styled(ButtonBase)<ButtonBaseProps>(({ theme }: { theme: Theme }) => ({
  ...theme.typography.body2,
  minHeight: "inherit",
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  color: theme.palette.success.main,
  marginRight: `-${theme.spacing(3)}`,
}));

const CloseButton = styled(IconButton)<IconButtonProps>(({ theme }: { theme: Theme }) => ({
  marginRight: `-${theme.spacing(1)}`,
}));

const FormControlStyled = styled(FormControl)<FormControlProps>(({ theme }: { theme: Theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(5),
}));

type pageDataListProps = {
  id: number;
  pageName: string;
  tabId: number;
}[];

type DialgoRenamePageProps = {
  json: { data: { pageRename: string }; pageList: pageDataListProps };
  tabs: { tabIndex: number };
  inputActions: {
    onUpdatePageName: (value: React.ChangeEvent<HTMLInputElement>) => void;
    onUpdatePageNameASD: (value: string) => void;
  };
  buttonActions: {
    onSaveDialogRenamePage: () => void;
  };
  title: string;
  isOpenDialog: boolean;
  onClose: () => void;
};
const DialgoRenamePage: React.FC<DialgoRenamePageProps> = (props) => {
  const {
    isOpenDialog,
    onClose,
    title,
    json: {
      data: { pageRename },
      pageList,
    },
    tabs: { tabIndex },
    inputActions: { onUpdatePageName, onUpdatePageNameASD },
    buttonActions: { onSaveDialogRenamePage },
  } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <DialogStyled
        open={isOpenDialog}
        onTransitionEnter={() => {
          const ss = pageList.find((page) => page.tabId === tabIndex);
          if (ss?.pageName && inputRef.current) {
            onUpdatePageNameASD(ss.pageName);
            inputRef.current.focus();
          }
        }}
        onTransitionExited={() => {
          onUpdatePageNameASD("");
        }}
        maxWidth="sm"
        fullWidth
      >
        <ToolbarStyled>
          <CloseButton onClick={onClose}>
            <Close />
          </CloseButton>

          <DialogTitle component={"h6"} variant="h6">
            {title}
          </DialogTitle>

          <SaveButton onClick={onSaveDialogRenamePage}>SAVE</SaveButton>
        </ToolbarStyled>
        <Container>
          <FormControlStyled fullWidth color="success" variant="standard">
            <InputLabel htmlFor="my-input" color="success">
              Page name
            </InputLabel>

            <Input
              value={pageRename}
              onChange={onUpdatePageName}
              id="my-input"
              aria-describedby="my-helper-text"
              color="success"
              inputRef={inputRef}
            />

            <FormHelperText id="my-helper-text" hidden>
              We'll never share your email.
            </FormHelperText>
          </FormControlStyled>
        </Container>
      </DialogStyled>
    </>
  );
};

export default DialgoRenamePage;
