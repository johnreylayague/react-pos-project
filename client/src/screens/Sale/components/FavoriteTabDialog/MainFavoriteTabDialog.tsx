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
import DetailedListCategory from "./DetailedListCategory.tsx";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store/index.ts";
import assets from "../../../../assets/assets.ts";

const colorData = assets.json.colorData;

type DialogAddItemAndCategoryProps = {
  onSelectedItem: (event: React.MouseEvent<HTMLDivElement>) => void;
  onAddCategory: (event: React.MouseEvent<HTMLDivElement>) => void;
  onCloseDialog: () => void;
  isOpenDialog: boolean;
  isThemeMobileScreen: boolean;
};

const DialogAddItemAndCategory: React.FC<DialogAddItemAndCategoryProps> = (props) => {
  const { onCloseDialog, isOpenDialog, isThemeMobileScreen, onSelectedItem, onAddCategory } = props;

  const itemList = useSelector((state: storeProps) => state.item.itemList);
  const categoryList = useSelector((state: storeProps) => state.category.categoryList);

  const {
    isOpenToggle: isOpenSearch,
    handleCloseToggle: handleCloseSearch,
    handleOpenToggle: handleOpenSearch,
  } = useToggle();

  const { tabIndex, handleTabChange } = useTabs();

  const updatedCategoryList = categoryList.map((category) => {
    const itemCount = itemList.filter((item) => item.categoryId === category.id).length;
    const colorImage = colorData.find((color) => color.id === category.colorId)?.image;
    return { ...category, itemCount: itemCount, image: colorImage };
  });

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
            {itemList.map((item) => {
              return (
                <DetailedListItem
                  key={item.id}
                  onSelectedItem={onSelectedItem}
                  itemId={item.id}
                  itemName={item.name}
                  itemPrice={item.price}
                  itemImageSrc={item.image}
                  itemColorAndShapeImage={item.colorAndShapeImage}
                  itemRepresentation={item.representation}
                />
              );
            })}
          </List>
        </CustomTabPanel>

        <CustomTabPanel value={tabIndex} index={1}>
          <List disablePadding>
            {updatedCategoryList.map((category) => {
              return (
                <DetailedListCategory
                  key={category.id}
                  categoryId={category.id}
                  onAddCategory={onAddCategory}
                  categoryName={category.name}
                  categoryImage={category.image}
                  categoryItemCount={category.itemCount}
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
