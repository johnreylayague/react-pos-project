import { Grid2 as Grid } from "@mui/material";
import React from "react";
import assets from "../../../../assets/assets";
import { useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import CustomTabPanel from "../CustomTabPanel/CustomTabPanel";
import { BoxStyled } from "./MainTabContentStyles";
import ItemCard from "./ItemCard";
import PageCard from "./PageCard";
import HomeCard from "./HomeCard";
import FavoritePageCard from "./FavoritePageCard.tsx";
import FavoriteCard from "./FavoriteCard.tsx";

type TabContentProps = {
  onOpenDialogAddItemAndCategory: () => void;
  onInteractionHandlers: {
    onTouchStart?: () => void;
    onTouchEnd?: () => void;
    onTouchCancel?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseLeave?: () => void;
  };
};
const TabContent: React.FC<TabContentProps> = (props) => {
  const { onInteractionHandlers, onOpenDialogAddItemAndCategory } = props;

  const isEdit = useSelector((store: storeProps) => store.sale.isEdit);
  const tabIndex = useSelector((store: storeProps) => store.sale.tabIndex);
  const pageData = useSelector((store: storeProps) => store.sale.pageData);
  const itemList = useSelector((store: storeProps) => store.item.itemList);

  return (
    <BoxStyled>
      {!isEdit && (
        <>
          {/* Favorite */}
          <CustomTabPanel value={tabIndex} index={0}>
            <Grid container spacing={2}>
              {Array.from({ length: 40 }).map((_, index) => {
                return (
                  <ItemCard
                    key={index}
                    colorAndShapesData={assets.json.colorAndShapes}
                    favoriteData={assets.json.favoriteList}
                    onInteractionHandlers={onInteractionHandlers}
                    index={index}
                  />
                );
              })}
            </Grid>
          </CustomTabPanel>
          {/* Page Data */}
          {pageData.map((page) => {
            return (
              <CustomTabPanel key={page.id} value={tabIndex} index={page.tabId}>
                <Grid container spacing={2}>
                  {Array.from({ length: 40 }).map((_, index) => {
                    return (
                      <PageCard
                        key={index}
                        pageId={page.pageId}
                        colorAndShapesData={assets.json.colorAndShapes}
                        pageData={assets.json.pageData}
                        onInteractionHandlers={onInteractionHandlers}
                        index={index}
                      />
                    );
                  })}
                </Grid>
              </CustomTabPanel>
            );
          })}
          {/* Home */}
          <CustomTabPanel value={tabIndex} index={pageData.length + 1}>
            <Grid container spacing={2}>
              {assets.json.itemList.map((item) => {
                return (
                  <HomeCard
                    key={item.id}
                    colorAndShapes={assets.json.colorAndShapes}
                    itemName={item.itemName}
                    representationId={item.representationId}
                  />
                );
              })}
            </Grid>
          </CustomTabPanel>
        </>
      )}
      {isEdit && (
        <>
          <CustomTabPanel value={tabIndex} index={0}>
            <Grid container spacing={2}>
              {Array.from({ length: 40 }).map((_, index) => {
                return (
                  <FavoriteCard
                    key={index}
                    index={index}
                    colorAndShapesData={assets.json.colorAndShapes}
                    favoriteData={assets.json.favoriteList}
                    onOpenDialogAddItemAndCategory={onOpenDialogAddItemAndCategory}
                  />
                );
              })}
            </Grid>
          </CustomTabPanel>

          {pageData.map((page) => {
            return (
              <CustomTabPanel key={page.id} value={tabIndex} index={page.tabId}>
                <Grid container spacing={2}>
                  {Array.from({ length: 40 }).map((_page, index) => {
                    return (
                      <FavoritePageCard
                        key={index}
                        colorAndShapesData={assets.json.colorAndShapes}
                        index={index}
                        onOpenDialogAddItemAndCategory={onOpenDialogAddItemAndCategory}
                        pageData={assets.json.pageData}
                        pageId={page.pageId}
                      />
                    );
                  })}
                </Grid>
              </CustomTabPanel>
            );
          })}
        </>
      )}
    </BoxStyled>
  );
};

export default TabContent;
