import { createSlice } from "@reduxjs/toolkit";
import { itemListProps } from "./item-slice";
import { convertToNumber, convertToParseFloatToFixed } from "../utils/typescriptHelpers";
import { FormValuesSelectedItem } from "../screens/Sale/components/DialogSelectedItem/FormValues";
import { FormValuesCharge } from "../screens/Charge/FormValues";
import { FormValuesSale } from "../screens/Pay/Pay";
import { generateRandomId } from "../utils/generateId";
import { refundDataProps } from "./refund-slice";

export type pageDataProps = {
  id: number;
  pageName: string;
  tabId: number;
  pageId: number;
};

export type purchasedItems = {
  id: number; //ticket
  receiptId: number;
  name: string;
  categoryId: number | string;
  soldby: string;
  price: string;
  cost: string;
  sku: string;
  barcode: string;
  trackstock: boolean;
  isSelected: boolean;
  representation: "colorAndShape" | "image";
  colorAndShapeImage: string;
  image: string;
  colorId: number | string;
  shapeId: number | string;
  instock: number;
  count: number; //ticket
  accumulatedPrice: string; //ticket
  comment: string; //ticket
  ticketId: number; //ticket
};

export type ticket = {
  id: number; //ticket
  name: string;
  categoryId: number | string;
  soldby: string;
  price: string;
  cost: string;
  sku: string;
  barcode: string;
  trackstock: boolean;
  isSelected: boolean;
  representation: "colorAndShape" | "image";
  colorAndShapeImage: string;
  image: string;
  colorId: number | string;
  shapeId: number | string;
  instock: number;
  count: number; //ticket
  accumulatedPrice: string; //ticket
  comment: string; //ticket
  ticketId: number; //ticket
};

export type favorite = {
  id: number;
  itemId: number | string;
  categoryId: number | string;
  sequenceId: number;
  pageId: number;
};

export type receipt = {
  id: number;
  shiftId: number;
  receiptNumber: number;
  totalAmount: string;
  cashReceived: string;
  changeGiven: string;
  refundedReceiptId: number;
  refunded: boolean;
  transactionDate: string;
};

export type initialSaleState = {
  isSsearch: boolean;
  isEdit: boolean;
  tabIndex: number;
  calculatedChange: string;
  searchInputValue: string;
  selectedCategoryId: string | number;
  cashReceived: string;
  pageData: pageDataProps[];
  ticket: ticket[];
  purchasedItems: purchasedItems[];
  receipt: receipt[];
  favorite: favorite[];
  selectedListId: string | number;
  selectedMenu: { id: number | string; text: string };
};

