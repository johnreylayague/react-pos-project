import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import React from "react";
import assets from "../../../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../../../store";
import CustomTabPanel from "../CustomTabPanel/CustomTabPanel";
import { BoxStyled, ResultMessage } from "./MainTabContentStyles";
import ItemCard from "./ItemCard";
import FavoriteCard from "./FavoriteCard.tsx";
import CategoryCard from "./CategoryCard.tsx";
import { saleActions } from "../../../../store/sale-slice.ts";
import { convertToNumber } from "../../../../utils/typescriptHelpers.ts";
import HomeItem from "./HomeItem.tsx";
import CategoryCardOne from "./CategoryCardOne.tsx";
import ContainedButton from "../../../../components/common/elements/Button/ContainedButton/ContainedButton.tsx";
import { Link } from "react-router-dom";
import { useInteractionHandler } from "../../../../hooks/Sale/useInteractionHandler.tsx";

const listData = assets.json.listData;
const colorData = assets.json.colorData;

type TabContentProps = {
  onOpenDialogAddItemAndCategory: () => void;
  onAddItem: (sequenceId: number) => void;
  onCategory: (selectedCategoryId: number) => void;
};
const TabContent: React.FC<TabContentProps> = (props) => {
  const { onOpenDialogAddItemAndCategory, onCategory, onAddItem } = props;

  const dispatch = useDispatch();
  const isEdit = useSelector((store: storeProps) => store.sale.isEdit);
  const isSearch = useSelector((store: storeProps) => store.sale.isSsearch);
  const tabIndex = useSelector((store: storeProps) => store.sale.tabIndex);
  const searchInputValue = useSelector((store: storeProps) => store.sale.searchInputValue);
  const pageData = useSelector((store: storeProps) => store.sale.pageData);
  const itemList = useSelector((store: storeProps) => store.item.itemList);
  const selectedMenu = useSelector((store: storeProps) => store.sale.selectedMenu);
  const favorite = useSelector((store: storeProps) => store.sale.favorite);
  const selectedCategoryId = useSelector((store: storeProps) => store.sale.selectedCategoryId);
  const categoryList = useSelector((store: storeProps) => store.category.categoryList);

  const { handleOnMouseDown, handleOnMouseLeave, handleOnMouseUp } =
    useInteractionHandler(dispatch);

  const handleOnAddItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.getAttribute("data-item-id");

    if (!id) {
      // error message
      return;
    }

    const convertedId = convertToNumber("string", id);

    const findItemById = itemList.find((item) => item.id === convertedId);

    if (!findItemById) {
      // error message
      return;
    }

    dispatch(saleActions.addItemOnTicket(findItemById));
  };

  const handleOnAddTicketItem = (itemId: number) => {
    if (!itemId) {
      // error message
      return;
    }

    const convertedId = convertToNumber("string", itemId);

    const findItemById = itemList.find((item) => item.id === convertedId);

    if (!findItemById) {
      // error message
      return;
    }

    dispatch(saleActions.addItemOnTicket(findItemById));
  };

  const handleOnRemoveCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const favoriteId = event.currentTarget.getAttribute("data-favorite-id");

    if (!favoriteId) {
      // errormessage here
      return;
    }

    const convertedFavoriteId = convertToNumber("string", favoriteId);

    dispatch(saleActions.removeSelectedFavorite(convertedFavoriteId));
  };

  const handleOnRemoveItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    const itemId = event.currentTarget.getAttribute("data-item-id");

    if (!itemId) {
      // errormessage here
      return;
    }

    const convertedItemId = convertToNumber("string", itemId);

    dispatch(saleActions.removeSelectedFavorite(convertedItemId));
  };

  const isNotLastTab = tabIndex !== pageData.length + 1;

  return (
    <BoxStyled>
      {!isEdit && (
        <>
          {/* Favorite */}
          <CustomTabPanel value={tabIndex} index={0}>
            <Grid container spacing={2}>
              {!isSearch &&
                !selectedCategoryId &&
                listData.map((list) => {
                  const findFavoriteById = favorite.find(
                    (favor) => favor.sequenceId === list.id && favor.pageId === 0
                  );

                  const findItemById = itemList.find(
                    (item) => item.id === findFavoriteById?.itemId
                  );

                  const findCategoryById = categoryList.find(
                    (category) => category.id === findFavoriteById?.categoryId
                  );

                  if (findCategoryById) {
                    const image = colorData.find(
                      (color) => color.id === findCategoryById?.colorId
                    )?.image;

                    return (
                      <CategoryCardOne
                        key={list.id}
                        sequenceId={list.id}
                        categoryId={findCategoryById.id}
                        itemName={findCategoryById.name}
                        itemRepresentation={""}
                        itemColorAndShapeImage={""}
                        itemImage={image}
                        onCategory={onCategory}
                        onMouseDown={handleOnMouseDown}
                        onMouseLeave={handleOnMouseLeave}
                        onMouseUp={handleOnMouseUp}
                      />
                    );
                  }

                  if (findItemById) {
                    return (
                      <ItemCard
                        key={list.id}
                        sequenceId={list.id}
                        itemName={findItemById.name}
                        itemRepresentation={findItemById.representation}
                        itemColorAndShapeImage={findItemById.colorAndShapeImage}
                        itemImage={findItemById.image}
                        itemId={findItemById.id}
                        onMouseDown={handleOnMouseDown}
                        onMouseLeave={handleOnMouseLeave}
                        onMouseUp={handleOnMouseUp}
                        onAddTicketItem={handleOnAddTicketItem}
                      />
                    );
                  }

                  return (
                    <ItemCard
                      key={list.id}
                      sequenceId={list.id}
                      itemName={""}
                      itemRepresentation={""}
                      itemColorAndShapeImage={""}
                      itemImage={""}
                      onMouseDown={handleOnMouseDown}
                      onMouseLeave={handleOnMouseLeave}
                      onMouseUp={handleOnMouseUp}
                    />
                  );
                })}

              {isSearch && isNotLastTab && searchInputValue && (
                <>
                  {itemList
                    .filter((item) =>
                      item.name.toLowerCase().includes(searchInputValue.toLowerCase())
                    )
                    .map((item) => {
                      return (
                        <ItemCard
                          key={item.id}
                          sequenceId={item.id}
                          itemName={item.name}
                          itemRepresentation={item.representation}
                          itemColorAndShapeImage={item.colorAndShapeImage}
                          itemImage={item.image}
                          itemId={item.id}
                          onAddTicketItem={handleOnAddTicketItem}
                        />
                      );
                    })}
                  {itemList.filter((item) =>
                    item.name.toLowerCase().includes(searchInputValue.toLowerCase())
                  ).length === 0 && <>No items found.</>}
                </>
              )}

              {selectedCategoryId && (
                <>
                  {itemList.filter(
                    (item) => item.categoryId === convertToNumber("string", selectedCategoryId)
                  ).length !== 0 &&
                    itemList
                      .filter(
                        (item) => item.categoryId == convertToNumber("string", selectedCategoryId)
                      )
                      .map((item) => {
                        return (
                          <ItemCard
                            key={item.id}
                            sequenceId={item.id}
                            itemName={item.name}
                            itemRepresentation={item.representation}
                            itemColorAndShapeImage={item.colorAndShapeImage}
                            itemImage={item.image}
                            itemId={item.id}
                            onAddTicketItem={handleOnAddTicketItem}
                          />
                        );
                      })}
                  {itemList.filter(
                    (item) => item.categoryId === convertToNumber("string", selectedCategoryId)
                  ).length === 0 && <>No items found.</>}
                </>
              )}
            </Grid>
          </CustomTabPanel>
          {/* Page Data */}
          {pageData.map((page) => {
            return (
              <CustomTabPanel key={page.id} value={tabIndex} index={page.tabId}>
                <Grid container spacing={2}>
                  {!isSearch &&
                    !selectedCategoryId &&
                    listData.map((list) => {
                      const findFavoriteById = favorite.find(
                        (favor) => favor.sequenceId === list.id && favor.pageId === page.pageId
                      );
                      const findItemById = itemList.find(
                        (item) => item.id === findFavoriteById?.itemId
                      );
                      const findCategoryById = categoryList.find(
                        (category) => category.id === findFavoriteById?.categoryId
                      );

                      if (findCategoryById) {
                        const image = colorData.find(
                          (color) => color.id === findCategoryById?.colorId
                        )?.image;

                        return (
                          <CategoryCardOne
                            key={list.id}
                            sequenceId={list.id}
                            categoryId={findCategoryById.id}
                            itemName={findCategoryById.name}
                            itemRepresentation={""}
                            itemColorAndShapeImage={""}
                            itemImage={image}
                            onCategory={onCategory}
                            onMouseDown={handleOnMouseDown}
                            onMouseLeave={handleOnMouseLeave}
                            onMouseUp={handleOnMouseUp}
                          />
                        );
                      }

                      if (findItemById) {
                        return (
                          <ItemCard
                            key={list.id}
                            sequenceId={list.id}
                            itemName={findItemById.name}
                            itemRepresentation={findItemById.representation}
                            itemColorAndShapeImage={findItemById.colorAndShapeImage}
                            itemImage={findItemById.image}
                            itemId={findItemById.id}
                            onMouseDown={handleOnMouseDown}
                            onMouseLeave={handleOnMouseLeave}
                            onMouseUp={handleOnMouseUp}
                            onAddTicketItem={handleOnAddTicketItem}
                          />
                        );
                      }

                      return (
                        <ItemCard
                          key={list.id}
                          sequenceId={list.id}
                          itemName={""}
                          itemRepresentation={""}
                          itemColorAndShapeImage={""}
                          itemImage={""}
                          onMouseDown={handleOnMouseDown}
                          onMouseLeave={handleOnMouseLeave}
                          onMouseUp={handleOnMouseUp}
                        />
                      );
                    })}

                  {isSearch && isNotLastTab && searchInputValue && (
                    <>
                      {itemList
                        .filter((item) =>
                          item.name.toLowerCase().includes(searchInputValue.toLowerCase())
                        )
                        .map((item) => {
                          return (
                            <ItemCard
                              key={item.id}
                              sequenceId={item.id}
                              itemName={item.name}
                              itemRepresentation={item.representation}
                              itemColorAndShapeImage={item.colorAndShapeImage}
                              itemImage={item.image}
                              itemId={item.id}
                              onAddTicketItem={handleOnAddTicketItem}
                            />
                          );
                        })}
                      {itemList.filter((item) =>
                        item.name.toLowerCase().includes(searchInputValue.toLowerCase())
                      ).length === 0 && <>No items found.</>}
                    </>
                  )}

                  {selectedCategoryId && (
                    <>
                      {itemList.filter(
                        (item) => item.categoryId === convertToNumber("string", selectedCategoryId)
                      ).length !== 0 &&
                        itemList
                          .filter(
                            (item) =>
                              item.categoryId == convertToNumber("string", selectedCategoryId)
                          )
                          .map((item) => {
                            return (
                              <ItemCard
                                key={item.id}
                                sequenceId={item.id}
                                itemName={item.name}
                                itemRepresentation={item.representation}
                                itemColorAndShapeImage={item.colorAndShapeImage}
                                itemImage={item.image}
                                itemId={item.id}
                                onAddTicketItem={handleOnAddTicketItem}
                              />
                            );
                          })}
                      {itemList.filter(
                        (item) => item.categoryId === convertToNumber("string", selectedCategoryId)
                      ).length === 0 && <>No items found.</>}
                    </>
                  )}
                </Grid>
              </CustomTabPanel>
            );
          })}
          {/* Home */}
          <CustomTabPanel value={tabIndex} index={pageData.length + 1}>
            {itemList.length === 0 && (
              <Box
                sx={(theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    height: "calc(100dvh - 136px)",
                  },
                  height: "calc(100dvh - 144px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
                <Stack spacing={2} sx={() => ({ alignItems: "center" })}>
                  <Typography
                    component={"div"}
                    variant="h6"
                    sx={(theme) => ({ color: theme.palette.action.active })}
                  >
                    You have no items yet
                  </Typography>
                  <Typography
                    component={"div"}
                    variant="body1"
                    sx={(theme) => ({ color: theme.palette.action.active })}
                  >
                    Go to items menu to add an item
                  </Typography>
                  <ContainedButton fullWidth={false} component={Link} to={"/item"}>
                    GO TO ITEMS
                  </ContainedButton>
                </Stack>
              </Box>
            )}
            {itemList.length !== 0 && (
              <Grid container spacing={2}>
                {selectedMenu.id === "" && (
                  <React.Fragment>
                    {itemList
                      .filter((item) =>
                        item.name.toLowerCase().includes(searchInputValue.toLowerCase())
                      )
                      .map((item) => {
                        return (
                          <HomeItem
                            key={item.id}
                            itemId={item.id}
                            itemColorAndShapeImage={item.colorAndShapeImage}
                            itemImage={item.image}
                            itemName={item.name}
                            itemRepresentation={item.representation}
                            onAddItem={handleOnAddItem}
                          />
                        );
                      })}

                    {itemList.filter((item) =>
                      item.name.toLowerCase().includes(searchInputValue.toLowerCase())
                    ).length === 0 && (
                      <ResultMessage variant="body1" component={"div"}>
                        No existing items found.
                      </ResultMessage>
                    )}
                  </React.Fragment>
                )}

                {selectedMenu.id !== "" && (
                  <React.Fragment>
                    {itemList
                      .filter(
                        (item) =>
                          item.categoryId === selectedMenu.id &&
                          item.name.toLowerCase().includes(searchInputValue.toLowerCase())
                      )
                      .map((item) => {
                        return (
                          <HomeItem
                            key={item.id}
                            itemId={item.id}
                            itemColorAndShapeImage={item.colorAndShapeImage}
                            itemImage={item.image}
                            itemName={item.name}
                            itemRepresentation={item.representation}
                            onAddItem={handleOnAddItem}
                          />
                        );
                      })}

                    {itemList.filter(
                      (item) =>
                        item.categoryId === selectedMenu.id &&
                        item.name.toLowerCase().includes(searchInputValue.toLowerCase())
                    ).length === 0 && (
                      <ResultMessage variant="body1" component={"div"}>
                        No existing items found.
                      </ResultMessage>
                    )}
                  </React.Fragment>
                )}
              </Grid>
            )}
          </CustomTabPanel>
        </>
      )}
      {isEdit && (
        <React.Fragment>
          <CustomTabPanel value={tabIndex} index={0}>
            <Grid container spacing={2}>
              {listData.map((list) => {
                const findFavoriteById = favorite.find(
                  (favor) => favor.sequenceId === list.id && favor.pageId === 0
                );

                const findItemById = itemList.find((item) => item.id === findFavoriteById?.itemId);

                const findCategoryById = categoryList.find(
                  (category) => category.id === findFavoriteById?.categoryId
                );

                const sequenceId = convertToNumber("string", findFavoriteById?.sequenceId);

                if (findItemById) {
                  return (
                    <FavoriteCard
                      key={list.id}
                      sequenceId={sequenceId}
                      favoriteId={findFavoriteById?.id}
                      itemName={findItemById.name}
                      itemRepresentation={findItemById.representation}
                      itemColorAndShapeImage={findItemById.colorAndShapeImage}
                      itemImage={findItemById.image}
                      onRemoveItem={handleOnRemoveItem}
                      onOpenDialogAddItemAndCategory={onOpenDialogAddItemAndCategory}
                    />
                  );
                }

                if (findCategoryById) {
                  const image = colorData.find(
                    (color) => color.id === findCategoryById?.colorId
                  )?.image;

                  return (
                    <CategoryCard
                      key={list.id}
                      favoriteId={findFavoriteById?.id}
                      sequenceId={sequenceId}
                      itemName={findCategoryById.name}
                      itemImage={image}
                      onRemoveCategory={handleOnRemoveCategory}
                    />
                  );
                }

                return (
                  <FavoriteCard
                    key={list.id}
                    sequenceId={list.id}
                    itemName={""}
                    itemRepresentation={""}
                    itemColorAndShapeImage={""}
                    itemImage={""}
                    onAddItem={onAddItem}
                  />
                );
              })}
            </Grid>
          </CustomTabPanel>

          {pageData.map((page) => {
            return (
              <CustomTabPanel key={page.id} value={tabIndex} index={page.tabId}>
                <Grid container spacing={2}>
                  {listData.map((list) => {
                    const findFavoriteById = favorite.find(
                      (favor) => favor.sequenceId === list.id && favor.pageId === page.pageId
                    );
                    const findItemById = itemList.find(
                      (item) => item.id === findFavoriteById?.itemId
                    );
                    const findCategoryById = categoryList.find(
                      (category) => category.id === findFavoriteById?.categoryId
                    );

                    const sequenceId = convertToNumber("string", findFavoriteById?.sequenceId);

                    if (findItemById) {
                      return (
                        <FavoriteCard
                          key={list.id}
                          sequenceId={sequenceId}
                          favoriteId={findFavoriteById?.id}
                          itemName={findItemById.name}
                          itemRepresentation={findItemById.representation}
                          itemColorAndShapeImage={findItemById.colorAndShapeImage}
                          itemImage={findItemById.image}
                          onRemoveItem={handleOnRemoveItem}
                          onOpenDialogAddItemAndCategory={onOpenDialogAddItemAndCategory}
                        />
                      );
                    }

                    if (findCategoryById) {
                      const image = colorData.find(
                        (color) => color.id === findCategoryById?.colorId
                      )?.image;

                      return (
                        <CategoryCard
                          key={list.id}
                          favoriteId={findFavoriteById?.id}
                          sequenceId={sequenceId}
                          itemName={findCategoryById.name}
                          itemImage={image}
                          onRemoveCategory={handleOnRemoveCategory}
                        />
                      );
                    }

                    return (
                      <FavoriteCard
                        key={list.id}
                        sequenceId={list.id}
                        itemName={""}
                        itemRepresentation={""}
                        itemColorAndShapeImage={""}
                        itemImage={""}
                        onAddItem={onAddItem}
                      />
                    );
                  })}
                </Grid>
              </CustomTabPanel>
            );
          })}
        </React.Fragment>
      )}
    </BoxStyled>
  );
};

export default TabContent;
