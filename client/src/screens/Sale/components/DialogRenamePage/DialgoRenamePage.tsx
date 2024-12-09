import { Close as CloseIcon } from "@mui/icons-material";
import { Container, InputLabel, Input, FormHelperText } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import { saleActions } from "../../../../store/sale-slice";
import {
  CloseButton,
  DialogStyled,
  DialogTitle,
  FormControlStyled,
  SaveButton,
  ToolbarStyled,
} from "./DialgoRenamePageStyles";

type DialgoRenamePageProps = {
  title: string;
  isOpenDialog: boolean;
  onClose: () => void;
};

const DialgoRenamePage: React.FC<DialgoRenamePageProps> = (props) => {
  const { isOpenDialog, onClose, title } = props;

  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const tabIndex = useSelector((state: storeProps) => state.sale.tabIndex);
  const pageData = useSelector((state: storeProps) => state.sale.pageData);
  const [pageTitle, setPageTitle] = React.useState<string>("");

  const handleOnChangePageName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPageTitle(value);
  };

  const handleOnSaveDialogRenamePage = () => {
    dispatch(saleActions.handleOnUpdatePageTitleForTab(pageTitle));
    onClose();
  };

  const handleOnClearPageName = () => {
    setPageTitle("");
  };

  const handleOnUpdatePageNameAndFocus = () => {
    const findPageData = pageData.find((page) => page.tabId === tabIndex);

    if (findPageData?.pageName && inputRef.current) {
      setPageTitle(findPageData.pageName);
      inputRef.current.focus();
    }
  };

  return (
    <>
      <DialogStyled
        open={isOpenDialog}
        onTransitionEnter={handleOnUpdatePageNameAndFocus}
        onTransitionExited={handleOnClearPageName}
        maxWidth="sm"
        fullWidth
      >
        <ToolbarStyled>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>

          <DialogTitle component={"h6"} variant="h6">
            {title}
          </DialogTitle>

          <SaveButton onClick={handleOnSaveDialogRenamePage}>SAVE</SaveButton>
        </ToolbarStyled>

        <Container>
          <FormControlStyled fullWidth color="success" variant="standard">
            <InputLabel htmlFor="my-input" color="success">
              Page name
            </InputLabel>

            <Input
              value={pageTitle}
              onChange={handleOnChangePageName}
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
