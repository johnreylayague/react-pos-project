import { Payments } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  IconProps,
  styled,
  Theme,
  ListItemTextProps,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PaymentsIcon = styled(Payments)<IconProps>(({ theme }: { theme: Theme }) => ({
  marginLeft: theme.spacing(1),
  color: "#797979",
}));

const TransactionInfo = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({
  textAlign: "right",
  alignSelf: "start",
  "& .MuiListItemText-primary": {
    color: "#797979",
  },
}));

const PaymentInfo = styled(ListItemText)<ListItemTextProps>(({}: { theme: Theme }) => ({}));

type ReceiptListItemProps = {
  link: string;
  paymentAmount: string;
  time: string;
  receiptTransactionNumber: string;
  refundtransactionNumber?: string;
};
const ReceiptListItem: React.FC<ReceiptListItemProps> = (props) => {
  const { link, paymentAmount, receiptTransactionNumber, refundtransactionNumber, time } = props;

  const contentRefundTransactionNumber = refundtransactionNumber
    ? ({
        secondary: (
          <Typography component={"div"} color="error">
            Refund #{refundtransactionNumber}
          </Typography>
        ),
      } as ListItemTextProps)
    : {};

  const contentPaymentTime = time
    ? ({
        secondary: <Typography component={"div"}>{time}</Typography>,
      } as ListItemTextProps)
    : {};

  return (
    <ListItem disablePadding>
      <ListItemButton component={Link} to={link} relative="path">
        <ListItemAvatar>
          <PaymentsIcon />
        </ListItemAvatar>

        <PaymentInfo {...contentPaymentTime}>₱{paymentAmount}</PaymentInfo>

        <TransactionInfo {...contentRefundTransactionNumber}>
          #{receiptTransactionNumber}
        </TransactionInfo>
      </ListItemButton>
    </ListItem>
  );
};

export default ReceiptListItem;