const saleSlice = createSlice({
  name: "sale",
  initialState: {
    selectedCategoryId: "",
    isSsearch: false,
    searchInputValue: "",
    isEdit: false,
    tabIndex: 1,
    selectedListId: "",
    receipt: [
      {
        id: 9945106,
        shiftId: 2257221,
        receiptNumber: 1000,
        totalAmount: "12.00",
        cashReceived: "12.00",
        changeGiven: "0.00",
        refunded: false,
        refundedReceiptId: 0,
        transactionDate: "2024-05-15T18:51:28.466Z",
      },
      {
        id: 9945103,
        shiftId: 2257221,
        receiptNumber: 1001,
        totalAmount: "96.00",
        cashReceived: "96.00",
        changeGiven: "0.00",
        refunded: false,
        refundedReceiptId: 0,
        transactionDate: "2024-05-15T18:51:28.466Z",
      },
    ],
    selectedMenu: {
      id: "",
      text: "All Items",
    },
    calculatedChange: "",
    cashReceived: "",
    pageData: [],
    ticket: [],
    purchasedItems: [
      {
        id: 1,
        name: "Candy",
        price: "12.00",
        categoryId: "",
        soldby: "each",
        cost: "3.00",
        sku: "3",
        barcode: "123",
        colorAndShapeImage: "/src/assets/images/shapes/Apple/Circle.png",
        image: "",
        trackstock: true,
        representation: "colorAndShape",
        instock: 1,
        colorId: 6,
        shapeId: 2,
        sequenceId: 2,
        isSelected: false,
        count: 1,
        accumulatedPrice: "12.00",
        comment: "",
        ticketId: 2,
        receiptId: 9945106,
      },
      {
        id: 2,
        name: "Sugar",
        price: "24.00",
        categoryId: 1,
        soldby: "weight",
        cost: "24.00",
        sku: "123",
        barcode: "123",
        colorAndShapeImage: "/src/assets/images/shapes/DarkOrchid/Square.png",
        image: "",
        trackstock: true,
        representation: "colorAndShape",
        instock: 5,
        colorId: 8,
        shapeId: 1,
        isSelected: false,
        count: 4,
        accumulatedPrice: "96",
        comment: "",
        ticketId: 1,
        receiptId: 9945103,
      },
    ],
    favorite: [
      {
        id: 1,
        itemId: 1,
        categoryId: "",
        sequenceId: 2,
        pageId: 0,
      },
      {
        id: 2,
        itemId: 2,
        categoryId: "",
        sequenceId: 5,
        pageId: 0,
      },
    ],
  } as initialSaleState,
  reducers: {
    updateSelectedCategoryId: (state, action: { payload: number | string }) => {
      const payload = action.payload;

      state.selectedCategoryId = payload;
    },
    removeSelectedFavorite: (state, action: { payload: number }) => {
      const payload = action.payload;

      state.favorite = state.favorite.filter((favorite) => favorite.id !== payload);
    },
    updateSelectedhehe: (
      state,
      action: {
        payload: {
          itemId: number | string;
          categoryId: number | string;
          sequenceId: number;
          pageId: number;
        };
      }
    ) => {
      const itemId = action.payload.itemId;
      const categoryId = action.payload.categoryId;
      const sequenceId = action.payload.sequenceId;
      const pageId = action.payload.pageId;

      state.favorite.push({
        id: Math.random(),
        itemId: itemId,
        sequenceId: sequenceId,
        categoryId: categoryId,
        pageId: pageId,
      });
    },
    updateSelectedMenu(state, action: { payload: { id: number | string; text: string } }) {
      const payload = action.payload;

      state.selectedMenu = payload;
    },
    updateSelectedListId(state, action: { payload: number }) {
      state.selectedListId = action.payload;
    },
    updateSearchInputValue(state, action: { payload: string }) {
      state.searchInputValue = action.payload;
    },
    clearTicket(state) {
      state.ticket = [];
    },
    updateChange(state, action: { payload: FormValuesCharge }) {
      const { cashReceived, totalAmountDue } = action.payload;

      const calculatedChange = parseFloat(cashReceived) - parseFloat(totalAmountDue);

      state.calculatedChange = calculatedChange.toFixed(2);
      state.cashReceived = cashReceived;
    },
    buttonQuantity(
      state,
      action: { payload: { data: FormValuesSelectedItem; type: "increase" | "decrease" } }
    ) {
      const itemData = action.payload.data;
      const type = action.payload.type;

      const findTicketById = state.ticket.findIndex((ticket) => ticket.id === itemData.id);

      const convertCount = convertToNumber("string", itemData.count);

      const decreaseCount = convertCount ? convertCount - 1 : 0;

      const updateCount = type === "increase" ? convertCount + 1 : decreaseCount;

      const accumulatedPriceTimes = (parseFloat(itemData.price) * updateCount).toString();

      state.ticket[findTicketById] = {
        ...state.ticket[findTicketById],
        count: updateCount,
        accumulatedPrice: accumulatedPriceTimes,
      };
    },
    updateSelectedItemId(state, action: { payload: FormValuesSelectedItem }) {
      const ticketData = action.payload;

      const findIndexByItemId = state.ticket.findIndex((ticket) => ticket.id === ticketData.id);

      const convertedId = convertToNumber("string", ticketData.id);
      const convertedCount = convertToNumber("string", ticketData.count);

      if (convertedCount === 0) {
        state.ticket = state.ticket.filter((ticket) => ticket.id !== ticketData.id);
        return;
      }

      const accumulatedPriceTimes = (parseFloat(ticketData.price) * convertedCount).toString();

      state.ticket[findIndexByItemId] = {
        ...state.ticket[findIndexByItemId],
        id: convertedId,
        count: convertedCount,
        comment: ticketData.comment,
        accumulatedPrice: accumulatedPriceTimes,
      };
    },
    addItemOnTicket(state, action: { payload: itemListProps }) {
      const itemList = action.payload;

      const findByItemId = state.ticket.find((ticket) => ticket.id === itemList.id);

      if (!findByItemId) {
        const ticketId = state.ticket.length + 1;

        state.ticket.push({
          ...itemList,
          count: 1,
          accumulatedPrice: itemList.price,
          comment: "",
          ticketId: ticketId,
        });
        return;
      }

      const updatedCount = findByItemId.count + 1;

      const findIndexByItemId = state.ticket.findIndex((ticket) => ticket.id === findByItemId.id);

      const cc = (parseFloat(findByItemId.price) * updatedCount).toString();

      state.ticket[findIndexByItemId] = {
        ...findByItemId,
        count: updatedCount,
        accumulatedPrice: cc,
      };
    },
    handleOnOpenSearch(state) {
      state.isSsearch = true;
    },
    handleOnCloseSearch(state) {
      state.isSsearch = false;
    },
    handleOnOpenEdit(state) {
      state.isEdit = true;
    },
    handleOnCloseEdit(state) {
      state.isEdit = false;
    },
    handleOnChangeTab(state, action) {
      state.tabIndex = action.payload;
    },
    handleOnAddNewTabPage(state) {
      const prevPageData = state.pageData;

      const nextTabIndex = prevPageData.length + 1;

      const existingPageIds = prevPageData.map((page) => page.pageId);

      const availablePageIds = Array.from({ length: 5 }, (_, index) => index + 2).filter(
        (pageId) => !existingPageIds.includes(pageId)
      );

      const smallestAvailablePageId = Math.min(...availablePageIds);

      const newPage = {
        id: Math.random(),
        pageName: `Page ${smallestAvailablePageId}`,
        pageId: smallestAvailablePageId,
        tabId: nextTabIndex,
      };

      const updatedPageList = [...prevPageData, newPage];

      state.pageData = updatedPageList;
    },
    handleOnRemoveTabPage(state) {
      const prevPageData = state.pageData;

      const pageId = prevPageData.find((page) => page.tabId === state.tabIndex)?.pageId || 0;
      const updatedFavorite = (state.favorite = state.favorite.filter(
        (favorite) => favorite.pageId !== pageId
      ));

      const deletedItemIndex = prevPageData.findIndex((page) => page.tabId === state.tabIndex);
      const filteredPage = prevPageData.filter((page) => page.tabId !== state.tabIndex);
      const updatedState = filteredPage.map((page, index) => {
        const rowCount = index + 1;
        return { ...page, tabId: rowCount };
      });

      const finalIndex = Math.max(deletedItemIndex, 0);

      state.favorite = updatedFavorite;
      state.tabIndex = finalIndex;
      state.pageData = updatedState;
    },
    handleOnUpdatePageTitleForTab(state, action: { payload: string }) {
      const prevPageData = state.pageData;
      const newPageTitle = action.payload;

      const updatedPageList = prevPageData.map((page) => {
        if (state.tabIndex === page.tabId) {
          return { ...page, pageName: newPageTitle };
        }
        return { ...page };
      });

      state.pageData = updatedPageList;
    },
    handleOnShiftPage(state, action: { payload: "left" | "right" }) {
      const prevPageData = state.pageData;
      const tabIndex = state.tabIndex;
      const value = action.payload;

      const findTabIndex = prevPageData.findIndex((page) => page.tabId === tabIndex);
      const RowIndex = prevPageData.find((page) => page.tabId === tabIndex);
      let filteredTabIndex = prevPageData.filter((page) => tabIndex !== page.tabId);

      if (!RowIndex) {
        console.log("connot find index");
      }

      if (RowIndex) {
        const startIndex = value === "left" ? findTabIndex - 1 : findTabIndex + 1;
        filteredTabIndex.splice(startIndex, 0, RowIndex);
      }

      const updatedState = filteredTabIndex.map((page, index) => {
        return { ...page, tabId: index + 1 };
      });

      const updatedTabIndex = value === "left" ? findTabIndex : findTabIndex + 2;

      state.tabIndex = updatedTabIndex;
      state.pageData = updatedState;
    },
    handleNewSale(state, action: { payload: FormValuesSale }) {
      const { shiftId } = action.payload;

      const generatedId = Math.floor(Math.random() * 10000000);

      const receiptNumber =
        state.receipt.filter((receipt) => receipt.shiftId === shiftId).length + 1000;

      const dateToday = new Date();

      if (!shiftId) {
        console.log("shiftId not found");
        return;
      }

      const totalPrice = state.ticket
        .reduce((accumulator, ticket) => {
          accumulator = parseFloat(ticket.accumulatedPrice) + accumulator;
          return accumulator;
        }, 0)
        .toFixed(2);

      const newReceipt: receipt = {
        id: generatedId,
        shiftId: shiftId,
        receiptNumber: receiptNumber,
        totalAmount: totalPrice,
        cashReceived: state.cashReceived,
        changeGiven: state.calculatedChange,
        refunded: false,
        refundedReceiptId: 0,
        transactionDate: dateToday.toISOString(),
      };

      const purchasedItems: purchasedItems[] = state.ticket.map((ticket) => {
        return { ...ticket, receiptId: generatedId };
      });

      state.purchasedItems.push(...purchasedItems);
      state.receipt.push(newReceipt);
      state.ticket = [];
    },
    handleRefund(
      state,
      action: {
        payload: {
          shiftId: number;
          refundedReceiptId: number;
          totalAmount: string;
          cashReceived: string;
          changeGiven: string;
          puchasedItemData: {
            id: number;
            name: string;
            categoryId: number | string;
            soldby: string;
            price: string;
            cost: string;
            sku: string;
            barcode: string;
            trackstock: boolean;
            isSelected: boolean;
            representation: "colorAndShape" | "image";
            colorAndShapeImage: string;
            image: string;
            colorId: number | string;
            shapeId: number | string;
            instock: number;
            sequenceId: number | string;
            count: number;
            accumulatedPrice: string;
          }[];
        };
      }
    ) {
      const {
        totalAmount,
        cashReceived,
        shiftId,
        changeGiven,
        puchasedItemData,
        refundedReceiptId,
      } = action.payload;

      const dateToday = new Date();

      const receiptNumber =
        state.receipt.filter((receipt) => receipt.shiftId === shiftId).length + 1000;

      const receiptId = generateRandomId();

      // usaba ni, try single row ra ang e insert then update nlng
      const newReceipt: receipt = {
        id: receiptId,
        shiftId: shiftId,
        receiptNumber: receiptNumber,
        totalAmount: totalAmount,
        cashReceived: cashReceived,
        changeGiven: changeGiven,
        refunded: true,
        refundedReceiptId: refundedReceiptId,
        transactionDate: dateToday.toISOString(),
      };

      const purchasedItems = puchasedItemData.map((item, index) => {
        const rowCount = index + 1;
        return { ...item, receiptId: receiptId, ticketId: rowCount, comment: "" };
      });

      state.purchasedItems.push(...purchasedItems);

      state.receipt.push(newReceipt);
    },
  },
});

export const saleActions = saleSlice.actions;

export default saleSlice;
