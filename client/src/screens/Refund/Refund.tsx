import React, { useEffect } from "react";
import RefundReceipt from "./components/RefundReceipt/RefundReceipt";
import Receipt from "./components/Receipt/Receipt";
import ForwardIcon from "./components/ForwardIcon/ForwardIcon";
import DialogRefundQuantity, {
  FormValuesRefund,
} from "./components/DialogRefundQuantity/DialogRefundQuantity";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import Header from "./components/Header/Header";
import MobileListItem from "./components/MobileListItem/MobileListItem";
import MobileTotalAmount from "./components/MobileTotalAmount/MobileTotalAmount";
import { convertToNumber } from "../../utils/typescriptHelpers";
import {
  ContainerStyled,
  Grid2Styled,
  MobileButtonRefund,
  MobileList,
  MobileView,
} from "./RefundStyles";
import { useDialog } from "../../hooks/material-ui/useDialog/useDialog";
import { refundActions } from "../../store/refund-slice";
import { useNavigate, useParams } from "react-router-dom";
import { saleActions } from "../../store/sale-slice";

type RefundProps = {};
const Refund: React.FC<RefundProps> = (props) => {
  const {} = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams() as { receiptId: string };
  const purchasedItems = useSelector((state: storeProps) => state.sale.purchasedItems);
  const itemList = useSelector((state: storeProps) => state.item.itemList);
  const currentActiveShiftId = useSelector((state: storeProps) => state.shift.currentActiveShiftId);
  const shiftList = useSelector((state: storeProps) => state.shift.shiftList);
  const refundData = useSelector((state: storeProps) => state.refund.refundData);
  const refundedData = useSelector((state: storeProps) => state.refund.refundedData);
  const receiptId = useSelector((state: storeProps) => state.refund.receiptId);

  useEffect(() => {
    const filterPurchasedItemsById = purchasedItems
      .filter((item) => item.receiptId.toString() === params.receiptId)
      .map((item) => {
        return { itemId: item.id, refunded: false, refundCount: 0 };
      });

    dispatch(
      refundActions.initialRefundData({
        refundData: filterPurchasedItemsById,
        receiptId: convertToNumber("string", params.receiptId),
      })
    );

    return () => {
      dispatch(
        refundActions.initialRefundData({
          refundData: [],
          receiptId: 0,
        })
      );
      dispatch(
        refundActions.updateDialogQuantity({
          id: 0,
          quantity: 0,
          title: "",
        })
      );
    };
  }, []);

  const { handleCloseDialog, handleOpenDialog, isOpenDialog } = useDialog();

  const handleOnOpenDialog = (event: React.MouseEvent<HTMLDivElement>) => {
    const itemId = event.currentTarget.getAttribute("data-item-id");
    const itemName = event.currentTarget.getAttribute("data-item-name");
    const itemCount = event.currentTarget.getAttribute("data-item-count");

    const parsedItemCount = itemCount ? parseInt(itemCount) : 0;
    const parsedItemName = itemName ? itemName : "";

    // const totalRefundedCount = refundedData
    //   .filter((refunded) => refunded.itemId === item.id && refunded.receiptId === receiptId)
    //   .reduce((accumulator, refunded) => {
    //     accumulator = refunded.refundCount + accumulator;
    //     return accumulator;
    //   }, 0);

    if (!itemId) {
      console.log("itemId is missing");
      return;
    }

    if (parsedItemCount > 1) {
      const refundedCountLength = refundedData
        .filter(
          (refunded) =>
            refunded.itemId === parseInt(itemId) &&
            refunded.receiptId === parseInt(params.receiptId)
        )
        .reduce((accumulator, refunded) => {
          accumulator = refunded.refundCount + accumulator;
          return accumulator;
        }, 0);

      const refundCount = refundedCountLength
        ? parsedItemCount - refundedCountLength
        : parsedItemCount;

      dispatch(
        refundActions.updateDialogQuantity({
          id: parseInt(itemId),
          title: parsedItemName,
          quantity: refundCount,
        })
      );

      handleOpenDialog();
      return;
    }

    if (parsedItemCount === 1) {
      dispatch(
        refundActions.updateRefundItem({
          itemId: convertToNumber("string", itemId),
          refundCount: parsedItemCount,
          refunded: true,
        })
      );
      return;
    }
  };

  const handleOnSave = (data: FormValuesRefund) => {
    dispatch(
      refundActions.updateRefundItem({
        itemId: data.id,
        refundCount: convertToNumber("string", data.quantity),
        refunded: true,
      })
    );

    handleCloseDialog();
  };

  const handleRemoveRefundItem = (event: React.MouseEvent<HTMLDivElement>) => {
    const itemId = event.currentTarget.getAttribute("data-item-id");

    if (!itemId) {
      console.log("itemId is missing");
      return;
    }

    dispatch(
      refundActions.updateRefundItem({
        itemId: convertToNumber("string", itemId),
        refundCount: 0,
        refunded: false,
      })
    );
  };

  const handleRefundItem = () => {
    const findShiftById = shiftList.find((shift) => shift.id === currentActiveShiftId);

    if (!findShiftById) {
      console.log("shift id not found");
      return;
    }

    const totalPrice = refundData
      .filter((refund) => refund.refunded)
      .reduce((accumulator, refund) => {
        const findPurchasedItem = purchasedItems.find(
          (item) => item.receiptId === receiptId && item.id === refund.itemId
        );
        const totalPrice = refund.refundCount * parseFloat(findPurchasedItem?.price || "0");

        accumulator = totalPrice + accumulator;
        return accumulator;
      }, 0)
      .toFixed(2);

    const refundItemId = refundData
      .filter((refund) => refund.refundCount)
      .map((refund) => refund.itemId);

    const puchasedItemData = itemList
      .filter((item) => refundItemId.includes(item.id))
      .map((item) => {
        const findRefundByItemId = refundData.find((refund) => refund.itemId === item.id);

        const count = findRefundByItemId?.refundCount || 0;
        return {
          ...item,
          count: count,
          accumulatedPrice: (count * parseFloat(item.price)).toFixed(2),
        };
      });

    dispatch(refundActions.updateRefundedData());
    dispatch(
      saleActions.handleRefund({
        refundedReceiptId: receiptId,
        shiftId: findShiftById.id,
        cashReceived: totalPrice,
        totalAmount: totalPrice,
        changeGiven: "0.00",
        puchasedItemData: puchasedItemData,
      })
    );
    navigate("/receipt");
  };

  return (
    <>
      <Header title="Refund" onBackNavigation="../.." />

      <ContainerStyled maxWidth="lg">
        <Grid2Styled container spacing={2}>
          <Receipt onOpenDialog={handleOnOpenDialog} gridProps={{ size: 5.3 }} />
          <ForwardIcon gridProps={{ size: 1.4 }} />
          <RefundReceipt
            gridProps={{ size: 5.3 }}
            removeRefundItem={handleRemoveRefundItem}
            onRefundItem={handleRefundItem}
          />
        </Grid2Styled>

        <MobileView>
          <MobileList disablePadding>
            {Array.from({ length: 15 }).map((_, index, array) => {
              const currentCount = index + 1;
              const isShowDivider = array.length !== currentCount;
              const refundCount = currentCount === 3 ? 2 : 0;

              return (
                <MobileListItem
                  key={index}
                  onOpenDialog={handleOnOpenDialog}
                  data-item-name={"Item 1"}
                  data-item-count={2}
                  isShowDivider={isShowDivider}
                  refundCount={refundCount}
                />
              );
            })}
          </MobileList>
          <MobileTotalAmount primary="Total" secondary="₱0.02" />
          <MobileButtonRefund variant="contained" color="success" size="large" disableElevation>
            REFUND ₱0.02
          </MobileButtonRefund>
        </MobileView>
      </ContainerStyled>

      <DialogRefundQuantity
        isOpen={isOpenDialog}
        onClose={handleCloseDialog}
        onSave={handleOnSave}
      />
    </>
  );
};

export default Refund;
