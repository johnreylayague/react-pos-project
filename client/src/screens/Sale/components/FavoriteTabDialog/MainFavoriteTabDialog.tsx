import React from "react";
import { Toolbar, List } from "@mui/material";
import {
  CloseButton,
  DialogStyled,
  DialogTitle,
  TabsContainer,
} from "./MainFavoriteTabDialogStyles.ts";
import { Close as CloseIcon } from "@mui/icons-material";
import { useToggle } from "../../../../hooks/components/useToggle/useToggle.tsx";
import { useTabs } from "../../../../hooks/material-ui/useTabs/useTabs.tsx";
import CustomTabPanel from "../CustomTabPanel/CustomTabPanel.tsx";
import SearchMode from "./SearchMode.tsx";
import TabsMode from "./TabsMode.tsx";
import DetailedListItem from "./DetailedListItem.tsx";

type DialogAddItemAndCategoryProps = {
  onCloseDialog: () => void;
  isOpenDialog: boolean;
  isThemeMobileScreen: boolean;
};

const DialogAddItemAndCategory: React.FC<DialogAddItemAndCategoryProps> = (props) => {
  const { onCloseDialog, isOpenDialog, isThemeMobileScreen } = props;

  const {
    isOpenToggle: isOpenSearch,
    handleCloseToggle: handleCloseSearch,
    handleOpenToggle: handleOpenSearch,
  } = useToggle();

  const { tabIndex, handleTabChange } = useTabs();

  return (
    <>
      <DialogStyled open={isOpenDialog} fullScreen={isThemeMobileScreen} fullWidth maxWidth="sm">
        <Toolbar>
          <CloseButton onClick={onCloseDialog}>
            <CloseIcon />
          </CloseButton>

          <DialogTitle component={"h6"} variant={"h6"}>
            Add item to the page
          </DialogTitle>
        </Toolbar>

        <TabsContainer>
          {!isOpenSearch && (
            <TabsMode
              onOpenSearch={handleOpenSearch}
              onTabChange={handleTabChange}
              tabIndex={tabIndex}
            />
          )}
          {isOpenSearch && <SearchMode onCloseSearch={handleCloseSearch} />}
        </TabsContainer>

        <CustomTabPanel value={tabIndex} index={0}>
          <List disablePadding>
            {Array.from({ length: 3 }).map((_, index) => {
              return (
                <DetailedListItem
                  key={index}
                  label={`Item ${index}`}
                  itemPrice="1.00"
                  alt="alt name"
                  imageSrc=""
                />
              );
            })}
          </List>
        </CustomTabPanel>

        <CustomTabPanel value={tabIndex} index={1}>
          <List disablePadding>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <DetailedListItem
                  key={index}
                  label={`Item ${index}`}
                  categoryCount={index}
                  alt="alt name"
                  imageSrc=""
                />
              );
            })}
          </List>
        </CustomTabPanel>
      </DialogStyled>
    </>
  );
};

export default DialogAddItemAndCategory;
