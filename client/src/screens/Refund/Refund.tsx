import React from "react";
import {
  Container,
  Grid2,
  styled,
  Theme,
  ContainerProps,
  Grid2Props,
  CSSObject,
  List,
  Box,
  Button,
  BoxProps,
  ListProps,
  ButtonProps,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import RefundReceipt from "./components/RefundReceipt/RefundReceipt";
import Receipt from "./components/Receipt/Receipt";
import ForwardIcon from "./components/ForwardIcon/ForwardIcon";
import DialogRefundQuantity from "./components/DialogRefundQuantity/DialogRefundQuantity";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import Header from "./components/Header/Header";
import MobileListItem from "./components/MobileListItem/MobileListItem";
import MobileTotalAmount from "./components/MobileTotalAmount/MobileTotalAmount";

const ContainerStyled = styled(Container)<ContainerProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
    marginBottom: 0,
  } as CSSObject,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const Grid2Styled = styled(Grid2)<Grid2Props>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  } as CSSObject,
}));

const MobileList = styled(List)<ListProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: `-${theme.spacing(2)}`,
  marginRight: `-${theme.spacing(2)}`,
  overflowY: "auto",
}));

const MobileButtonRefund = styled(Button)<ButtonProps>(({ theme }: { theme: Theme }) => ({
  marginTop: "auto",
  marginBottom: theme.spacing(2),
}));

const MobileView = styled(Box)<BoxProps>(({ theme }: { theme: Theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  display: "flex",
  flexDirection: "column",
  height: "calc(100vh - 56px)",
}));

type RefundProps = {};
const Refund: React.FC<RefundProps> = (props) => {
  const {} = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const itemData = useSelector((state: storeProps) => state.refund.itemData);

  const [dialogRefundState, setDialogRefundState] = React.useState({
    open: false,
    dialogTitle: "",
    inputQuantity: 0,
  });

  const handleOnOpenDialog = (event: React.MouseEvent<HTMLDivElement>) => {
    // const itemId = event.currentTarget.getAttribute("data-item-id");
    const itemName = event.currentTarget.getAttribute("data-item-name");
    const itemCount = event.currentTarget.getAttribute("data-item-count");

    const parsedItemCount = itemCount ? Number.parseInt(itemCount) : 0;
    const parsedItemName = itemName ? itemName : "";

    if (parsedItemCount > 1) {
      setDialogRefundState((prevState) => {
        return {
          ...prevState,
          open: true,
          dialogTitle: parsedItemName,
          inputQuantity: parsedItemCount,
        };
      });
    }
  };

  const handleClose = () => {
    setDialogRefundState((prevState) => {
      return { ...prevState, open: false };
    });
  };

  return (
    <>
      <Header title="Refund" onBackNavigation=".." />

      <ContainerStyled maxWidth="lg">
        <Grid2Styled container spacing={2}>
          <Receipt
            itemData={itemData}
            onOpenDialog={handleOnOpenDialog}
            gridProps={{ size: 5.3 }}
          />
          <ForwardIcon gridProps={{ size: 1.4 }} />
          <RefundReceipt gridProps={{ size: 5.3 }} />
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
        isMobile={isMobile}
        isOpen={dialogRefundState.open}
        onClose={handleClose}
        inputQuantity={dialogRefundState.inputQuantity}
        dialogTitle={dialogRefundState.dialogTitle}
      />
    </>
  );
};

export default Refund;
